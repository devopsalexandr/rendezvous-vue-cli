<template>
    <div class="incoming_msg">
        <div class="incoming_msg_img">
            <img v-if="message.user.avatar" :src="message.user.avatar.path" :alt="message.user.name" class="rounded">
            <img v-else :src="require('@/assets/images/user-profile.png')" :alt="message.user.name" class="rounded">
        </div>
        <div class="received_msg">
            <div class="received_withd_msg">
                <p>{{ message.body }}</p>
                <span class="time_date"> {{ message.created_at }} </span></div>
        </div>
    </div>
</template>

<script>

    export default {

        props: {
            message: Object
        }
    }
</script>

<style scoped>

</style>