class ChatUI {
    constructor(options, apiManager) {
        this.options = options;
        this.apiManager = apiManager;

        // ... Other UI methods
    }

    async getMessage() {
        this.container.querySelector('.content .messages').scrollTop = this.container.querySelector('.content .messages').scrollHeight;
        let messages = [{ role: 'system', content: 'You are a helpful assistant.' }, ...this.selectedConversation.messages].map(message => {
            return { role: message.role, content: message.content };
        });

        try {
            const data = await this.apiManager.sendMessage(this.options.model, messages, this.options.maxTokens);

            // ... Handle data and display results
        } catch (error) {
            this.showErrorMessage(error.message);
        }
    }

    // ... Other UI methods
}

export default ChatUI;
