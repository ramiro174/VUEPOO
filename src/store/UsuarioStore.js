import {defineStore} from "pinia";
import {ref} from "vue";

export const useUsuarioStore = defineStore('UsuarioStore', () => {
    const usuario = ref({usuario: {correo: null}, _token: null});

    function closeSession() {
        window.localStorage.clear();
        usuario.value = {usuario: {correo: null}, _token: null}
    }

    function setUser(user) {
        window.localStorage.clear();
        let u = {...usuario.value, ...user}
        usuario.value = u;
    }

    return {usuario, closeSession, setUser}
}, {persist: true})
