const shareData = {
  title: 'Blog',
  text: 'Blog by Saroj Kumar Sahoo. Go checkout at:',
  url: 'https://sarojkumar007.github.io/blog',
}

const btn = document.querySelector('#share_btn');
const resultPara = document.querySelector('.result');

// Must be triggered some kind of "user activation"
btn.addEventListener('click', async () => {
  alert('Starting Share');
  alert(navigator.canShare(shareData));
  try {
    await navigator.share(shareData)
    resultPara.textContent = 'Blog shared successfully';
    alert('Finish');
  } catch(err) {
    resultPara.textContent = 'Error: ' + err
  }
});
