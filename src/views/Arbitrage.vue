<template>
  <div class="bg-white">
    <div class="container">
      <div>
        <div class="grid lg:grid-cols-2 gap-x-10 items-center">
          <div>
            <h3>
              You can
              <a
                href="https://youtu.be/2wbEOAJbb28"
                class="text-violet-500 font-medium underline"
                >learn more about Arbitrage</a
              >
              from the video provided.
            </h3>

            Traders make steady profits under Arbitrage but due to the workforce
            involved, they don't make that much. This is where MTZ comes in; We
            have developed an automated system that can not only watch any asset
            over 30 brokers But buy/sell and transfer them. This system has been
            battle-tested for 2 years and has proven its worth. Your profits
            will be remitted to your broker account daily for 14 days
          </div>
          <div>
            <a target="_blank" href="https://youtu.be/2wbEOAJbb28">
              <img
                src="https://i3.ytimg.com/vi/2wbEOAJbb28/maxresdefault.jpg"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="py-20">
        <coingecko-coin-price-static-headline-widget
          coin-ids="bitcoin,ethereum,eos,ripple,litecoin"
          currency="usd"
          locale="en"
        ></coingecko-coin-price-static-headline-widget>

        <coingecko-coin-market-ticker-list-widget
          :coin-id="selectedCoin.name"
          currency="usd"
          locale="en"
        ></coingecko-coin-market-ticker-list-widget>
      </div>
    </div>

    <PricingTableSection />
  </div>
</template>

<script>
import PricingTableSection from "../components/home/PricingTableSection.vue";
import { loadScriptAsync } from "../store/exports.js";

loadScriptAsync(
  "https://widgets.coingecko.com/coingecko-coin-price-static-headline-widget.js"
);

export default {
  data() {
    return {
      selectedCoin: {
        id: "bitcoin",
        symbol: "btc",
        name: "Bitcoin",
      },
      coins: [
        {
          id: "bitcoin",
          symbol: "btc",
          name: "Bitcoin",
        },
        {
          id: "ethereum",
          symbol: "eth",
          name: "Ethereum",
        },
        {
          id: "eos",
          symbol: "eos",
          name: "EOS",
        },
        {
          id: "ripple",
          symbol: "xrp",
          name: "Ripple",
        },
        {
          id: "litecoin",
          symbol: "ltc",
          name: "Litecoin",
        },
        {
          id: "bitcoin-cash",
          symbol: "bch",
          name: "Bitcoin Cash",
        },
      ],
      isLoading: true,
    };
  },
  mounted() {},
  methods: {},
  components: { PricingTableSection },
};
</script>

//
