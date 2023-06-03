<template>
  <div id="app">
    <template>
      <div v-scrollanimation class="container is-fluid py-5">
        <h1 class="is-size-3 is-size-4-touch text-center py-8">Get Started With {{ name }}</h1>
        <div class="grid lg:grid-cols-3 gap-x-8">
          <div v-for="starter in starters" :key="starter.id">
            <div class="has-text-left box mx-3 my-3 lg:h-64">
              <div>
                <div class="mx-1 py-3">
                  <div id="circle">
                    <p class="py-2 mx-2 text-white font-semibold">
                      {{ starter.no }}
                    </p>
                  </div>
                  <h3 class="is-size-5 py-2 font-medium">{{ starter.title }}</h3>
                  <p class="text-justify lin">{{ starter.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!--steps-->

    <!--        trade fo rme service-->
    <template>
      <div v-scrollanimation class="has-background-white section px-5">
        <div class="columns">
          <div class="column">
            <img src="/img/tfm/hand.png" />
          </div>
          <div class="column">
            <h1
              class="is-size-2 is-size-4-touch has-text-weight-bold has-text-left"
            >
              Trade for me Service
            </h1>
            <div class="has-text-justified">
              <p class="py-4">
                Welcome to the most sought-after service in the digital options
                trading community; The ‘Trade For Me’ service brought to you by
                a group of genuine industry experts dedicated to serving serious
                investors and traders on a global scale. Trading or Investing in
                Stocks, Trading Forex, Binary Options and cryptocurrencies was 2
                times referenced by Forbes as the no.5 most lucrative and
                high-paying occupation in the world. According to recent
                statistics; Yearly Millions of Traders go into trading wrongly
                and lose tons of money either to lack of experience, or to
                Fraudsters.
              </p>
              <router-link :to="{ name: 'traders' }" class="button is-primary"
                >Find Trader</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </template>
    <!--        trade fo rme service-->

    <!--        Account Holder-->

    <template>
      <div v-scrollanimation class="section px-5">
        <div class="columns">
          <div class="column">
            <div class="has-background-white py-4 shadow-sm rounded-lg">
              <h1 class="is-size-5 font-weight-bold text-center">
                Account Holder Settings
              </h1>

              <!-- Main container -->
              <div class="mx-5 py-5">
                <table class="table is-fullwidth px-5">
                  <tr>
                    <td>Trader Email:</td>
                    <td>John @gmail.com</td>
                  </tr>
                  <tr>
                    <td>Deposit</td>
                    <td>
                      <div class="field ml-5">
                        <input
                          id="switchExample"
                          type="checkbox"
                          name="switchExample"
                          class="switch"
                          v-model="deposit"
                          checked="checked"
                        />
                        <label for="switchExample"></label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>WithDraw:</td>
                    <td>
                      <div class="field ml-5">
                        <input
                          id="switchColorDanger"
                          type="checkbox"
                          name="switchColorDanger"
                          class="switch is-danger"
                          v-model="withdraw"
                        />
                        <label for="switchColorDanger"></label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Last Accessed:</td>
                    <td>2 days ago</td>
                  </tr>
                </table>
              </div>
              <h1
                v-if="deposit === true"
                class="py-2 has-text-white has-background-success mx-3"
              >
                Third party can make deposits for you
              </h1>
              <h1
                v-if="withdraw === true"
                class="py-2 has-text-white has-background-warning mx-3"
              >
                Third party can make withdraws for you
              </h1>
            </div>
          </div>
          <div class="column">
            <div class="has-text-justified">
              <h1 class="is-size-2 is-size-5-touch has-text-weight-bold">
                Account Holder Information
              </h1>
              <p>
                As The account holder you have 100% access to your account 24/7
                thereby confirming trade histories Each trade session last a
                minimum of 2 weeks… This means in 2 weeks you will be processing
                a real profit payout, except in cases where you want your trades
                to continue beyond 2 weeks.
              </p>
              <br />
              <h3 class="is-size-5 has-text-weight-bold">MORE INFO;</h3>
              <p>
                You do not share your broker account login details with your
                expert, when you open account on a good broker that supports
                ‘Trade-For-Me’ services, all you have to do is add your experts
                email in the Trade-For-Me section and he/she will operate The
                account’s trade-room seamlessly for you without needing your
                login details. Your expert only trades, he/she has no deposit
                nor withdrawal rights, Only you can authorize withdrawal via
                Skype invitation from your expert for a one on one conversation
                and updates on your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!--        Account Holder-->

    <!--        call to action-->
    <section v-scrollanimation class="section ">
      <div class="container">
        <div class="level mx-5">
          <div class="level-left">
            <h2 class="is-size-3 is-size-5-touch ">
              Get started Now !!
            </h2>
          </div>
          <div class="level-right">
            <router-link
              :to="{ name: 'traders' }"
              class="  text-white  bg-violet-600 p-2 rounded-md"
            >
              Find a Trader
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <!--        call to action-->

    <!--        choose your trade  preference-->

    <PricingTableSection />
    <!--        choose your trade  preference-->

    <!--        frequently asked questions-->

    <!--        frequently asked questions-->

    <FaqComponent />
  </div>
</template>

<script>
import data from "../db/main_data";
import FaqComponent from "../components/faq/FaqComponent.vue";
import PricingTableSection from "../components/home/PricingTableSection.vue";

export default {
  components: {
    FaqComponent,
    PricingTableSection,
  },
  data() {
    return {
      deposit: false,
      withdraw: false,

      name: data.global.name,
      starters: data.starters,

      historys: data.history,
    };
  },
};
</script>

<style scoped>
#circle {
  background: #7e22ce;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

#app {
  height: 100%;
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
