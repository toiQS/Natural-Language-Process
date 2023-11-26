// import ChatAI from './api/ChatApp.js';

// // Example usage
// const options = {
//     apiKey: 'c7e8efcf-0df1-4283-aa8a-10dea7ee2597',
//     // ... Other options
// };

// const chatAI = new ChatAI(options);

// ... Other main logic



document.addEventListener('DOMContentLoaded', function () {
    const messagesContainer = document.getElementById('chat-messages');
    const userInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', function () {
        const userMessage = userInput.value.trim();
        if (userMessage !== '') {
            addMessage('user', userMessage);
            // Simulate response from assistant (replace this with actual API call)
            setTimeout(function () {
                addMessage('assistant', 'Hello! How can I help you?');
            }, 1000);
            userInput.value = '';
        }
    });

    function addMessage(role, content) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', role + '-message');
        messageDiv.innerHTML = content;
        messagesContainer.appendChild(messageDiv);

        // Scroll to the bottom to show the latest message
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});
