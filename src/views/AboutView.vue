<script setup>
import { useRoute } from 'vue-router'
import {onMounted} from "vue";

const route = useRoute()
let numero =0;
onMounted(() => {
    numero= route.params.id
})

</script>
<template>
  <div class="about">
    <h1>This is an about option</h1>
       <h6  v-for="i in route.params.id">i</h6>
  </div>
</template>



