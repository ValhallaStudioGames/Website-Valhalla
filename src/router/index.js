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
  // ":id" is a parameter; props: true passes it to the view as a prop.
  { path: '/games/:id', name: 'game', component: GameDetailView, props: true },
  { path: '/news', name: 'news', component: NewsView },
  { path: '/mission', name: 'mission', component: MissionView },
  { path: '/sources', name: 'sources', component: SourcesView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Scroll back to the top after navigating, like on a regular page.
  scrollBehavior: () => ({ top: 0 }),
})

export default router
