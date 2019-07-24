<template>
    <div v-if="authUser">
        <search-form :user="authUser"></search-form>

        <div class="album py-5 bg-light">
            <div class="container">

                <div class="row" v-if="users.data !== null">

                    <div class="col-md-4" v-for="user in users.data" :key="user.id">
                        <search-profile :user="user"></search-profile>
                    </div>

                </div>
                <div v-else>
                    searching....
                </div>

                <div class="md-5" v-if="users.data && users.data.length === 0">
                    No such result :(
                </div>

            </div>
        </div>

        <br>
        <button v-if="pagesListingEnded" type="button" class="btn btn-primary btn-lg btn-block" @click="loadMoreUsers">Load more profiles</button>
    </div>

</template>

<script>

    import ProfileFromSearch from "../components/search/ProfileFromSearch";
    import SearchForm from "../components/search/SearchForm";

    export default {

        components: {
            searchProfile: ProfileFromSearch,
            searchForm: SearchForm
        },

        computed: {

            authUser() {
                return this.$store.getters['auth/user'].data;
            },

            users() {
                return this.$store.getters['search/users'];
            },

            lastPage(){
                return this.$store.getters['search/lastPage']
            },

            currentPage(){
                return this.$store.getters['search/currentPage']
            },

            pagesListingEnded() {
                return this.currentPage < this.lastPage;
            }
        },

        methods: {

            getSearchResults() {

                if(this.authUser){

                    let searchParams = {
                        city: this.authUser.city,
                        sex: (this.authUser.sex === 'male') ? 'female' : 'male'
                    };

                    this.$store.dispatch('search/findUsers', searchParams);
                }
            },

            loadMoreUsers() {
                let nextPage = this.currentPage + 1;

                this.$store.dispatch('search/findMoreUsers', nextPage);
            }
        },

        mounted() {
            this.getSearchResults();
        },

        watch: {
            authUser()  {
                this.getSearchResults();
            }
        }
    }
</script>
