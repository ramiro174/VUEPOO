<script setup>
import {ref} from 'vue'

let pokemones = ref({})

function cargarpokemones() {

    const url = 'http://web.local/usuario/buscar/12'
    fetch(url)
        .then(response => response.json())
        .then(data => {console.log(data)

        });
}
</script>
<template>
    <h1> Listar todos los pokemon</h1>
    <v-btn @click="cargarpokemones"> cargar lista de pokemon</v-btn>
    <v-list>
        <v-list-item v-for="pokemon in pokemones" :key="pokemon.name">
            <router-link :to="{name:'mostrarPokemon',params:pokemon.name}">
                <v-list-item-title>{{ pokemon.name }}</v-list-item-title>
            </router-link>
        </v-list-item>
    </v-list>
</template>
<style scoped>
</style>
