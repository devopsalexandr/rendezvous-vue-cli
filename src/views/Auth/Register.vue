<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Login</div>

                <div class="card-body">
                    <form @submit.prevent="submit">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" :class="{ 'is-invalid' : errors.email }" id="inputEmail4" placeholder="Email" v-model="form.email">

                                <span class="invalid-feedback" role="alert" v-if="errors.email">
                                    <strong>{{ errors.email[0] }}</strong>
                                </span>

                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" class="form-control" :class="{ 'is-invalid' : errors.password }" id="inputPassword4" placeholder="Password" v-model="form.password">

                                <span class="invalid-feedback" role="alert" v-if="errors.password">
                                    <strong>{{ errors.password[0] }}</strong>
                                </span>

                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md">
                                <label for="inputAddress">Country</label>
                                <input type="text" class="form-control" :class="{ 'is-invalid' : errors.country }" id="inputAddress" placeholder="Russian Federation" v-model="form.country">

                                <span class="invalid-feedback" role="alert" v-if="errors.country">
                                        <strong>{{ errors.country[0] }}</strong>
                                </span>
                            </div>

                            <div class="form-group col-md">
                                <label for="inputCity">City</label>
                                <input type="text" class="form-control" :class="{ 'is-invalid' : errors.city }" id="inputCity" v-model="form.city">

                                <span class="invalid-feedback" role="alert" v-if="errors.city">
                                    <strong>{{ errors.city[0] }}</strong>
                                </span>

                            </div>

                        </div>


                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">Sex</label>
                                <select class="custom-select" :class="{ 'is-invalid' : errors.sex }" v-model="form.sex">
                                    <option selected>Choose your sex</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <!--                                <input type="text" class="form-control" :class="{ 'is-invalid' : errors.sex }" id="inputSex" v-model="form.sex">-->

                                <span class="invalid-feedback" role="alert" v-if="errors.sex">
                                    <strong>{{ errors.sex[0] }}</strong>
                                </span>

                            </div>

                            <div class="form-group col-md-2">
                                <label for="inputName">Name</label>
                                <input type="text" class="form-control" :class="{ 'is-invalid' : errors.name }" id="inputName" v-model="form.name">

                                <span class="invalid-feedback" role="alert" v-if="errors.name">
                                    <strong>{{ errors.name[0] }}</strong>
                                </span>

                            </div>

                            <div class="form-group col-md-4">
                                <label for="dob">Day of Birthday</label>
                                <input class="form-control" id="dob" type="date" v-model="form.birthday">

                                <span class="invalid-feedback" role="alert" v-if="errors.birthday">
                                    <strong>{{ errors.birthday[0] }}</strong>
                                </span>

                            </div>

                        </div>

                        <button type="submit" class="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {

        data(){
            return {
                form: {
                    email: null,
                    name: null,
                    password: null,
                    country: null,
                    city: null,
                    birthday: null,
                    sex: null
                },

                errors: []
            }
        },

        methods: {
            ...mapActions({
                register: 'auth/register'
            }),

            submit() {
                this.register({
                    payload: this.form,
                    context: this
                }).then(() => {
                    this.$router.replace({name: 'profile'})
                })
            }
        }

    }
</script>

<style scoped>

</style>