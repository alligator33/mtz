<template>
  <div>
    <div class="container">
      <div class="">
        <div class="py-10">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in slide" :key="index">
              <h1 class="text-gray-700 text-2xl lg:text-5xl  text-center font-medium">
                {{ item }}
              </h1>


            </swiper-slide>
          </swiper>
          <p class="text-violet-600 text-center py-4">Reduced Risk & Guaranteed Earning.</p>


          <section>



          </section>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 5000,
        },

        loop: true,
      },

      slide: [
        "PROFESSIONAL TRADERS AT YOUR SERVICE!",
        "NEW AGE DIGITAL OPTIONS TRADING PLATFORM!",
        "TRIED AND TESTED SYSTEMS THAT WORK",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
