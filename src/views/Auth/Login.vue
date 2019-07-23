<template>
    <div class="container py-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <div class="alert alert-danger" v-if="errors.root">{{ errors.root }}</div>
                        <form method="POST" @submit.prevent="submit">

                            <div class="form-group row">
                                <label for="email" class="col-sm-4 col-form-label text-md-right">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email"
                                           v-bind:class="{ 'is-invalid': errors.email }"
                                           v-model="email" autofocus>

                                    <span class="invalid-feedback" role="alert" v-if="errors.email">
                                        <strong v-for="e in errors.email">{{ e }}</strong>
                                    </span>

                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password"
                                           v-model="password"
                                           v-bind:class="{ 'is-invalid': errors.password }">

                                    <span class="invalid-feedback" role="alert" v-if="errors.password">
                                        <strong v-for="e in errors.password">{{ e }}</strong>
                                    </span>

                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember">

                                        <label class="form-check-label" for="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>

                                    <a class="btn btn-link" href="#">
                                        Forgot Your Password?
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
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
                email: null,
                password: null,
                errors: []
            }
        },

        methods: {
            ...mapActions({
                login: 'auth/login'
            }),

            submit() {
                this.login({
                    payload: {
                        email: this.email,
                        password: this.password
                    },

                    context: this
                }).then(() => {
                    this.$router.replace({name: 'profile'})
                });
            }

        }
    }
</script>
