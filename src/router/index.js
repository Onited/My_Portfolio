import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomePage.vue'
import ContactPage from '../views/ContactPage.vue'
import ResumePage from '../views/ResumePage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsPage
  },
  {
    path: '/resume',
    name: 'ResumePage',
    component: ResumePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router
