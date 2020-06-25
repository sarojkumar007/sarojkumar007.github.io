const url = `https://chat-sarojkumar007.herokuapp.com:3000`;

const socket = io(url);
const message_form = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

const name = prompt('What is your Name?');

appendMessage(`You (<strong>${name}</strong>) Joined!`);
socket.emit('new-user', name);

socket.on('user-connected', name => {
	appendMessage(`<strong>${name}</strong> Connected!`);
})
socket.on('user-disconnected', name => {
	appendMessage(`<strong>${name}</strong> Left!`,'user_left');
})

socket.on('chat-message', data => {
	appendMessage(`<strong>${data.name}</strong>: ${data.message}`,'msg_from');
})

message_form.addEventListener('submit', (e) => {
	e.preventDefault()
	const message = messageInput.value;
	if(message){
		socket.emit('send-chat_msg', message);
		appendMessage(`<strong>You</strong>: ${message}`,'msg_to');
		messageInput.value = "";
	}
})

function appendMessage(msg, type = "new"){
	let markup;
	if (type === 'msg_from') {
		markup = `<div class="chat_box chat_box_from"><p class="chat chat_from">${msg}</p></div>`;
	}
	else if(type === 'msg_to'){
		markup = `<div class="chat_box chat_box_to"><p class="chat chat_to">${msg}</p></div>`;
	}
	else if (type === 'user_left') {
		markup = `<p class="chat_info user_left">${msg}</p>`;
	}
	else{
		markup = `<p class="chat_info">${msg}</p>`;
	}
	document.querySelector('.message_container').insertAdjacentHTML('beforeend', markup);
}