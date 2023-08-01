<script setup>
import {ref} from 'vue'
import {VDataTable} from 'vuetify/labs/VDataTable'
import fetchI from "@/request/api";
import Loading from "@/components/Loading.vue";

const selected = ref([])
const overlay = ref(false)
const headers = [
    {title: 'id', key: 'id',},
    {title: 'nombre', key: 'nombre'},
    {title: 'user', key: 'user'},
    {title: 'correo', key: 'correo'}
]
const usuarios =ref([]);

function  cargarUsuarios(){
    overlay.value=true
    fetchI('http://web.local/usuario/listar').then(response => response.json())
        .then(data => {
            usuarios.value = data.data
            overlay.value=false
        });
}

cargarUsuarios();
</script>
<template>
    <v-container class="pa-lg-7">
        <h1 @click="cargarUsuarios">Mostrar Usuarios</h1>
        <v-row>
            <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="usuarios"
                    class="elevation-1"
                    item-value="id"
                    return-object
                    show-select
            ></v-data-table>
        </v-row>
    </v-container>
    <Loading :mostrar="overlay"></Loading>
  {{ selected }}
</template>
<style scoped>
</style>
