<template>

<div v-if="user">
    <form @submit.prevent="getSearchResults">
        <div class="form-row">
            <div class="form-group col-md-4">
                <label>Look For</label>
                <select class="custom-select" v-model="searchForm.sex">
                    <option value="" :selected="user.lookfor === '' ">all</option>
                    <option value="male" :selected="user.lookfor === 'male' ">male</option>
                    <option value="female" :selected="user.lookfor === 'female' ">female</option>
                </select>
            </div>

            <div class="form-group col-md-4">
                <label>City</label>
                <input type="text" class="form-control" v-model="searchForm.city">
            </div>

        </div>

        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="car" v-model="searchForm.car">
            <label class="custom-control-label" for="car">Have a car?</label>
        </div>

        <br>

        <button type="submit" class="btn btn-primary">Search</button>

        <hr>
    </form>
</div>



</template>

<script>
    export default {
        props: {
            user: Object
        },

        data() {
            return {
                searchForm: {
                    car: null,
                    sex: (this.user.sex === 'male') ? 'female' : 'male',
                    city: this.user.city
                }
            }
        },

        methods: {

            cleanObject(obj){
                Object.keys(obj).forEach(key => {
                    if (!obj[key]) delete obj[key];
                });
            },

            getSearchResults() {
                this.cleanObject(this.searchForm);

                this.$store.dispatch('search/findUsers', this.searchForm);
            },
        }
    }
</script>

<style scoped>

</style>