<script setup>
defineProps({
    mostrar:{
        type:Boolean,
        default:false
    }
})
</script>
<template>
    <v-overlay :model-value="mostrar" class="align-center justify-center">
        <v-progress-circular
                color="primary"
                indeterminate
                size="64"
        ></v-progress-circular>
    </v-overlay>

</template>
<style scoped>
</style>
