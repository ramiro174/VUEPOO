<script setup>
import {ref} from 'vue'
import router from "@/router";
import {useUsuarioStore} from "@/store/UsuarioStore";
import Loading from "@/components/Loading.vue";
import {requerido, minimo} from "@/validations/validations.js";

let usuarioStore = useUsuarioStore();
let valid = ref(true)
let usuario = ref({
    user: '',
    contrasena: ''
})
let overlay = ref(false)


function login() {
    if (!valid.value) {
        return
    }
    overlay.value = true
    fetch('http://web.local/usuario/auth', {
        method: 'POST',
        body: JSON.stringify(usuario.value),
    }).then(response => response.json())
        .then(data => {
            if (data.status != 200) {
                alert(data.message)
                overlay.value = false
                return
            }
            usuarioStore.setUser(data.data)
            router.push({name: 'dashboard'})
            overlay.value = false

        });
}
</script>
<template>
    <v-app class="bg-light-blue-lighten-5">
        <v-form v-model="valid" @submit.prevent>
            <v-img aspect-ratio="16/9" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
                <v-card class="mx-auto " style="margin-top:250px;width:600px">
                    <v-card-title class="bg-light-blue-lighten-1 text-white">
                        Inicio de Sesión
                    </v-card-title>
                    <v-card-text class="pa-7">
                        <v-row>
                            <v-col cols="12" md="12">
                                <v-text-field v-model="usuario.user"
                                              :rules="[requerido,minimo(usuario.user,5)]"
                                              label="usuario"
                                              variant="underlined"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="12">
                                <v-text-field v-model="usuario.contrasena"
                                              :rules="[requerido,minimo(usuario.contrasena,5)]"
                                              label="Contraseña"
                                              type="password"
                                              variant="underlined"
                                              @keydown.enter="login"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions class="d-flex justify-end">
                        <v-btn color="success" type="submit" @click="login">Ingresar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-img>
        </v-form>
    </v-app>
    <Loading :mostrar="overlay"></Loading>
</template>






