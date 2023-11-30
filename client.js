const socket = io();

function changeUsername() {
  const username = document.getElementById('username').value;
  socket.emit('change_username', { username: username });
}

function sendMessage() {
  const message = document.getElementById('message').value;
  socket.emit('new_message', { message: message });
  document.getElementById('message').value = '';
}

socket.on('new_message', (data) => {
  const chat = document.getElementById('chat');
  const listItem = document.createElement('li');
  listItem.innerText = `${data.username}: ${data.message}`;
  chat.appendChild(listItem);
});
