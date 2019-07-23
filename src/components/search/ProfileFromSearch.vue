<template>
        <div class="card mb-4 shadow-sm">

            <div class="bd-placeholder-img card-img-top">
                <img v-if="user.avatar" :src="user.avatar.path" />
                <img v-else src="../../assets/images/default-avatar.png" />
            </div>

            <div class="card-body">
                <p class="card-text"><b>{{ user.name }}</b>, {{ user.birthday }}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <router-link :to="{ name: 'profileById', params: { id: user.id }}" class="btn btn-sm btn-outline-secondary">View Profile</router-link>
                    </div>
                    <small class="text-muted"><i>{{ user.city }}</i></small>
                </div>
            </div>
        </div>

</template>

<script>
    export default {
        props: {
            user: Object
        }
    }
</script>

<style scoped>

</style>