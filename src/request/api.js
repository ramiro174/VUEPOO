import {useUsuarioStore} from '@/store/UsuarioStore'

function fetchI(url, options = {}) {
    let optiondefault = {
        method: 'POST'
    }
    const usuarioStore = useUsuarioStore();
    const token = usuarioStore.usuario._token;
    if (!token) {
        console.info('doesn´t have token');
    }
    let headers;
    if (token) {
        headers = {
            ...options.headers,
            Authorization: `Bearer ${token}`,
        };
    }


    return fetch(url, {...optiondefault, headers});
}

export default fetchI;

