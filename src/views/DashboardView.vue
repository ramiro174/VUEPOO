<template>
    <v-app id="inspire">
        <v-navigation-drawer :rail="drawer">
            <template class="d-flex ">
                <v-sheet class="pa-2 w-100  d-flex flex-column align-center" color="grey-lighten-4">
                    <v-avatar :size="drawer?32:64" class="mb-4" color="grey-darken-1" image="/img/avatar.png">
                    </v-avatar>
                    <div><short-text :texto="UsuarioStore.usuario.usuario.correo" :short="drawer"></short-text></div>
                    <div>Autor</div>
                </v-sheet>
            </template>
            <v-divider></v-divider>
            <v-list>
                <template v-for="opcion in Menu">
                    <v-list-item v-if="opcion.hasOwnProperty('url')" :key="opcion.texto" link>
                        <router-link :to="opcion.url">
                            <v-list-item-title>
                                <v-icon :icon="opcion.icon"/>
                                {{ opcion.texto }}
                            </v-list-item-title>
                        </router-link>
                    </v-list-item>
                    <v-list-group v-else value="Admin">
                        <template v-slot:activator="{ props }">
                            <v-list-item  v-bind="props">
                                <v-icon :icon="opcion.icon"/>
                                {{ opcion.texto }}
                            </v-list-item>
                        </template>
                        <router-link v-for="op in opcion.childs" :to="op.url">
                            <v-list-item>
                                <v-icon :icon="op.icon"/>
                                {{ op.texto }}
                            </v-list-item>
                        </router-link>
                    </v-list-group>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Mi app</v-toolbar-title>
            <template v-slot:append>

                <v-menu transition="slide-y-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn icon="mdi-dots-vertical"  v-bind="props"></v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="(item, i) in items" :key="i">
                            <v-list-item-title @click="cerrarSession">{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

            </template>
        </v-app-bar>
        <v-main>

                <router-view/>


        </v-main>
    </v-app>
</template>
<script setup>
import {RouterLink} from "vue-router";
import router from "@/router";
import {ref} from 'vue';
import {useUsuarioStore} from "@/store/UsuarioStore";
import ShortText from "@/components/ShortText.vue";
const UsuarioStore = useUsuarioStore();


const Menu = [
    {url: {name: "inicio"}, texto: "inicio", icon: "mdi-account-check"},
    {url: {name: "pokemon"}, texto: "pokemon", icon: "mdi-account-check"},

    {
        texto: "Usuario", icon: "mdi-account-check",
        childs: [
            {url: {name: "usuario"}, texto: "crear", icon: "mdi-access-point"},
            {url: {name: "mostrarusuarios"}, texto: "mostrar", icon: "mdi-access-point"},

        ],

    },

]
const items = [
    { title: 'Cerrar Sesion' },

]
const drawer = ref(null)
const cerrarSession = () => {
    UsuarioStore.closeSession();
    router.push({name: "login"});
}
</script>
<style scoped>
.centrado {
    display: flex;
    justify-content: center;

}
</style>
