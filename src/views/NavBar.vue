<template>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <router-link :to="{name: 'home'}" tag="h5" class="my-0 mr-md-auto font-weight-normal">Rendezvous</router-link>

        <template v-if="!user.isAuthenticated">

            <nav class="my-2 my-md-0 mr-md-3">
                <router-link :to="{name: 'register'}">Register</router-link>
            </nav>
            <router-link :to="{name: 'login'}" class="btn btn-outline-primary">Sign in</router-link>

        </template>

        <template v-else>

            <nav class="my-1 my-md-0 mr-md-3">
                <router-link :to="{name: 'search'}" class="p-2 text-dark">Search</router-link>
                <router-link :to="{name: 'conversations'}" class="p-2 text-dark">Conversations</router-link>
            </nav>

            <div class="btn-group dropleft">
                <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{ user.data.name }}
                </button>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <router-link :to="{name: 'profile'}" class="dropdown-item">Profile</router-link>
                    <a class="dropdown-item" href="#">Edit profile</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#" @click.prevent="logout">Logout</a>
                </div>
            </div>

        </template>

    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "NavBar",

        computed: {
            ...mapGetters({
                user: 'auth/user'
            })
        },
    }
</script>

<style scoped>

</style>