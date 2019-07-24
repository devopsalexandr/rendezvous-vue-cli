<template>

    <div>

        <h6 class="status" v-if="!editing" @click="enableEditing">
            <div v-if="initStatus"> {{ initStatus }} </div>
            <div v-else-if="editable"> Click me to edit... </div>
        </h6>

        <h6 v-if="editing">
            <div class="form-row">
                <input v-model="tempValue" class="input"/>
                <button class="btn btn-primary btn-sm" @click="disableEditing"> Cancel </button>
                <button class="btn btn-danger btn-sm" @click="saveEdit"> Save </button>
            </div>
        </h6>

    </div>

</template>

<script>
    import UserService from "../../services/UserService";

    export default {
        props: {
            status: {
                type: String,
                default: null
            },

            editable: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                tempValue: null,
                editing: false,
                initStatus: this.status,
            }
        },

        methods: {
            enableEditing() {
                if(this.editable){
                    this.editing = true;
                    this.tempValue = this.initStatus
                }
            },

            disableEditing () {
                this.editing = false;
            },

            saveEdit () {
                let status = this.tempValue;

                UserService.updateStatus(status).then((resp) => {
                    this.initStatus = resp.data.data.tiny_about;
                    this.editing = false;
                })
            }
        }
    }
</script>

<style scoped>

    .status {
        font-size: 14px;
        color: #6c757d;
        font-style: oblique;
    }

</style>