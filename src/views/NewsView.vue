<script setup>
import PageHeader from '../components/PageHeader.vue'

// Placeholder posts: replace with real news. Newest first.
const posts = [
  { id: 1, date: '2026-10-01', title: 'New website is live', excerpt: 'Our website has been revamped and now runs on Vue.' },
  { id: 2, date: '2026-09-12', title: 'Midgard Siege announced', excerpt: 'Our new strategy game is coming. More details soon.' },
  { id: 3, date: '2026-08-20', title: 'Update for Rune Runner', excerpt: 'New levels and improvements to the controls.' },
]

// Intl.DateTimeFormat turns '2026-10-01' into '1 October 2026'.
const dateFmt = new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' })
</script>

<template>
  <PageHeader title="News" subtitle="The latest news from Valhalla." />
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
