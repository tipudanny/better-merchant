import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '',
        component: function () {
            return import('../views/layout/Layout')
        },
        children: [
            {
                path: '',
                name: 'Home',
                component: function () {
                    return import(/* webpackChunkName: "Home" */ '../views/Home')
                }
            },
            {
                path: '/accept-payments',
                name: 'AcceptPayments',
                component: function () {
                    return import(/* webpackChunkName: "accept-payments" */ '../views/AcceptPayments')
                }
            },
            {
                path: '/accept-payments/credit-debit-cards',
                name: 'CreditDebitCards',
                component: function () {
                    return import(/* webpackChunkName: "credit-debit-cards" */ '../views/CreditDebitCards')
                }
            },
            {
                path: '/accept-payments/online',
                name: 'Online',
                component: function () {
                    return import(/* webpackChunkName: "online" */ '../views/Online')
                }
            },
            {
                path: '/accept-payments/mobile',
                name: 'Mobile',
                component: function () {
                    return import(/* webpackChunkName: "Mobile" */ '../views/Mobile')
                }
            },
            {
                path: '/accept-payments/retail',
                name: 'Retail',
                component: function () {
                    return import(/* webpackChunkName: "retail" */ '../views/Retail')
                }
            },
            {
                path: '/accept-payments/moto',
                name: 'Moto',
                component: function () {
                    return import(/* webpackChunkName: "moto" */ '../views/Moto')
                }
            },
            {
                path: '/accept-payments/ach',
                name: 'Ach',
                component: function () {
                    return import(/* webpackChunkName: "ach" */ '../views/Ach')
                }
            },
            {
                path: '/accept-payments/echeck',
                name: 'Echeck',
                component: function () {
                    return import(/* webpackChunkName: "echeck" */ '../views/Echeck')
                }
            },
            {
                path: '/accept-payments/cryptocurrency',
                name: 'Cryptocurrency',
                component: function () {
                    return import(/* webpackChunkName: "cryptocurrency" */ '../views/Cryptocurrency')
                }
            },
            {
                path: '/merchant-services',
                name: 'MerchantServices',
                component: function () {
                    return import(/* webpackChunkName: "merchant-services" */ '../views/MerchantServices')
                }
            },
            {
                path: '/about',
                name: 'About',
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../views/About')
                }
            },
            {
                path: '/contact',
                name: 'Contact',
                component: function () {
                    return import(/* webpackChunkName: "contact" */ '../views/Contact')
                }
            },
            {
                path: '/privacy',
                name: 'Privacy',
                component: function () {
                    return import(/* webpackChunkName: "privacy" */ '../views/Privacy')
                }
            },
            {
                path: '/terms',
                name: 'Terms',
                component: function () {
                    return import(/* webpackChunkName: "terms" */ '../views/Terms')
                }
            },
        ],
    },
    // Not Found Page
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/PageNotFound')
        }
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    scrollBehavior (to, from, savedPosition) {
        return { left: 0, top: 0 }
    },
    routes
})

export default router
