<template>
  <div v-if="false" class="bg-gradient-to-r from-violet-500 to-violet-500">
    <div class="pt-12 sm:pt-16 lg:pt-24">
      <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl space-y-2 lg:max-w-none">
          <h2 class="text-xl font-semibold leading-6 text-gray-300">
            TRADE FOR ME
          </h2>

          <h2
            class="font-display text-3xl tracking-tight text-white sm:text-4xl"
          >
            <span class="relative whitespace-nowrap"
              >
              <span class="relative">
                Simple Pricing to <br class="md:hidden" />
                suit your needs,</span
              ></span
            >
          </h2>
          <p class="text-xl text-gray-300">
            With Market Trade Zone, you are always making the right choice
          </p>
        </div>
      </div>
    </div>

    <!-- old pricing -->
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mt-8 pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div class="relative">
          <div class="absolute inset-0 h-3/4" />
          <div class="lg:px-8">
            <div class="relative z-10 sm:px-6 lg:px-8">
              <div
                class="mx-auto space-y-4 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-5 lg:space-y-0"
              >
                <div
                  v-for="item in preferences"
                  :key="item.name"
                  class="flex justify-start flex-col overflow-hidden rounded-2xl glass"
                >
                  <div class="px-6 py-8 sm:p-10 sm:pb-6 text-white">
                    <div>
                      <h3
                        class="inline-flex justify-start rounded-full bg-indigo-100 px-4 py-1 text-base font-semibold text-indigo-600"
                      >
                        {{ item.name }}
                      </h3>
                    </div>
                    <div
                      class="mt-4 flex items-baseline text-6xl font-bold tracking-tight"
                    >
                      ${{ item.priceMonthly }}
                      <span
                        class="ml-1 text-2xl font-medium tracking-normal text-white"
                      ></span>
                    </div>
                    <div class="mt-2 text-lg text-white">
                      {{ item.description }}
                    </div>
                  </div>
                  <div
                    class="flex flex-1 flex-col justify-between space-y-6 px-6 pt-6 pb-8 sm:p-10 sm:pt-6"
                  >

                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- old pricing -->
  </div>
</template>

<script>
// import { CheckIcon } from "@heroicons/vue/24/outline";

export default {
  name: "PricingTableSection",
  // components: {
  //   CheckIcon,
  // },
  data() {
    return {
      preferences: [
        {
          name: "Primary",
          priceMonthly: 5000,
          // description: " Subscription cost range; USD 5,000+",
          features: [
            "Min. ROI; 300% +",
            "Payout duration - daily or every 14 days (Your choice)",         
            "24/7 Customer support",
            "Designated Trade Expert",
            "100% access to trading account",
            "Trade-expert personal contact:",
          ],
          contact: {
            email: true,
            skype: true,
          },
        },
        {
          name: "Secondary",
          priceMonthly: 1850,
          // description: "For small teams or freelancers",
          features: [
            "Min, ROI 200% + ",
            "Payout duration - daily or every 14 days (Your choice)",
            "24/7 Customer support",
            "Designated Trade Expert",
            "100% access into trading account",
            "Trade-expert personal contact:",
          ],
          contact: {
            email: true,
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.glass {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.3px);
  -webkit-backdrop-filter: blur(1.3px);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
</style>
