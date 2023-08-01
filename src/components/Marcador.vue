<script setup>
import {useCounterStores } from '@/store/CounterStore'
  const store = useCounterStores();
</script>
<template>
<h1>{{store.count}}</h1>
</template>
<style scoped>
</style>
