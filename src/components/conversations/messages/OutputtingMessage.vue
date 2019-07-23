<template>
    <div class="outgoing_msg">
        <div class="sent_msg">
            <p>{{ message.body }}</p>
            <span class="time_date"> {{ message.created_at }}</span> </div>
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