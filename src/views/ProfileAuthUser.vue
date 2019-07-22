<template>
    <div class="container emp-profile">
        <div class="row" v-if="user">

            <avatar v-if="user.avatar" :image="user.avatar.path" :isOwner="true" />

            <div class="col-md-6">

                <div class="profile-head">
                    <h5>
                        {{ user.name }}
                    </h5>

                    <h6>this is status</h6>

                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
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
<!--                <input v-if="!editing" type="submit" class="profile-edit-btn" @click="startEditProfile" value="Edit Profile"/>-->
<!--                <input v-else type="submit" class="btn btn-primary" @click="saveProfileChanges" value="Save changes"/>-->
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
<!--                <user-data :user="user" :editable="ownered()" />-->
            </div>

        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Avatar from "../components/profile/Avatar";

    export default {

        components: {
            'avatar': Avatar
        },

        computed: {
            ...mapGetters({
                user: 'auth/userData'
            })
        }
    }
</script>

<style scoped>

    .profile-img{
        text-align: center;
    }
    .profile-img img{
        width: 70%;
        height: 100%;
    }
    .profile-img .file {
        position: relative;
        overflow: hidden;
        margin-top: -20%;
        width: 70%;
        border: none;
        border-radius: 0;
        font-size: 15px;
        background: #212529b8;
    }
    .profile-img .file input {
        position: absolute;
        opacity: 0;
        right: 0;
        top: 0;
    }

</style>