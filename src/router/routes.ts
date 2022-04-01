export default [
    { path: '/', name: 'index', redirect: { path: '/黄梅戏/豆角儿香.lrc' } },
    { path: '/:path/:name', name: 'lrc', component: () => import('../views/Lrc.vue') },
]