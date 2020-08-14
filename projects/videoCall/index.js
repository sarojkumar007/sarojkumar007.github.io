window.onload = function() {
    //Normalize the various vendor prefixed versions of getUserMedia
    navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if(navigator.getUserMedia) {
    navigator.getUserMedia({
        video: true,
        audio: false
    },
    function(stream) {
        var Peer = require('simple-peer');
        var peer = new Peer({
            initiator: location.hash === '#init',
            trickle: false,
            stream: stream
        });
        peer.on('signal', function(data) {
            document.getElementById('yourId').value = JSON.stringify(data);
        })

        document.getElementById('connect').addEventListener("click", function() {
            var otherId = JSON.parse(document.getElementById('otherId').value);
            peer.signal(otherId);
        })

        peer.on("stream", function(stream) {
            var video = document.getElementById("video");

            window.addEventListener('resize', resize, false);
            video.height = 100; /* to get an initial width to work with*/
            resize();

            function resize() {
            var videoRatio = video.height / video.width;
            var windowRatio = window.innerHeight / window.innerWidth; /* browser size */

                if (windowRatio < videoRatio) {
                    if (window.innerHeight > 50) { /* smallest video height */
                            video.height = window.innerHeight;
                    } else {
                        video.height = 50;
                }
                } else {
                    video.width = window.innerWidth;
                }

            };

            video.srcObject = stream
            video.play()
        })
    },
    function(err) {
        console.error(err);
    })
}else {
    alert("Sorry, your browser does not support getUserMedia.");
}



