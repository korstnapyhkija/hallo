<template>
    <div class="modal is-active">
        <div class="modal-background" @click="close"></div>
        <div class="modal-content">
          <slot></slot>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="close"></button>
    </div>
</template>

<script>
export default {
    props: {
        active: Boolean
    },
    methods: {
        close(){
            this.$emit('close');
        }
    }
}
</script>

<style>

</style>