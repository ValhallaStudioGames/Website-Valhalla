<script setup>
import PageHeader from '../components/PageHeader.vue'

// What this website actually uses. Add sources for your own images and sounds.
const sources = [
  { name: 'Vue.js', use: 'Framework', href: 'https://vuejs.org' },
  { name: 'Vue Router', use: 'Navigation between pages', href: 'https://router.vuejs.org' },
  { name: 'Vite', use: 'Build-tool', href: 'https://vite.dev' },
  { name: 'Bootstrap', use: 'Grid and utility classes', href: 'https://getbootstrap.com' },
  { name: 'Bootstrap Icons', use: 'Icons', href: 'https://icons.getbootstrap.com' },
  { name: 'Google Fonts', use: 'Rajdhani and Inter', href: 'https://fonts.google.com' },
  { name: 'placehold.co', use: 'Temporary images', href: 'https://placehold.co' },
]
</script>

<template>
  <PageHeader title="Sources" subtitle="Tools and sources behind this website." />
  <div class="container">
    <ul class="source-list">
      <li v-for="s in sources" :key="s.name">
        <a :href="s.href" target="_blank" rel="noopener">{{ s.name }} <i class="bi bi-arrow-up-right"></i></a>
        <span class="muted">{{ s.use }}</span>
      </li>
    </ul>
  </div>
</template>
