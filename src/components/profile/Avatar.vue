<template>
    <div class="col-md-4">
        <div class="profile-img">
            <img :src="avatar" />
            <div class="file btn btn-lg btn-primary" v-if="isOwner">
                Change Photo
                <input type="file" name="file" @change="onFileSelected" />
            </div>
        </div>

    </div>
</template>

<script>
    import UserService from "../../services/UserService";

    export default {
        props: {
            image: {
                type: String,
                default: require('@/assets/images/default-avatar.png')
            },

            isOwner: Boolean

        },

        data() {
            return {
                selectedFile: null,
                avatar: this.image
            }
        },

        methods: {
            onFileSelected(e) {
                this.selectedFile = e.target.files[0];
                this.upload();
            },

            upload() {
                let fd = new FormData();
                fd.append('file', this.selectedFile, this.selectedFile.name);

                UserService.uploadAvatar(fd).then((response) => {
                    this.avatar = response.data.data.path;
                })
            }
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