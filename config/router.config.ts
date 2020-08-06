export default [
    {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
            {
                name: 'login',
                path: '/user/login',
                component: './public/user/login',
            },
        ],
    },
    {
        path: '/',
        component: '../layouts/SecurityLayout',
        name: 'factory',
        authority: ['FACTORY'],
        Routes: ['src/pages/Authorized'],

        routes: [
            {
                path: '/',
                component: '../layouts/BasicLayout',
                // authority: ['admin', 'user'],
                routes: [
                    {path: '/',redirect: '/monitor/homePage',},
                    {
                        path: '/monitor',
                        name: 'monitor',
                        icon: 'dashboard',
                        routes: [
                            {
                                path: '/monitor/homePage',
                                name: 'homepage',
                                component: './monitor/homePage',
                            }
                        ]
                    },
                    {
                        path: '/analysis',
                        name: 'analysis',
                        icon: 'ordered-list',
                        routes: [
                            {
                                path: '/analysis/yield',
                                name: 'yield',
                            },
                            {
                                path: '/analysis/device',
                                name: 'device',
                            },
                            {
                                path: '/analysis/order',
                                name: 'order',
                            },
                        ] 
                    },
                    {
                        path: '/product',
                        name: 'product',
                        icon: 'gold',
                        routes: [
                            {
                                path: '/product/product-list',
                                name: 'product-list',

                            },
                            {
                                path: '/product/design-list',
                                name: 'design-list',
                            },
                        ]
                    },
                    {
                        path: '/order',
                        name: 'order',
                        icon: 'file-text',
                        routes: [
                            {
                                path: '/order/order-list',
                                name: 'order-list',

                            },
                            {
                                path: '/order/add-batch',
                                name: 'add-batch',
                            },
                        ]
                    },
                    {
                        path: '/plan',
                        name: 'plan',
                        icon: 'ordered-list',
                        routes: [
                            {
                                path: '/plan/plan-list',
                                name: 'plan-list',

                            },
                            {
                                path: '/plan/work-list',
                                name: 'work-list',
                            },
                        ]
                    },
                    {
                        path: '/machine',
                        name: 'machine',
                        icon: 'tool',
                        routes: [
                            {
                                path: '/machine/machine-list',
                                name: 'machine-list',

                            },
                            {
                                path: '/machine/workshop-list',
                                name: 'workshop-list',
                            },
                        ]
                    },

                    {
                        path: '/wage',
                        name: 'wage',
                        icon: 'ordered-list',
                        routes: [
                            {
                                path: '/wage/wage-list',
                                name: 'wage-list',

                            },
                        ]
                    },
                    {
                        path: '/system',
                        name: 'system',
                        icon: 'setting',
                        
                    },
                    {
                        component: './404',
                    },
                ],
            },
            {
                component: './404',
            },
        ],
    },
    {
        component: './404',
    },
]