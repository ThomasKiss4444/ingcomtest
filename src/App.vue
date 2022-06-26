<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
   <div class="container-md-fluid">
      <header class="d-none d-lg-block"></header>
         <RouterView />
      </div>
      <footer class=""></footer>

</template>

<style>
@import '@/assets/base.css';
</style>
