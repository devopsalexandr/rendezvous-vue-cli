import HttpApiClient from "./HttpApiClient";

const UserConversationService = {

    getAll() {
        return HttpApiClient.get('/conversations');
    },

    getMessagesByConversationId(id) {
        return HttpApiClient.get('/conversations/' + id + '/messages');
    },

    sendMessage(receiverId, message) {

        let dataObj = {
            body: message,
            receiverId: receiverId
        };

        return  HttpApiClient.post('/conversations/messages', dataObj);
    }
};

export default UserConversationService;