<template>
<div class="mesgs">
    <div class="msg_history" ref="messages">
        <div v-for="(message, index) in conversation.messages" :key="index">

            <template v-if="authUser.id  !== message.user.id">
                <incoming-message :message="message"></incoming-message>
            </template>
            <template v-else>
                <outputting-message :message="message"></outputting-message>
            </template>

        </div>
    </div>
    <span class="typing" v-if="isTyping"> {{ isTyping.name }} is typing ...</span>

    <type-message v-if="conversation.messages"></type-message>

</div>
</template>

<script>


    import IncomingMessage from "./messages/IncomingMessage";
    import OutputtingMessage from "./messages/OutputtingMessage";
    import TypeMessage from "./messages/TypeMessage";

    export default {

        props: {
            conversation: Object
        },

        data() {
            return {
                isTyping: null,
            }
        },

        components: {
            'incoming-message': IncomingMessage,
            'outputting-message': OutputtingMessage,
            'type-message': TypeMessage
        },

        computed: {
            authUser() {
                return this.$store.getters['auth/userData'];
            },
            currentConversation() {
                return this.conversation.data
            }
        },

        methods: {
            initEcho(){
                if(this.currentConversation){
                    this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight;

                    window.Echo.private('conversation.'+ this.currentConversation.id)
                        .listen('MessageCreated', ({message}) => {

                            if(this.authUser.id !== message.user.id) this.$store.commit('conversations/addMessage', message);

                        }).listenForWhisper('typing', (typeEvent) => {
                        this.isTyping = typeEvent;

                        setTimeout(() => {
                            this.isTyping = null;
                        }, 3000);
                    });
                }
            }
        },

        mounted() {
            this.initEcho();
        },

        watch: {
            currentConversation(newC, oldC) {
                window.Echo.leave('conversation.'+ oldC.id);

                this.initEcho();
            }
        },

        updated() {
            this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight;
        }

    }
</script>

<style scoped>

    .mesgs {
        float: left;
        padding: 30px 15px 0 25px;
        width: 60%;
    }

    .msg_history {
        height: 516px;
        overflow-y: auto;

    }

    .typing {
        color: #4c4c4c;
        font-size: 12px;
    }

</style>