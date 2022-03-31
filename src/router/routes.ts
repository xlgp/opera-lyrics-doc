export default [
    { path: '/', component: () => import('../views/index.vue') },
    { path: '/:path/:name', name: 'lrc', component: () => import('../views/Lrc.vue') },
]