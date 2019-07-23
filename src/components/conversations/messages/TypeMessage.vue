<template>
    <div class="type_msg">
        <div class="input_msg_write">
            <input type="text" v-model="message" @keydown="handleMessageInput" class="write_msg" placeholder="Type a message" />
<!--            <button class="msg_send_btn" type="button" @click="sendMessage"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>-->
            <button class="msg_send_btn material-icons" type="button" @click="sendMessage">send</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {

        data() {
            return {
                message: null
            }
        },

        computed: {
            ...mapGetters('conversations', [
                'receiver',
                'conversation'
            ]),

            ...mapGetters('auth', [
                'user'
            ])
        },

        methods: {

            handleMessageInput(e) {

                // window.Echo.private('conversation.' + this.conversation.id).whisper('typing', this.user.data);
                // if(e.keyCode === 13 && !e.shiftKey){
                //     e.preventDefault();
                //     this.sendMessage();
                // }
            },

            sendMessage() {

                if(!this.message || this.message.trim() === ''){
                    alert('input anything');
                    return;
                }

                let message = {
                    body: this.message,
                    receiverId: this.receiver.id
                };

                this.$store.dispatch('conversations/sendMessage', message).then(() => {
                    this.message = '';
                })
            }
        }
    }
</script>

<style scoped>

</style>