<script setup>
import {computed} from "vue";

const props=defineProps({
    texto: {
        type: String,
        required: true
    },
    short:{
        type: Boolean,
    }
})
const textoShow=computed(()=>{
    if(props.short){
        return props.texto.substring(0,1).toUpperCase()
    }else{
        return props.texto
    }
})
</script>
<template>
  {{textoShow}}
</template>
<style scoped>
</style>
