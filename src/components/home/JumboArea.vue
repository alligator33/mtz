<template>
  <div>
    <div id="jumbo" class="py-5">
      <div class="">
        <div class="spacer"></div>

        <h1
          class="is-size-1 is-size-3-tablet text-center is-size-4-mobile has-text-primary mt-5"
        >
          Join Market Trade Zone
        </h1>

        <swiper :options="swiperOption">
          <swiper-slide>
            <h1
              class="is-size-2-tablet is-size-4-mobile is-size-1-desktop has-text-weight-semibold has-text-white has-text-centered"
            >
              PROFESSIONAL TRADERS AT YOUR <br />
              SERVICE!
            </h1>
          </swiper-slide>
          <swiper-slide>
            <h1
              class="is-size-2-tablet is-size-4-mobile is-size-1-desktop has-text-weight-semibold has-text-white has-text-centered"
            >
              NEW AGE DIGITAL OPTIONS <br />TRADING PLATFORM!
            </h1>
          </swiper-slide>
          <swiper-slide>
            <h1
              class="is-size-2-tablet is-size-4-mobile is-size-1-desktop has-text-weight-semibold has-text-white has-text-centered"
            >
              TRIED AND TESTED SYSTEMS <br />THAT WORK
            </h1>
          </swiper-slide>
        </swiper>
        <h2 class="text-center text-white">Reduced Risk & Guaranteed Earning.</h2>
      </div>
      <div class="flex justify-center">
        <router-link
          :to="{ name: 'traders' }"
          class="button is-primary is-medium mt-5"
          >Find a Trader
        </router-link>
      </div>
      <div>
        <OurFeatures />
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../db/main_data";
import OurFeatures from "./OurFeatures.vue";

export default {
  data() {
    return {
      name: data.global.name,
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 5000,
        },
      },
    };
  },
  components: { OurFeatures },
};
</script>

<style scoped>
.boxed {
  text-align: center;
  color: white;
}

.banner {
  width: 100%;
}

.header {
  color: white;
  position: absolute;
  top: 40%;
  left: 20%;
  /*transform: translate(-50%, -50%);*/
}

.text {
  top: 54%;
  /*left: 39%;*/
  /*transform: translate(-50%, -50%);*/
}

#jumbo {
  background-image: url("/img/banner/purple-bg-jumbo.png"); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  height: auto; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}

.img-responsive {
  display: block;
  max-width: 100%;
  height: 50%;
}
</style>
