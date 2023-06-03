<template>
  <div class="">
    <template v-if="!isLoading">
      <div class="container py-20">
        <div
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 justify-items-center"
        >
          <div
            class="relative pb-10 bg-white rounded-2xl border shadow-sm"
            v-for="(item, index) in nfts"
            :key="index"
          >
            <img
              class="h-36 w-full object-cover rounded-t-2xl"
              :src="item.bannerUrl"
            />

            <div class="ml-4 absolute top-28">
              <div class="flex items-center">
                <img
                  class="h-20 w-20 p-1 bg-white rounded-2xl"
                  :src="item.avatarUrl"
                />
                <div>
                  <div class="mt-4 font-medium pl-2 text-black">
                    {{ item.layerName }}
                    <i class="fa-solid fa-badge-check text-orange-400"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-16 pl-4">
              Volume:
              <span class="font-bold">
                {{ formatAmount(item.dailyTradePrice) }}
              </span>

              <!-- Volume: <span class="font-bold">{{ Number(item.dailyTradePrice.amount ).toLocaleString() }} USD</span>   -->
            </div>
          </div>
        </div>
      </div>
    </template>
    <div v-else class="flex justify-center">
      <div>
        <div class="text-center">
          <i
            class="fa-duotone fa-spinner-third animate-spin text-3xl text-violet-400"
          ></i>
        </div>
        <span class="text-center"> Fetching Nfts ...</span>
      </div>
    </div>
    <TestimonialComponent :testimonials="testimonials" />
  </div>
</template>

<style lang="scss" scoped>
h2 {
  background-color: blue;
}
</style>

<script>

import TestimonialComponent from "../components/home/TestimonialComponent.vue";

// import {fetchNFTs} from "../store/fetchNft";

export default {
  components: {
    TestimonialComponent,
  },
  data() {
    return {
      nfts: [],
      isLoading: true,
      testimonials: [
        {
          id: 1,
          image: "img/testify/nft/isobel_webb.png",

          title: " Collector ",
          name: " Dr Isobel Webb",
          description: `"Trading NFTs on Market Trade Zone  has been a fantastic experience. I adore how different it is and how much money I've earned. Highly advised!"`,
        },
        {
          id: 2,
          image: "img/testify/nft/collector.png",

          title: "Collector ",
          name: "Damian Howell",
          description: `NFT Trading has changed the game for collectors. Owning rare digital art is exciting, and it has incredible growth potential.`,
        },
        {
          id: 3,
          image: "img/testify/nft/student.png",
          title: "Student",
          name: "Gerald Booker",
          description: `Despite my initial skepticism, NFT trading ended up being one of my finest financial moves. It's valuable, transparent, and excellent for both short-term and long-term expenditures.`,
        },
        {
          id: 4,
          image: "img/testify/nft/teacher.png",
          title: "School Teacher",
          name: "Sophia Montes",
          description: `NFT trading helped me meet people who love digital painting as much as I do. It's genuinely enjoyable because of the friendly community and easy trading procedure.`,
        },
      ]
      
    };
  },

  mounted() {
    this.getNFTs();
  },

  methods: {
    formatAmount(amount) {
      // return Number(amount).toLocaleString();

      if (amount === null) {
        return "--";
      } else {
        return Number(amount.amount).toLocaleString() + " USD";
      }
    },

    async getNFTs() {
      this.isLoading = true;

      const url =
        "https://www.binance.com/bapi/nft/v1/public/nft/home-collection-detail?nftType=1&pageSize=15";

      const response = await fetch(url);
      const { data } = await response.json();
      this.nfts = data;

      this.isLoading = false;
    },
  },
};
</script>
