<script setup>
import PageHeader from '../components/PageHeader.vue'

// Wat deze website daadwerkelijk gebruikt. Vul aan met bronnen van je eigen afbeeldingen en geluiden.
const sources = [
  { name: 'Vue.js', use: 'Framework', href: 'https://vuejs.org' },
  { name: 'Vue Router', use: 'Navigatie tussen pagina\'s', href: 'https://router.vuejs.org' },
  { name: 'Vite', use: 'Build-tool', href: 'https://vite.dev' },
  { name: 'Bootstrap', use: 'Grid en hulpklassen', href: 'https://getbootstrap.com' },
  { name: 'Bootstrap Icons', use: 'Iconen', href: 'https://icons.getbootstrap.com' },
  { name: 'Google Fonts', use: 'Rajdhani en Inter', href: 'https://fonts.google.com' },
  { name: 'placehold.co', use: 'Tijdelijke afbeeldingen', href: 'https://placehold.co' },
]
</script>

<template>
  <PageHeader title="Sources" subtitle="Tools en bronnen achter deze website." />
  <div class="container">
    <ul class="source-list">
      <li v-for="s in sources" :key="s.name">
        <a :href="s.href" target="_blank" rel="noopener">{{ s.name }} <i class="bi bi-arrow-up-right"></i></a>
        <span class="muted">{{ s.use }}</span>
      </li>
    </ul>
  </div>
</template>
