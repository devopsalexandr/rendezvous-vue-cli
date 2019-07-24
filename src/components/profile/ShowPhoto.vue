<template>
    <div class="modal fade show" id="exampleModalScrollable" style="display: block;" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-modal="true">
        <div class="modal-dialog modal-dialog-scrollable" role="document">
            <div class="modal-content">

                <div class="modal-body" v-if="image !== null">
                    <img :src="image" />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="$emit('closed')">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            image: String
        }
    }
</script>

<style scoped>

</style>