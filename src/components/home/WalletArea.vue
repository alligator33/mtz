<template>
  <div class="has-background-white">
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-two-thirds has-text-left py-4">
            <h1 class="font-medium text-2xl pb-4">
              {{ name }} Cloud Account (Crypto-Wallet)
            </h1>
            <p class="is-size-6 is-size-6-touch">
              This is a CRYPTOCURRENCY HUB or cloud-account (as officially
              known) where you can store,receive, send and withdraw
              cryptocurrencies like Bitcoin using the ‘Crypto-wallet’ it comes
              with on default after creation. (this account is not for Trading
              or mining Cryptocurrencies).
            </p>
            <div>
              <h1 class="is-size-4 flex">
                <img src="/img/awards/one-star.png" width="30px" />Trustpilot
              </h1>
              <img src="/img/awards/stars-4-01.png" width="200px" />
              <p>TrustScore 4.0 | 5 Reviews</p>
            </div>
          </div>

          <div class="column">
            <router-link
              :to="{ name: 'contact' }"
              class="button is-primary is-outlined is-size-5 my-5"
            >
              Open Walllet
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../db/main_data";

export default {
  data() {
    return {
      name: data.global.name,
    };
  },
};
</script>

<style scoped></style>
