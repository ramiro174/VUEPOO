export let requerido = (v) => {
    return !!v || 'Este campo es requerido'
}
export let minimo = (v,m) => {
    return v.length >= m || `Este campo debe tener al menos ${m} caracteres`
}
export let maximo = (v,m) => {
    return v.length <= m || `Este campo debe tener menos de ${m} caracteres`
}
export let email = (v) => {
    return /.+@.+/.test(v) || 'El correo debe ser válido'
}
export let edad = (v) => {
    return v >= 18 || 'Debe ser mayor de edad'
}
export let telefono = (v) => {
    return v.length >= 10 || 'El teléfono debe tener al menos 10 caracteres'
}
export let url = (v) => {
    return /(http|https):\/\/.+/.test(v) || 'La URL debe ser válida'
}
export let fecha = (v) => {
    return /.+/.test(v) || 'La fecha debe ser válida'
}
export let numero = (v) => {
    return !isNaN(v) || 'Debe ser un número'
}
