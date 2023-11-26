import ChatApi from '../api/ChatApi';
import ChatUI from '../ui/ChatUI';

class ChatApp {
    constructor(options) {
        // ... Initialization logic

        this.apiManager = new ChatApi(options.apiKey);
        this.chatUI = new ChatUI(options, this.apiManager);

        // ... Other initialization
    }

    // ... Other methods
}

export default ChâtApp;
