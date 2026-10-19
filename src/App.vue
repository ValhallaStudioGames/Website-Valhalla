<script setup>
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <!-- d-flex + min-vh-100: de footer blijft onderaan, ook op korte pagina's -->
  <div class="d-flex flex-column min-vh-100">
    <NavBar />
    <main class="flex-grow-1">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
