<template>
    <div class="modal fade show" style="display: block" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <span>Recepient: {{user.name}}</span>
                        </div>
                        <hr>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Message:</label>
                            <textarea class="form-control" id="message-text" v-model="body"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
                    <button type="button" class="btn btn-primary" @click="sendMessage">Send message</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            user: Object
        },

        methods: {
            sendMessage() {

                if(this.body === null){
                    alert('input something');
                    return;
                }

                let data = {
                    body: this.body,
                    receiverId: this.user.id
                };

                // this.$store.dispatch('conversations/sendMessage', data);

                this.body = null;

                this.closeModal();

            },

            closeModal() {
                this.$emit('closeModalOfMessage');
            }
        }
    }
</script>

<style scoped>

</style>