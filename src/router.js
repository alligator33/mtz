import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/trade-for-me",
            name: "trade",
            meta: {
                title: 'Trade for Me',
                description: `
        Trade for me service means, professionals assist you in making<br
          class="lg:hidden"
        />
        profitable trades.
     `,
                image: 'brain.svg',

            },
            component: () =>
                import("./views/TradeForMe.vue"),
        },
        {
            path: "/about",
            name: "about",
            meta: {
                title: 'About Us',
                description: `
     Market Trade Zone gives you access to Premium Trading tools and assistance from experienced traders.
        `,
                image: 'globe.svg',
            },
            component: () =>
                import("./views/About.vue"),
        },
        {
            path: "/contact",
            name: "contact",
            meta: {
                title: "Contact Us",
                description: `We are here to help you answer any questions you might have`,
                image: 'contact.svg'
            },

            component: () =>
                import("./views/Contact.vue"),
        },
        {
            path: "/nft",
            name: "nftPage",
            meta: {
                title: 'NFT Trading',
                description: `
        Be a part of Savvy collectors, Buy trending high-valued NFTs in groups and earn when your art resales. Minimum 150% ROI as a share-owner.
        `,
                image: 'frame.svg',

            },

            component: () =>
                import("./views/NftPage.vue"),
        },
        {
            path: "/arbitrage",
            name: "arbitrage",
            meta: {
                title: 'Arbitrage Trading',
                description: `
        Arbitrage is simply buying an asset cheaper in broker A and selling it higher in broker. This is a risk-free way to make money. 





        `,
                image: 'graph.svg',

            },

            component: () =>
                import("./views/Arbitrage.vue"),
        },
        {
            path: "/login",
            name: "login",

            component: () =>
                import("./views/Login.vue"),
        },

        {
            path: "/traders",
            name: "traders",
            meta: {
                title: 'Choose a Trader',
                description: 'Select a trader that is best for you.',
                image: '/img/banner/traders.jpg',

            },

            component: () =>
                import(/* webpackChunkName: "trader" */ "./views/Traders.vue"),
        },
        {
            path: "/mtz-5.0",
            name: "mtzBot",
            meta: {
                title: 'Market Trade Zone Software',
                description: `
        <p class="pt-2">
        <i class="far fa-dot-circle has-text-primary is-size-6 mr-2"></i>Trade
        with high accuracy signals
      </p>
      <p class="py-4 ">
        <i class="far fa-dot-circle has-text-primary is-size-6 mr-2"></i
        >Facilitate Withdrawals via BTC and ETH
      </p>
        `,
                image: 'install.svg',

            },

            component: () =>
                import(/* webpackChunkName: "trader" */ "./views/Nbot.vue"),
        },
        {
            path: "/profile/:id",
            name: "profile",
            meta: {
                title: 'Title ---',
                description: 'Description ---',
                image: 'Image ---',

            },

            component: () =>
                import(/* webpackChunkName: "trader" */ "./views/Profile.vue"),
        },

        {
            path: "/form",
            name: "form",

            component: () =>
                import(/* webpackChunkName: "about" */ "./views/Form.vue"),
        },
        {
            path: "/xxx",
            name: "admin",
            component: () =>
                import(/* webpackChunkName: "admin" */ "./views/admin/Admin.vue"),
            children: [
                {
                    path: "/all-traders",
                    name: "allTraders",
                    component: () =>
                        import(
                            /* webpackChunkName: "admin" */ "./views/admin/AllTraders.vue"
                            ),
                },
                {
                    path: "/add-traders",
                    name: "addTrader",
                    component: () =>
                        import(
                            /* webpackChunkName: "admin" */ "./views/admin/AddTraders.vue"
                            ),
                },
                {
                    path: "/comments/:id",
                    name: "comments",
                    component: () =>
                        import(
                            /* webpackChunkName: "admin" */ "./views/admin/comments.vue"
                            ),
                },
                {
                    path: "/users/:id",
                    name: "users",
                    component: () =>
                        import(
                            /* webpackChunkName: "admin" */ "./views/admin/AdminUsers.vue"
                            ),
                },
                {
                    path: "/viewTrader/:id",
                    name: "viewTrader",
                    component: () =>
                        import( "./views/admin/viewTrader"),
                },
                {
                    path: "/edit-trader/:id",
                    name: "editTrader",
                    component: () =>
                        import(
                            "./views/admin/UpdateTraders.vue"
                            ),
                },
            ],
        },
        {
            path: "/*",
            name: "404",
            component: () => import(/* webpackChunkName: "404" */ "./views/404.vue"),
        },
    ],
});
