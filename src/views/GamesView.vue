<script setup>
import { ref, computed } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { games } from '../data/games.js'

// computed = wordt automatisch opnieuw berekend als `games` verandert.
const sortedGames = computed(() => {
  // TODO(human): geef hier een gesorteerde kopie van games terug.
  return games
})

// Wat de bezoeker typt; v-model houdt dit in sync met het invoerveld.
const query = ref('')

// Zoekt (hoofdletterongevoelig) in titel en omschrijving van de gesorteerde lijst.
const filteredGames = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return sortedGames.value
  return sortedGames.value.filter(
    (g) => g.title.toLowerCase().includes(q) || g.description.toLowerCase().includes(q),
  )
})
</script>

<template>
  <PageHeader title="Games" subtitle="Al onze games op een rij." />
  <div class="container">
    <div class="search">
      <i class="bi bi-search"></i>
      <input v-model="query" type="search" placeholder="Zoek een game..." aria-label="Zoek een game"
        autocomplete="off">
      <button v-if="query" type="button" class="search__clear" aria-label="Wis zoekopdracht" @click="query = ''">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
    <p class="muted small mb-0">
      {{ filteredGames.length }} van {{ games.length }} {{ games.length === 1 ? 'game' : 'games' }}
    </p>

    <article v-for="(game, i) in filteredGames" :key="game.id" class="game-row" :class="{ flip: i % 2 === 1 }">
      <div class="game-row__img">
        <img :src="game.image" :alt="`${game.title} preview`" loading="lazy">
      </div>
      <div>
        <span class="idx">{{ String(i + 1).padStart(2, '0') }}</span>
        <h2>{{ game.title }}</h2>
        <p class="muted mb-4">{{ game.description }}</p>
        <RouterLink :to="`/games/${game.id}`" class="link-arrow">
          Game overview <i class="bi bi-arrow-right"></i>
        </RouterLink>
      </div>
    </article>

    <!-- Geen resultaten -->
    <div v-if="!filteredGames.length" class="empty">
      <h2>Geen games gevonden</h2>
      <p class="muted">Niets gevonden voor "{{ query }}".</p>
      <button type="button" class="btn-line" @click="query = ''">Wis zoekopdracht</button>
    </div>
  </div>
</template>
