<template>
    <div class="chat_list" :class="{'active_chat': activeClass}" @click="getMessages(conversation)">
        <div class="chat_people">
            <div class="chat_img">
                <img v-if="getReceiver.avatar" :src="getReceiver.avatar.path" class="rounded-lg">
                <img v-else :src="defaultAvatar" class="rounded">
            </div>
            <div class="chat_ib">
                <h5> {{ getReceiver.name }} <span class="chat_date">{{ getDate }}</span></h5>
                <p>{{ conversation.last_message }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {

        props: {
            conversation: Object,
        },

        data() {
            return {
                defaultAvatar: require('@/assets/images/user-profile.png')
            }
        },

        computed: {

            activeClass() {

                if (!this.$store.getters['conversations/conversation']) {
                    return false;
                }

                return this.$store.getters['conversations/conversation'].id === this.conversation.id
            },

            getDate() {
                return moment(this.conversation.updated_at).format('ll');
            },

            getReceiver() {

                if (!this.$store.getters['auth/user'].data) {
                    return {name: '', avatar: this.defaultAvatar};
                }

                return (this.$store.getters['auth/user'].data.id === this.conversation.user_one.id)
                    ? this.conversation.user_two
                    : this.conversation.user_one;
            }
        },

        methods: {

            async getMessages(conversation){ //async await to catch error in handler
                await this.$store.dispatch('conversations/getMessages', conversation);
            }

        }

    }
</script>

<style scoped>

</style>