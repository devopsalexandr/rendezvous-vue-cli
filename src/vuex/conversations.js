import UserConversationService from "../services/UserConversationService";

export default {
    namespaced: true,

    state: {
        conversations: [],

        conversation: {
            data: null,
            messages: [],
            receiver: null
        }
    },

    getters: {

        conversations(state){
            return state.conversations;
        },

        messages(state){
            return state.conversation.messages;
        },

        conversation(state){
            return state.conversation.data;
        },

        receiver(state) {
            return state.conversation.receiver;
        }
    },

    mutations: {

        setConversations(state, conversations) {
            state.conversations = conversations;
        },

        setConversationMessages(state, messages) {
            state.conversation.messages = messages;
        },

        setConversation(state, conversation){
            return state.conversation.data = conversation
        },

        setReceiver(state, receiver){
            return state.conversation.receiver = receiver
        },

        addMessage(state, message){
            return state.conversation.messages.push(message)
        }
    },

    actions: {

        getConversations({ commit }) {
            return UserConversationService.getAll().then((response) => {
                commit('setConversations', response.data.data);
            });
        },

        getMessages({ state, commit, rootState }, conversation) {
            return UserConversationService.getMessagesByConversationId(conversation.id).then((response) => {

                commit('setConversation', conversation);
                commit('setConversationMessages', response.data.data);

                (rootState.auth.user.data.id === state.conversation.data.user_one.id)
                    ? commit('setReceiver', state.conversation.data.user_two)
                    : commit('setReceiver', state.conversation.data.user_one)

            });
        },

        sendMessage({ commit }, { receiverId, body }) {
            return UserConversationService.sendMessage(receiverId, body).then((response) => {
                commit('addMessage', response.data.data);
            });
        }
    }
}