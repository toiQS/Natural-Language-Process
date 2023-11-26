class ChatApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async sendMessage(model, messages, maxTokens) {
        try {
            const response = await fetch('https://api.caipacity.com/v1/chat/completions', {
                cache: 'no-cache',
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + this.apiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'model': model,
                    'messages': messages,
                    'max_tokens': maxTokens
                })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch API');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error sending message:', error);
            throw error;
        }
    }
}

export default ChatApi;
