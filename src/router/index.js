import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/IndexView.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/file-upload',
    name: 'file-upload',
    component: () => import('../views/FileUploadView.vue'),
  },
  {
    path: '/large-file-upload',
    name: 'large-file-upload',
    component: () => import('../views/LargeFileUploadView.vue'),
  },
  {
    path: '/large-file-download',
    name: 'large-file-download',
    component: () => import('../views/LargeFileDownloadView.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
