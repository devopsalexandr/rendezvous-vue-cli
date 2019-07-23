<template>
    <div class="tab-content profile-tab" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

            <div  v-if="!editing">

                <div class="row">
                    <div class="col-md-6">
                        <label>Name</label>
                    </div>
                    <div class="col-md-6">
                        <p>{{ user.name }}</p>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label>Sex</label>
                    </div>
                    <div class="col-md-6">
                        <p>{{ user.sex }}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label>Email</label>
                    </div>
                    <div class="col-md-6">
                        <p>{{ user.email }}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label>Country</label>
                    </div>
                    <div class="col-md-6">
                        <p>{{ user.country }}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label>City</label>
                    </div>
                    <div class="col-md-6">
                        <p>{{ user.city }}</p>
                    </div>
                </div>

            </div>

            <div v-else>
                <div class="row">
                    <div class="col-md-6">
                        <label>Name</label>
                    </div>
                    <div class="col-md-6">
                        <input class="form-control" v-model="tempValues.name">
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label>Sex</label>
                    </div>
                    <div class="col-md-6">
                        <select class="custom-select">
                            <option value="male" :selected="user.sex === 'male'">male</option>
                            <option value="female" :selected="user.sex === 'female'">female</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label>Email</label>
                    </div>
                    <div class="col-md-6">
                        <input class="form-control" v-model="tempValues.email">
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label>Country</label>
                    </div>
                    <div class="col-md-6">
                        <input class="form-control" v-model="tempValues.country">
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label>City</label>
                    </div>
                    <div class="col-md-6">
                        <input class="form-control" v-model="tempValues.city">
                    </div>
                </div>
            </div>

        </div>


        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

            <div  v-if="!editing">

                <div class="row">
                    <div class="col-md-6">
                        <label>Look for</label>
                    </div>
                    <div class="col-md-6">
                        <p>{{ user.lookfor }}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label>Children</label>
                    </div>
                    <div class="col-md-6">
                        <p>{{ user.children }}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label>Marital</label>
                    </div>
                    <div class="col-md-6">
                        <p>{{ user.marital }}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label>Education</label>
                    </div>
                    <div class="col-md-6">
                        <p>{{ user.education }}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label>Car</label>
                    </div>
                    <div class="col-md-6">
                        <p>{{ user.car ? 'yes' : 'no' }}</p>
                    </div>
                </div>

            </div>

            <div v-else>

                <div class="row">
                    <div class="col-md-6">
                        <label>Look for</label>
                    </div>
                    <div class="col-md-6">
                        <select class="custom-select" v-model="tempValues.lookfor">
                            <option value="none" :selected="tempValues.lookfor === 'none'">none</option>
                            <option value="male" :selected="tempValues.lookfor === 'male'">male</option>
                            <option value="female" :selected="tempValues.lookfor === 'female'">female</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label>Children</label>
                    </div>
                    <div class="col-md-6">
                        <select class="custom-select" v-model="tempValues.children">
                            <option value="none" :selected="user.children === 'none'">none</option>
                            <option value="yes" :selected="user.children === 'yes'">Yes</option>
                            <option value="no" :selected="user.children === 'no'">No</option>
                            <option value="together" :selected="user.children === 'together'">Live together</option>
                            <option value="apart" :selected="user.children === 'apart'">live apart</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label>Marital</label>
                    </div>
                    <div class="col-md-6">
                        <select class="custom-select" v-model="tempValues.marital">
                            <option value="none" :selected="user.marital === 'none'">none</option>
                            <option value="yes" :selected="user.marital === 'yes'">Yes</option>
                            <option value="no" :selected="user.marital === 'no'">No</option>
                            <option value="together" :selected="user.marital === 'together'">Live together</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label>Education</label>
                    </div>
                    <div class="col-md-6">
                        <select class="custom-select" v-model="tempValues.education">
                            <option value="none" :selected="tempValues.education === 'none'">none</option>
                            <option value="HighSchool" :selected="tempValues.education === 'HighSchool'">HighSchool</option>
                            <option value="HigherEducationUniversity" :selected="tempValues.education === 'HigherEducationUniversity'">HigherEducationUniversity</option>
                            <option value="MDPhD" :selected="tempValues.education === 'MDPhD'">MDPhD</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <label>Car</label>
                    </div>
                    <div class="col-md-6">
                        <input type="checkbox" v-model="tempValues.car" :checked="tempValues.car"> {{ tempValues.car ? 'yes' : 'no' }}
                    </div>
                </div>

            </div>

        </div>

        <photos :photos="user.photos" />

    </div>

</template>

<script>

    import UserService from "../../services/UserService";
    import Photos from "./Photos";

    export default {
        props: {
            user: Object,
            editable: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                tempValues : {
                    name: this.user.name,
                    sex: this.user.sex,
                    email: this.user.email,
                    country: this.user.country,
                    city: this.user.city,

                    lookfor: this.user.lookfor,
                    children: this.user.children,
                    marital: this.user.marital,
                    education: this.user.education,
                    car: this.user.car
                }
            }
        },

        components: {
            'photos': Photos
        },

        computed: {
            editing(){
                return this.$store.getters['profile/editing'];
            },

            saved(){
                return this.$store.getters['profile/saved'];
            }
        },

        watch: {
            saved() {
                if(this.saved){
                    UserService.updateProfile(this.tempValues).then((resp) => {

                        this.$store.commit('auth/setUserData', resp.data.data);
                    });
                    this.$store.commit('profile/makeSaved', false);
                }
            }
        }
    }
</script>

<style scoped>
    .profile-tab p{
        font-weight: 600;
        color: #0062cc;
    }
</style>