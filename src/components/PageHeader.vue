<script setup>
// Props: the parent (the view) passes down the title and subtitle.
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <section class="page-header">
    <div class="container">
      <span class="eyebrow">Valhalla Games</span>
      <h1>{{ title }}</h1>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>
