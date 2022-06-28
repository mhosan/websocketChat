const socket = io();
const messageForm = document.querySelector('#messageForm');
const userNameInput = document.querySelector('#userNameInput');
const messageInput = document.querySelector('#messageInput');
const messagesPool = document.querySelector('#messagesPool');

function sendMessage(messageInfo) {
    socket.emit('client:message', messageInfo);
};
function renderMessages(messagesInfo) {
    messagesPool.innerHTML = '';
    messagesInfo.forEach(messageInfo => {
        const message = document.createElement('div');
        message.classList.add('message');
        message.innerHTML = `
            <div class="message__user">
            <strong>${messageInfo.userName}</strong>
            <em>${messageInfo.message}</em>
            </div>
        `;
        messagesPool.appendChild(message);
    }
    );
}

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const messageInfo = {
        userName: userNameInput.value,
        message: messageInput.value
    };
    sendMessage(messageInfo);
    //messageInput.value = '';
});

socket.on('server:message', renderMessages);

