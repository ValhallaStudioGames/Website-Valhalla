<script setup>
import { computed } from 'vue'
import GameCard from '../components/GameCard.vue'
import { games } from '../data/games.js'
import { socials } from '../data/socials.js'

// Komt uit de URL (/games/:id) dankzij `props: true` in de router.
const props = defineProps({
  id: { type: String, required: true },
})

// find() geeft undefined terug als de id niet bestaat.
const game = computed(() => games.find((g) => g.id === props.id))
const otherGames = computed(() => games.filter((g) => g.id !== props.id))
const github = socials.find((s) => s.name === 'GitHub')
</script>

<template>
  <div v-if="game">
    <section class="page-header">
      <div class="container">
        <RouterLink to="/games" class="link-arrow mb-4"><i class="bi bi-arrow-left"></i> Alle games</RouterLink>
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
                <dd class="muted">Nog in te vullen</dd>
              </div>
              <div>
                <dt>Release</dt>
                <dd class="muted">Nog in te vullen</dd>
              </div>
            </dl>
            <a :href="github.href" target="_blank" rel="noopener" class="btn-solid mt-3">
              <i class="bi bi-github"></i> Bekijk op GitHub
            </a>
          </div>
        </div>

        <div class="mt-5" style="max-width: 44rem">
          <h2 class="detail-heading">Over deze game</h2>
          <p class="muted">Hier komt een uitgebreide beschrijving van {{ game.title }}: het verhaal, de besturing en wat de speler kan verwachten.</p>
        </div>
      </div>
    </section>

    <section class="section pt-0">
      <div class="container">
        <div class="section-head"><h2>Meer games</h2></div>
        <div class="row g-3">
          <div v-for="g in otherGames" :key="g.id" class="col-12 col-md-6">
            <GameCard :game="g" />
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Onbekende id in de URL -->
  <section v-else class="page-header">
    <div class="container">
      <span class="eyebrow">404</span>
      <h1>Game niet gevonden</h1>
      <p class="mb-4">Deze game bestaat niet (meer).</p>
      <RouterLink to="/games" class="btn-solid">Naar alle games <i class="bi bi-arrow-right"></i></RouterLink>
    </div>
  </section>
</template>
