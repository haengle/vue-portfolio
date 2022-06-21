<script setup>
import vHeader from './components/header.vue'
import thumbnailVue from './components/thumbnail.vue';
import portfolioVue from './components/portfolio.vue';

</script>

<template>
  <vHeader></vHeader>

  <main>
    <router-view/>
  </main>
</template>

<style>
  .portfolio-wrapper {
    @apply m-4;
  }
</style>
