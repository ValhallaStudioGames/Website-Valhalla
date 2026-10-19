<script setup>
import logo from '../assets/logo.png'
import { socials } from '../data/socials.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row gy-4 align-items-start">
        <div class="col-md-5">
          <img :src="logo" alt="Valhalla Games logo" width="72" height="72" class="mb-3">
          <p class="muted mb-0">Valhalla Games, een indie game studio.</p>
        </div>
        <div class="col-6 col-md-3 offset-md-1">
          <h4>Pagina's</h4>
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/games">Games</RouterLink></li>
            <li><RouterLink to="/news">News</RouterLink></li>
            <li><RouterLink to="/mission">Our Mission</RouterLink></li>
            <li><RouterLink to="/sources">Sources</RouterLink></li>
          </ul>
        </div>
        <div class="col-6 col-md-3">
          <h4>Check us out</h4>
          <ul>
            <li v-for="s in socials" :key="s.name">
              <a :href="s.href" target="_blank" rel="noopener">{{ s.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <p class="muted small mt-5 mb-0">&copy; Valhalla Games 2020&ndash;{{ year }}</p>
    </div>
  </footer>
</template>
