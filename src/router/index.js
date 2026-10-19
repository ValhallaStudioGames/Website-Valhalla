import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GamesView from '../views/GamesView.vue'
import GameDetailView from '../views/GameDetailView.vue'
import NewsView from '../views/NewsView.vue'
import MissionView from '../views/MissionView.vue'
import SourcesView from '../views/SourcesView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/games', name: 'games', component: GamesView },
  // ":id" is een parameter; props: true geeft hem als prop aan de view.
  { path: '/games/:id', name: 'game', component: GameDetailView, props: true },
  { path: '/news', name: 'news', component: NewsView },
  { path: '/mission', name: 'mission', component: MissionView },
  { path: '/sources', name: 'sources', component: SourcesView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Na een navigatie terug naar boven scrollen, zoals bij een gewone pagina.
  scrollBehavior: () => ({ top: 0 }),
})

export default router
