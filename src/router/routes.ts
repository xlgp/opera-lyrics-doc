const containerComponent = import('../layouts/container.vue');

export default [
    { path: '/', name: 'index', redirect: { path: '/黄梅戏/豆角儿香.lrc' } },
    {
        path: '/:path', name: 'lrcpath', component: containerComponent, children: [
            { path: ':name.lrc', name: 'lrc', component: () => import('../views/Lrc.vue') },
        ]
    },
    { path: '/gat', name: "gitee-access-token", component: () => import('../views/giteeAccessToken.vue') }

]