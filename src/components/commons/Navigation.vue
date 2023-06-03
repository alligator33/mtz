<template>
  <div class="bg-white py-4 relative">
    <div v-if="showMenu" style="overflow: hidden" class="modal-overlay"></div>
    <div class="container">
      <div class="flex justify-between items-center">
        <div>
          <img
            alt="Market Trade Zone"
            src="/img/logo_purple.png"
            class="h-10"
            id="logo"
          />
        </div>
        <div class="hidden lg:block">
          <div class="border shadow-md flex gap-x-4 p-2 rounded-3xl px-4">
            <div class="" v-for="(item, index) in menuLinks" :key="index">
              <div>
                <router-link
                  :class="[
                    $route.name === item.link
                      ? 'text-violet-500'
                      : 'text-gray-700',
                  ]"
                  class="font-medium hover:text-violet-500 hover:px-2 hover:tracking-wider transition-all duration-200 ease-in-out"
                  :to="{ name: item.link }"
                >
                  <span> {{ item.title }}</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-8">
          <div
            @click="toggleMenu"
            class="bg-white border lg:hidden rounded-3xl px-4 py-1 shadow-md text-xl font-bold cursor-pointer"
          >
            Menu
          </div>

          <template v-if="showMenu">
            <div class=" ">
              <div class="absolute left-0 z-40 bg-white rounded-3xl w-full">
                <div class="p-10 flex flex-col space-y-4">
                  <div class="flex justify-between items-center">
                  <div class="pb-10">
                    <h3 class="font-bold text-2xl">Navigation</h3>
                    <TranslatorComponent/>
                  </div>
                    <h3
                      @click="toggleMenu"
                      class="font-bold text-2xl cursor-pointer border p-2 rounded-md px-3"
                    >
                      X
                    </h3>
                  </div>
                  <div v-for="(item, index) in menuLinks" :key="index">
                    <div
                      @click="navigate(item.link)"
                      :class="[
                        $route.name === item.link
                          ? 'text-violet-500'
                          : 'text-gray-700',
                      ]"
                      class="font-medium border-b w-full hover:text-violet-500 hover:px-2 hover:tracking-wider transition-all duration-200 ease-in-out"
                      :to="{ name: item.link }"
                    >
                      <span class="text-2xl"> {{ item.title }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <div class="flex items-center">
            <div class="hidden lg:block"><TranslatorComponent/></div>

            <div>
              <a
                class="ml-2 block px-4 bg-violet-400 text-white rounded-md py-1"
                :href="login_url"
                target="_blank"
              >
                Login</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Store from "../../store/store";
import TranslatorComponent from "../commons/TranslatorComponent.vue";
const login_url = Store.state.config.login_url;
export default {

  components: {
    TranslatorComponent,
  },
  data() {
    return {
      menuLinks: [
        {
          title: "Home",
          link: "home",
        },
      
        {
          title: "Nft Trading",
          link: "nftPage",
        },
        {
          title: "Arbitrage Trading",
          link: "arbitrage",
        },
        {
          title: "About Company",
          link: "about",
        },
        {
          title: "MTZ 5.0",
          link: "mtzBot",
        },
        {
          title: "Contact",
          link: "contact",
        },
      ],
      showMenu: false,
      login_url,
    };
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },

    navigate(link) {
      this.$router.push({ name: link });
      this.showMenu = false;
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: red; */
  background-color: rgba(39, 39, 42, 0.4);
  z-index: 10;

  /* add blur */

  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
</style>
