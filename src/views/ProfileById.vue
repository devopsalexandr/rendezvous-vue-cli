<template>

    <div class="container emp-profile" v-if="user">
                <private-message v-if="showModalForm"  :user="user" v-on:closeModalOfMessage="closeModal" />
        <div class="row">

            <avatar v-if="user.avatar" :image="user.avatar.path"/>
            <avatar v-else :isOwner="true" />

            <div class="col-md-6">

                <div class="profile-head">
                    <h5>
                        {{ user.name }}
                    </h5>
                    <status :status="user.tiny_about" :editable="true" />

                    <p class="profile-rating">RANKINGS : <span>8/10</span></p>
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Interests</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" id="photos-tab" data-toggle="tab" href="#photos" role="tab" aria-controls="photos" aria-selected="false">Photos</a>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="col-md">
                <button type="button" class="btn btn-outline-secondary" @click="showModalMessage">Send message</button>

            </div>
        </div>
        <div class="row">

            <div class="col-md-4">
                <div class="profile-work">
                    <p>MENU</p>
                    <router-link :to="{name: 'search'}">Search</router-link><br/>
                    <a href="">Guests</a><br/>
                    <router-link :to="{name: 'conversations'}">Conversations</router-link>
                </div>
            </div>

            <div class="col-md-8">
                <data-user :user="user" />
            </div>

        </div>
    </div>
</template>

<script>
    import Status from "../components/profile/Status";
    import Avatar from "../components/profile/Avatar";
    import Data from "../components/profile/Data";
    import UserService from "../services/UserService";
    import PrivateMessage from "../components/profile/PrivateMessage";

    export default {
        props: ['id'],

        data() {
            return {
                showModalForm: false,
                body: null,
                loading: false,
                user: null
            }
        },

        methods: {

            fetchUserById(id) {
                this.loading = true;
                UserService.getProfileById(id).then((response) => {
                    this.user = response.data.data
                    // console.log(response.data.data);
                }).catch(() => {
                    this.$router.replace({name: 'notFound'})
                });
                this.loading = false;
            },

            showModalMessage() {
                this.showModalForm = true;
            },

            closeModal() {
                this.showModalForm = false;
            }
        },

        watch: {
            '$route'() {
                this.fetchUserById(this.id);
            }
        },

        created() {
            this.fetchUserById(this.id);
        },

        components: {
            'status': Status,
            'avatar': Avatar,
            'data-user': Data,
            'private-message': PrivateMessage
        }
    }
</script>

<style scoped>
    body{
        background: -webkit-linear-gradient(left, #3931af, #00c6ff);
    }

    .emp-profile{
        padding: 3%;
        margin-top: 3%;
        margin-bottom: 3%;
        border-radius: 0.5rem;
        background: #fff;
    }
    .profile-head h5{
        color: #333;
    }
    .profile-head h6{
        color: #0062cc;
    }
    .profile-edit-btn{
        border: none;
        border-radius: 1.5rem;
        width: 70%;
        padding: 2%;
        font-weight: 600;
        color: #6c757d;
        cursor: pointer;
    }
    .proile-rating{
        font-size: 12px;
        color: #818182;
        margin-top: 5%;
    }
    .profile-rating span{
        color: #495057;
        font-size: 15px;
        font-weight: 600;
    }
    .profile-head .nav-tabs{
        margin-bottom:5%;
    }
    .profile-head .nav-tabs .nav-link{
        font-weight:600;
        border: none;
    }
    .profile-head .nav-tabs .nav-link.active{
        border: none;
        border-bottom:2px solid #0062cc;
    }
    .profile-work{
        padding: 14%;
        margin-top: -15%;
    }
    .profile-work p{
        font-size: 12px;
        color: #818182;
        font-weight: 600;
        margin-top: 10%;
    }
    .profile-work a{
        text-decoration: none;
        color: #495057;
        font-weight: 600;
        font-size: 14px;
    }
    .profile-work ul{
        list-style: none;
    }
    .profile-tab label{
        font-weight: 600;
    }
    .profile-tab p{
        font-weight: 600;
        color: #0062cc;
    }
</style>