<template>
    <div id="app ">
        <Navigation v-if="hideMenuFooter"/>

        <!-- <NavBar class="" v-if="hideMenuFooter" /> -->

        <div class="bg-white">
            <PageJumbotron v-if="hideMenuJumbo"/>
        </div>

        <router-view/>
        <FooterArea v-if="hideMenuFooter"/>
    </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap");

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>

<script>
import Navigation from "./components/commons/Navigation.vue";
import PageJumbotron from "./layouts/PageJumbotron.vue";

export default {
    data() {
        return {
            site: {
                title: "Market Trade Zone",
            },

        };
    },
    computed: {
        hideMenuFooter() {
            const pages = [
                "admin",
                "viewTrader",
                "allTraders",
                "addTrader",
                "comments",
                "editTrader",
                "users",
            ];
            return !pages.includes(this.$route.name);
        },
        hideMenuJumbo() {
            const pages = [
                "contact",
                "about",
                "404"
            ];
            return !pages.includes(this.$route.name);
        },
    },
    components: {PageJumbotron, Navigation},
};
</script>
