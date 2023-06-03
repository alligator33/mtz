<!-- eslint-disable no-unused-vars -->
<template>
  <div class="container">
    <div class="px-2 py-16 sm:px-0">
      <!-- mobil menu -->

      <div class="overflow-x-auto">
        <div class="flex justify-center gap-x-2 p-1 lg:hidden">
          <div v-for="(item, index) in features" :key="index">
            <div
              @click="getSelected(item)"
              :class="[
                item.id === currentTab.id
                  ? 'font-bold border px-1 border-neutral-300'
                  : ' ',
              ]"
              class="cursor-pointer text-white rounded-md my-2 text-uppercase"
            >
              <p class="">{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- mobil menu -->

      <div class="flex justify-center items-center">
        <div class="w-60 hidden lg:block">
          <div v-for="(item, index) in features" :key="index">
            <div
              @click="getSelected(item)"
              :class="[item.id === currentTab.id ? 'glass-tab' : ' ']"
              class="py-10 px-4 cursor-pointer text-white text-uppercase"
            >
              {{ item.title }}
            </div>
          </div>
        </div>

        <div class="rounded-2xl">
          <div v-for="(item, index) in features" :key="index">
            <div class="relative" v-if="item.id === currentTab.id">
              <img
                class="rounded-2xl  h-full w-full object-cover lg:h-[700px] lg:w-[1400px] brightness-75"
                :src="item.image"
              />

              <div>
                <div class="absolute bottom-0 lg:px-20 text-white">
                  <div class="lg:container">
                    <div class="p-4">
                      <h1
                        class="font-bold text-3xl lg:text-5xl opacity-100 z-10"
                      >
                        NFT
                      </h1>
                      <div class="lg:text-xl">
                        Be a part of Savvy collectors, Buy trending high-valued
                        NFTs in groups and earn when your art resales. Minimum
                        150% ROI as a share-owner. * Own a certain % of a
                        million-dollar worth of arts
                      </div>
                    <button class="button bg-violet-400 my-2">Learn More</button>

                    </div>

                    <div v-if="false" v-html="item.description"></div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const features = ref([
  
      {
        id: 2,
        title: "Arbitrage Trading",
        text: "Tab 2 text",
        image: "/img/home/arbitrage.jpg",
      },
      {
        id: 3,
        title: "Nft Trading",
        text: "Tab 3 text",
        image: "/img/home/nft.jpg",
        description: `      <div class="text-xl p-4">

<h1 class=" font-bold text-5xl opacity-100 z-10">NFT </h1>


Be a part of Savvy collectors, Buy trending high-valued NFTs in groups and earn when your art resales. Minimum 150% ROI as a share-owner.


* Own a certain % of a million-dollar worth of arts * Use your MTZ membership token to acquire cryptoverse tokens at a highly discounted rate Join Marketradezone

</div>`,
      },
      {
        id: 4,
        title: "TRADING COURSE ",
        text: "Tab 3 text",
        image: "https://picsum.photos/id/8/200/300",
      },
    ]);

    function getSelected(item) {
      currentTab.value = item;
    }
    const currentTab = ref(features.value[0]);

    console.log(currentTab.value);

    return {
      features,
      getSelected,
      currentTab,
    };
  },
};
</script>

<style>
.glass-tab {
  border-radius: 16px 0px 0px 16px;
  /* From https://css.glass */
  background: rgba(162, 79, 236, 0.23);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.1px);
  -webkit-backdrop-filter: blur(7.1px);
  border: 1px solid rgba(162, 79, 236, 0.59);
}

.glass-tab :hover {
  /* From https://css.glass */
  background: rgba(162, 79, 236, 0.54);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.1px);
  -webkit-backdrop-filter: blur(10.1px);
  border: 1px solid rgba(162, 79, 236, 0.56);
}

.triangle-bottom-left {
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 200px 0 0 200px;
  border-color: transparent transparent transparent #7621c3;
  z-index: -1;
}
</style>
