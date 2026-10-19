<script setup>
import GameCard from '../components/GameCard.vue'
import { games } from '../data/games.js'
import { socials } from '../data/socials.js'
import logo from '../assets/logo.png'
</script>

<template>
  <section class="hero">
    <div class="container hero__inner">
      <div>
        <span class="eyebrow">Indie game studio</span>
        <h1><span class="grad">Valhalla Games</span></h1>
        <p class="mb-4">Games vol sagen, strijd en avontuur. Ontdek onze titels en word deel van de legende.</p>
        <div class="d-flex flex-wrap gap-3">
          <RouterLink to="/games" class="btn-solid">Bekijk games <i class="bi bi-arrow-right"></i></RouterLink>
          <RouterLink to="/mission" class="btn-line">Our Mission</RouterLink>
        </div>
      </div>
      <img :src="logo" alt="Valhalla Games logo" class="hero__logo">
    </div>
  </section>

  <section class="section">
    <div class="container">
      <span class="eyebrow">What we do</span>
      <p class="statement">
        Valhalla Games maakt games waar <em>energie</em>, <em>strijd</em> en <em>avontuur</em> samenkomen.
      </p>
      <p class="muted mt-4" style="max-width: 40rem">
        Hier komt een korte beschrijving van de studio: wie we zijn en wat voor games we maken.
      </p>
    </div>
  </section>

  <section class="section pt-0">
    <div class="container">
      <div class="section-head">
        <h2>Uitgelicht</h2>
        <RouterLink to="/games" class="link-arrow">Alle games <i class="bi bi-arrow-right"></i></RouterLink>
      </div>
      <div class="row g-3">
        <div v-for="game in games" :key="game.id" class="col-12 col-md-4">
          <GameCard :game="game" />
        </div>
      </div>
    </div>
  </section>

  <section class="section pt-0">
    <div class="container">
      <div class="section-head"><h2>Check us out</h2></div>
      <a v-for="s in socials" :key="s.name" :href="s.href" target="_blank" rel="noopener" class="social-link">
        <i class="bi" :class="s.icon"></i>
        <span>{{ s.name }}</span>
        <i class="bi bi-arrow-up-right arrow"></i>
      </a>
    </div>
  </section>
</template>
