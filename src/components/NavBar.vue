<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
// Vite geeft bij een import van een afbeelding de uiteindelijke URL terug (ook na de build).
import logo from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/games', label: 'Games' },
  { to: '/news', label: 'News' },
  { to: '/mission', label: 'Our Mission' },
]

// Eén stukje state bepaalt of het mobiele menu open is.
const open = ref(false)
const route = useRoute()

// "Games" moet ook actief blijven op /games/valman. Home ('/') is een uitzondering,
// anders zou die bij elke pagina actief zijn.
const isCurrent = (to) => (to === '/' ? route.path === '/' : route.path.startsWith(to))

// Sluit het menu automatisch na het navigeren.
watch(() => route.path, () => { open.value = false })
</script>

<template>
  <header class="site-nav">
    <div class="container site-nav__inner">
      <RouterLink class="brand" to="/">
        <img :src="logo" alt="" width="40" height="40">
        <span class="grad">Valhalla Games</span>
      </RouterLink>

      <button class="nav-toggle" type="button" :aria-expanded="open" aria-label="Menu" @click="open = !open">
        <i class="bi" :class="open ? 'bi-x-lg' : 'bi-list'"></i>
      </button>

      <nav class="site-nav__links" :class="{ open }">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" :class="{ current: isCurrent(link.to) }">{{ link.label }}</RouterLink>
      </nav>
    </div>
  </header>
</template>
