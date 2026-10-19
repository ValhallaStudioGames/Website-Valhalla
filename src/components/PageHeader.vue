<script setup>
// Props: de ouder (de view) geeft titel en ondertitel door.
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
