<script setup>
import PageHeader from '../components/PageHeader.vue'

// Placeholder-berichten: vervang door echt nieuws. Nieuwste bovenaan.
const posts = [
  { id: 1, date: '2026-10-01', title: 'Nieuwe website live', excerpt: 'Onze website is vernieuwd en draait nu op Vue.' },
  { id: 2, date: '2026-09-12', title: 'Midgard Siege aangekondigd', excerpt: 'Onze nieuwe strategiegame komt eraan. Meer details volgen snel.' },
  { id: 3, date: '2026-08-20', title: 'Update voor Rune Runner', excerpt: 'Nieuwe levels en verbeteringen aan de besturing.' },
]

// Intl.DateTimeFormat zet '2026-10-01' om naar '1 oktober 2026'.
const dateFmt = new Intl.DateTimeFormat('nl-BE', { dateStyle: 'long' })
</script>

<template>
  <PageHeader title="News" subtitle="Het laatste nieuws uit Valhalla." />
  <div class="container">
    <article v-for="post in posts" :key="post.id" class="news-row">
      <time :datetime="post.date">{{ dateFmt.format(new Date(post.date)) }}</time>
      <div>
        <h2>{{ post.title }}</h2>
        <p class="muted mb-0">{{ post.excerpt }}</p>
      </div>
    </article>
  </div>
</template>
