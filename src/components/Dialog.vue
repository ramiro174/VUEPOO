<script setup>
defineProps({
    isActive:{
        type:Boolean,
        default:true
    }
})
</script>
<template>
    <v-dialog transition="dialog-top-transition" width="auto">

        <template v-slot:default="{ isActive }">
            <v-dialog v-model="dialog" width="auto">
                <v-card>
                    <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" block @click="dialog = false"
                        >Close Dialog</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </template>
    </v-dialog>
</template>
<style scoped>
</style>
