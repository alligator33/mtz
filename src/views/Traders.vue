<template>
    <div>
        <!--        jumbotron Area-->


        <!--        jumbotron Area-->

        <div class="container">
            <h1 class="font-semibold text-3xl py-10 text-center">
                Introducing our Top Traders
            </h1>
            <div class="columns is-multiline">
                <div
                        class="column is-4-desktop is-6-tablet"
                        v-for="(trader, id) in limitedTraders"
                        :key="id"
                >
                    <div class="card rounded-lg py-5">
                        <div>
                            <div class="media py-4 px-4">
                                <figure class="media-left">
                                    <div class="  ">
                                        <img class="avatar-small"
                                             :src="`${API_URL}/${trader.image}`"
                                             @error="setDefaultImage"
                                        />
                                    </div>
                                </figure>

                                <div class="media-content">
                                    <p class="is-4 is-size-5 my-4">{{ trader.name }}</p>
                                    <p class="is-4 my-2 is-capitalized has-text-primary">
                                        {{ trader.level }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="has-background-white px-4">
                            <div class="has-background-white">
                                <table class="table is-fullwidth">
                                    <tr>
                                        <td>Level:</td>
                                        <td>
                      <span class="mx-3 is-size-5 is-capitalized">{{
                          trader.level
                          }}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Starting Pricing:</td>
                                        <td>
                      <span class="mx-3 is-size-5"
                      >${{ trader.startingPrice }}</span
                      >
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Win Rate:</td>
                                        <td>
                                            <span class="mx-3 is-size-5">{{ trader.winRate }}%</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Trades / Week:</td>
                                        <td>
                      <span class="mx-3 is-size-5">{{
                          trader.weeklyTrades
                          }}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Completed Trades:</td>
                                        <td>
                      <span class="mx-3 is-size-5">{{
                          trader.completedTrades
                          }}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Number of clients:</td>
                                        <td>
                      <span class="mx-3 is-size-5">{{
                          trader.totalClients
                          }}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Number of clients:</td>
                                        <td>
                      <span class="mx-3 is-size-5">{{
                          trader.totalClients
                          }}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Response rate:</td>
                                        <td>
                      <span class="mx-3 is-size-5"
                      >{{ trader.responseRate }}%</span
                      >
                                        </td>
                                    </tr>
                                </table>

                                <hr/>
                                <br/>
                                <router-link
                                        :to="{ name: 'profile', params: { id: trader.code } }"
                                        class="button is-primary"
                                >View Profile
                                </router-link>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center">
            <button class="button is-primary my-5">VIEW MORE TRADERS</button>
        </div>
    </div>
  <!--        jumbotron Area-->
</template>

<script>
import $axios from "../http";
import {API_URL} from "../config";

export default {
    data() {
        return {
            traders: [],
            limit: 6,
            API_URL: API_URL,
        };
    },

    computed: {
        limitedTraders() {
            return this.limit ? this.traders.slice(0, this.limit) : this.traders;
        },
    },
    mounted() {
        this.fetch();
    },

    methods: {
        fetch() {
            $axios
                .get("/api/traders")
                .then(({data}) => {
                    this.traders = data;
                })
                .catch((err) => console.log(err));
        },

        viewTrader(code) {
            $axios
                .get("/api/traders/" + code)
                .then()
                .catch();
        },

        setDefaultImage(event) {
            event.target.src = `${API_URL}/img/traders/user.png`;
        }
    },
};
</script>

<style scoped>
#jumbo {
    background-image: url("/img/banner/traders.jpg"); /* The image used */
    background-color: #cccccc; /* Used if the image is unavailable */
    height: 40vh; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
}

.table td,
.table th {
    border: 1px #902629;
}

.avatar {
    max-height: 200px;
    max-width: 200px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
}

.avatar-small {
    max-height: 100px;
    max-width: 100px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
</style>
