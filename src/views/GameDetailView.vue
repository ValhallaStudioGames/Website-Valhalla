<script setup>
import { computed } from 'vue'
import GameCard from '../components/GameCard.vue'
import { games } from '../data/games.js'
import { socials } from '../data/socials.js'

// Comes from the URL (/games/:id) thanks to `props: true` in the router.
const props = defineProps({
  id: { type: String, required: true },
})

// find() returns undefined if the id doesn't exist.
const game = computed(() => games.find((g) => g.id === props.id))
const otherGames = computed(() => games.filter((g) => g.id !== props.id))
const github = socials.find((s) => s.name === 'GitHub')
</script>

<template>
  <div v-if="game">
    <section class="page-header">
      <div class="container">
        <RouterLink to="/games" class="link-arrow mb-4"><i class="bi bi-arrow-left"></i> All games</RouterLink>
        <span class="eyebrow">Game overview</span>
        <h1>{{ game.title }}</h1>
        <p>{{ game.description }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-8">
            <img :src="game.image" :alt="`${game.title} preview`" class="detail-image">
          </div>
          <div class="col-lg-4">
            <h2 class="detail-heading">Info</h2>
            <dl class="info-list">
              <div>
                <dt>Developer</dt>
                <dd>Valhalla Games</dd>
              </div>
              <div>
                <dt>Platform</dt>
                <dd class="muted">To be filled in</dd>
              </div>
              <div>
                <dt>Release</dt>
                <dd class="muted">To be filled in</dd>
              </div>
            </dl>
            <a :href="github.href" target="_blank" rel="noopener" class="btn-solid mt-3">
              <i class="bi bi-github"></i> View on GitHub
            </a>
          </div>
        </div>

        <div class="mt-5" style="max-width: 44rem">
          <h2 class="detail-heading">About this game</h2>
          <p class="muted">A detailed description of {{ game.title }} will go here: the story, the controls and what the player can expect.</p>
        </div>
      </div>
    </section>

    <section class="section pt-0">
      <div class="container">
        <div class="section-head"><h2>More games</h2></div>
        <div class="row g-3">
          <div v-for="g in otherGames" :key="g.id" class="col-12 col-md-6">
            <GameCard :game="g" />
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Unknown id in the URL -->
  <section v-else class="page-header">
    <div class="container">
      <span class="eyebrow">404</span>
      <h1>Game not found</h1>
      <p class="mb-4">This game doesn't exist (anymore).</p>
      <RouterLink to="/games" class="btn-solid">Go to all games<i class="bi bi-arrow-right"></i></RouterLink>
    </div>
  </section>
</template>
