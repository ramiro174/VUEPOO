<script setup>
</script>
<template>
    <v-container class="bg-light-blue-lighten-3  h-screen d-flex align-center">
        <v-row class="bg-light-blue-lighten-2">
            <v-col col="12" col-md="8" offset="2"  class="bg-red-lighten-1">
                <router-link :to="{name:'login'}">  <h1  class="text-white">Página de Bienvenida del servicio a ofrecer</h1>
                </router-link>
            </v-col>
            <v-col col="12" col-md="2"   class="bg-red-lighten-2">
                <h1  class="text-white">:)</h1>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>
</style>
