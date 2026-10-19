<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
// When you import an image, Vite returns its final URL (also after the build).
import logo from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/games', label: 'Games' },
  { to: '/news', label: 'News' },
  { to: '/mission', label: 'Our Mission' },
]

// A single piece of state decides whether the mobile menu is open.
const open = ref(false)
const route = useRoute()

// "Games" must stay active on /games/valman too. Home ('/') is an exception,
// otherwise it would be active on every page.
const isCurrent = (to) => (to === '/' ? route.path === '/' : route.path.startsWith(to))

// Close the menu automatically after navigating.
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
