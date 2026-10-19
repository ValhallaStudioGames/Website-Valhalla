<script setup>
import { ref, computed } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { games } from '../data/games.js'

// computed = automatically recalculated when `games` changes.
const sortedGames = computed(() => {
  // TODO(human): return a sorted copy of games here.
  return games
})

// What the visitor types; v-model keeps this in sync with the input field.
const query = ref('')

// Searches (case-insensitive) the title and description of the sorted list.
const filteredGames = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return sortedGames.value
  return sortedGames.value.filter(
    (g) => g.title.toLowerCase().includes(q) || g.description.toLowerCase().includes(q),
  )
})
</script>

<template>
  <PageHeader title="Games" subtitle="All our games at a glance." />
  <div class="container">
    <div class="search">
      <i class="bi bi-search"></i>
      <input v-model="query" type="search" placeholder="Search for a game..." aria-label="Search for a game"
        autocomplete="off">
      <button v-if="query" type="button" class="search__clear" aria-label="Clear search" @click="query = ''">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>
    <p class="muted small mb-0">
      {{ filteredGames.length }} of {{ games.length }} {{ games.length === 1 ? 'game' : 'games' }}
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

    <!-- No results -->
    <div v-if="!filteredGames.length" class="empty">
      <h2>No games found</h2>
      <p class="muted">Nothing found for "{{ query }}".</p>
      <button type="button" class="btn-line" @click="query = ''">Clear search</button>
    </div>
  </div>
</template>
