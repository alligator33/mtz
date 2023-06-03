<template>
    <div class="bg-white">
        <template>
            <div class="container">
                <div v-scrollanimation class="grid grid-cols-2 justify-content-center items-center">
                    <div class="column">
                        <div class="has-text-justified">
                            <div>
                                <p>MTZ - Launched in 2016, and since then this has been a life-changing figure for
                                    hundreds of thousands of personal Traders, companies & business firms.</p>
                                <br/>
                                <h1 class="is-size-5 has-text-left">
                                    About
                                </h1>
                                <p>
                                    We are interested in seeing all levels and types of traders grow, with our expertise
                                    and premium trading tools, you can achieve your trading goals seamlessly at MTZ.

                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <img class="w-75" src="/img/jumbo/globe.svg"/>
                    </div>
                </div>
            </div>
        </template>
        <!--      Brief history-->

        <!--        <section class="section" v-scrollanimation id="profit">
                    <div>
                        <div class="container">
                            <div v-for="profit in profits" :key="profit.id" class="columns py-4">
                                <div class="column is-4">
                                    <article class="media mx-5">
                                        <figure class="media-left align-content-center">
                                            <p class="image is-64x64">
                                                <img class="icon" :src="profit.image"/>
                                            </p>
                                        </figure>
                                        <div class="media-content">
                                            <div class="content">
                                                <h1 class="is-size-4 my-3 has-text-weight-bold">
                                                    {{ profit.title }}
                                                </h1>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div class="column px-5">
                                    <p v-html="profit.text" class="has-text-justified"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>-->

        <AwardSection v-scrollanimation/>

        <PortfolioArea v-scrollanimation/>
        <FaqComponent v-scrollanimation/>
    </div>
</template>

<script>
import PortfolioArea from "../components/home/PortfolioArea";
import AwardSection from "../components/AwardSection";
import FaqComponent from "../components/faq/FaqComponent.vue";
import data from "../db/about_data";
import {mapState} from "vuex";

export default {
    components: {
        PortfolioArea,
        AwardSection,
        FaqComponent,
    },
    data() {
        return {
            historys: data.history,
            profits: data.profit,
        };
    },

    computed: {
        ...mapState(["config"]),
    },
};
</script>

<style scoped>
.icon {
    height: 60px;
    width: 60px;
}

.vl {
    border-left: 3px solid #7e22ce;
    height: 100px;
}

.is-horizontal-center {
    justify-content: center;
}

.before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2s ease-out;
}

.enter {
    opacity: 1;
    transform: translateY(0px);
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    #jumbo {
        height: 50vh; /* You must set a specified height */
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    #jumbo {
        height: 55vh; /* You must set a specified height */
    }
}
</style>
