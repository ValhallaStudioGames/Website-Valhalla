<script setup>
defineProps({
  game: { type: Object, required: true },
})
</script>

<template>
  <!-- Poster style: the text overlays the image instead of sitting in a card below it -->
  <RouterLink :to="`/games/${game.id}`" class="poster">
    <img :src="game.image" :alt="`${game.title} preview`" loading="lazy">
    <div class="poster__body">
      <h3>{{ game.title }}</h3>
      <p>{{ game.description }}</p>
      <span class="poster__cta">View game<i class="bi bi-arrow-right"></i></span>
    </div>
  </RouterLink>
</template>
