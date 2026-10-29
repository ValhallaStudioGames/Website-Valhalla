<script setup>
import PageHeader from '../components/PageHeader.vue'

// Placeholder principles: replace with the studio's real mission.
const principles = [
  { title: 'Passion', text: 'Every game starts with an idea we truly believe in.' },
  { title: 'Teamwork', text: 'A strong team builds stronger worlds.' },
  { title: 'Quality', text: 'We polish until every detail is right.' },
]
</script>

<template>
  <PageHeader title="Our Mission" subtitle="What Valhalla Games stands for." />

  <section class="section">
    <div class="container">
      <p class="statement">
        Our mission is to create <em>polished</em>, fully <em>open-source</em> games that inspire the next generation of game developers to explore, tinker, and build.
      </p>
      <p class="muted mt-4" style="max-width: 40rem">
        Fill in the real mission text here.
      </p>
    </div>
  </section>

  <section class="section pt-0">
    <div class="container">
      <div class="section-head"><h2>What we stand for</h2></div>
      <div class="row g-4">
        <div v-for="(p, i) in principles" :key="p.title" class="col-md-4">
          <div class="num-col">
            <span class="idx">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3>{{ p.title }}</h3>
            <p>{{ p.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
