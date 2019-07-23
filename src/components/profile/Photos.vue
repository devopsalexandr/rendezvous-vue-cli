<template>
    <div class="tab-pane fade" id="photos" role="tabpanel" aria-labelledby="photos-tab">

        <show-photo v-if="showModal" :image="img" @closed="showModal = false"></show-photo>

        <div class="row" v-if="photos && photos.length > 0">
            <div class="col-md-4" v-for="photo in photos" :key="photo.id">
                <div class="card mb-4 shadow-sm">
                    <div class="card-body" @click="show(photo.path)">
                        <img :src="photo.path" />
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            User uploads photos soon....
        </div>

    </div>
</template>

<script>

    import ShowPhoto from "./ShowPhoto";

    export default {
        props: {
            photos: Array,
        },

        data() {
            return {
                showModal: false,
                img: null
            }
        },

        components: {
            'show-photo': ShowPhoto
        },

        methods: {
            show(photo){
                this.img = photo;
                this.showModal = true;
            }
        }
    }
</script>

<style scoped>

</style>