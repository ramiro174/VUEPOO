<script setup>
import {useUsuarioStore} from '@/store/UsuarioStore'
import Loading from "@/components/Loading.vue";

const UsuarioStore = useUsuarioStore()

import {ref} from 'vue'
import Dialog from "@/components/Dialog.vue";

let overlay=ref(false)
let usuario = ref({
    nombre: '',
    edad: '',
    apellido: '',
    correo: '',
    contrasena: '',

})
function saveUser() {

    overlay.value=true
   fetch('http://web.local/usuario/registro', {
        method: 'POST',
        body: JSON.stringify(usuario.value),

    }).then(response => response.json())
        .then(data => {
            overlay.value=false
            console.log(data)
        });
}

</script>
<template>
    <Loading :mostrar="overlay"></Loading>
    <Dialog></Dialog>
    <v-row>
        <v-col cols="12" md="12">
            <v-card>
                <v-card-title  class="pa-5 text-black  bg-light-green-lighten-2">
                    Registro utilizando el usuario:{{ UsuarioStore.usuario.email }}
                </v-card-title>
                <v-card-text class="pa-5">
                    <!--      <marcador></marcador>-->
                    <v-form @submit.prevent>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-text-field v-model="usuario.nombre"
                                              label="Nombre"
                                              variant="underlined"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field v-model="usuario.apellido"
                                              label="Apellido"
                                              variant="underlined"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field v-model="usuario.edad" label="Edad"
                                              type="number"
                                              variant="underlined"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="4">
                                <v-text-field v-model="usuario.correo"
                                              label="Correo"
                                              variant="underlined"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field v-model="usuario.user" label="Usuario"
                                              type="text"
                                              variant="underlined"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="4">
                                <v-text-field v-model="usuario.contrasena" label="Contraseña"
                                              type="password"
                                              variant="underlined"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                    </v-form>
                </v-card-text>
                <v-card-actions class="bg-blue-grey-lighten-5 d-flex justify-end">
                    <v-btn   @click="saveUser"  class="mt-2 bg-success" prepend-icon="" type="button">Submit</v-btn>
                </v-card-actions>
                                <pre>{{usuario}}</pre>
            </v-card>
        </v-col>
    </v-row>
</template>
<style scoped>
</style>
