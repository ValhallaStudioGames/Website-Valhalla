<script setup>
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <!-- d-flex + min-vh-100: the footer stays at the bottom, even on short pages -->
  <div class="d-flex flex-column min-vh-100">
    <NavBar />
    <main class="flex-grow-1">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>
