<template>
  <div class="app bg-white">



  <JumboSection/>


<template v-if="false" >




  <JumboArea v-scrollanimation />

</template>

    <FeaturesArea v-scrollanimation />

    <!--        reasons-->
    <div v-scrollanimation class="section">
      <div class="container">
        <div class="columns has-background-white pb-5">
          <div class="column has-text-left pb-5">
            <h4 class="is-size-5">SOME REASONS</h4>

            <h1 class="is-size-4 py-4 font-weight-bold">
              Why Choose Market Trade Zone ?
            </h1>
            <p class="py-3">
              Only {{ name }} holds the parent registered regulatory
              certification to offer the Trading  industry.
              <br />We are very interested in seeing all level and types of
              traders grow, with our expert and the many years of experience
              embedded in them we are able assist a minimum of 500 traders each
              month achieve their trading goals, and improve standard of living
              through digital options trading.
            </p>
            <router-link :to="{ name: 'about' }" class="button is-primary"
              >Learn more</router-link
            >
          </div>

          <div class="column">
            <progressBars />
          </div>
        </div>
      </div>
    </div>
    <!--        reasons-->

    <!--portfolio-->
    <PortfolioArea v-scrollanimation />

    <!--        portfolio-->

    <!--          preference-->
    <PricingTableSection />

    <!--          preference-->

    <!--        testimonial-->
    <!-- <TestifyArea v-scrollanimation /> -->
    <TestimonialComponent />
    <!--                testimonial-->
  </div>
</template>

<style scoped>
#preference {
  border-radius: 5%;
}


body {
  font-family: Verdana, sans-serif;
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
</style>

<script>
import { mapState } from "vuex";
import data from "../db/main_data";

import JumboSection from "../components/home/JumboSection.vue";
import FeaturesArea from "../components/home/FeaturesArea.vue";
import JumboArea from "../components/home/JumboArea.vue";
import progressBars from "../components/home/progressBars";
import PortfolioArea from "../components/home/PortfolioArea";
import TestimonialComponent from "../components/home/TestimonialComponent.vue";
import PricingTableSection from "../components/home/PricingTableSection.vue";

export default {
  name: "app",
  components: {
    FeaturesArea,
    progressBars,
    TestimonialComponent,
    JumboArea,
    PortfolioArea,
    PricingTableSection,
    JumboSection
  },
  data() {
    return {
      name: data.global.name,

      features: data.features,
    };
  },

  methods: {
    openTab(evt, tabName) {
      var i, x, tablinks;
      x = document.getElementsByClassName("content-tab");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tab");
      for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
      }
      document.getElementById(tabName).style.display = "block";
      evt.currentTarget.className += " is-active";
    },
  },
  computed: {
    ...mapState(["config"]),
  },
};
</script>
