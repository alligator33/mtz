<template>
  <div>

  
    <div  class="bg-white">
      <TopHeader />

      <template>
        <nav
          class="flex justify-between items-center container"
          role="navigation"
          aria-label=""
        >

        <!-- compnay logo -->
        <router-link  :to="{ name: 'home' }">
              <img
                alt="Market Trade Zone"
                src="/img/logo_purple.png"
                class=""
                id="logo"
              />
            </router-link>


        <!-- compnay logo -->


                <!--//desktop navigation-->
                <div class="navbar-menu text-warning px-10">
            <div class="flex justify-between">
              <router-link
                :to="{ name: 'home' }"
                exact-active-class="current-page"
                class="navbar-item"
              >
                Home
              </router-link>
     
              <router-link
                :to="{ name: 'about' }"
                exact-active-class="current-page"
                class="navbar-item"
              >
                About Company
              </router-link>
              <router-link
                :to="{ name: 'mtzBot' }"
                exact-active-class="current-page"
                class="navbar-item"
              >
                MTZ 5.0
              </router-link>
              <router-link
                :to="{ name: 'contact' }"
                exact-active-class="current-page"
                class="navbar-item"
              >
                Contact
              </router-link>
              <router-link
                :to="{ name: 'nftPage' }"
                exact-active-class="current-page"
                class="navbar-item"
              >
               NFT TRADING
              </router-link>
            </div>           
          </div>

          <!--//desktop navigation-->

          <div class="flex">
           


          <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <router-link
                    :to="{ name: 'login' }"
                    class="button is-primary"
                  >
                    <strong>Login</strong>
                  </router-link>
                </div>
              </div>
            </div>
            <button
            class="lg:hidden"
              @click="showMobileNav"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
                  <i class="fas fa-bars text-3xl text-white pr-4"></i>
            </button>
          </div>
     
        </nav>
      </template>

      <!--            mobile navigation-->
      <template v-if="showMobileNav">
        <div :class="showNav">
          <div class="mobile-menu py-5">
         <div>
        
            <div class="px-10">
              <span @click="showMobileNav" class="is-size-3 has-text-white">
              <i class="fas fa-times"></i><span class="mx-3">Close</span>
            </span>
              <ul class="has-text-white text-ri">
                <li
                  @click="showMobileNav"
                  class="py-4 is-size-4 font-weight-bold"
                >
                  <router-link
                    class="has-text-white"
                    :to="{ name: 'home' }"
                    href="#"
                    >Home</router-link
                  >
                </li>
            
                <li
                  @click="showMobileNav"
                  class="py-4 is-size-4 font-weight-bold"
                >
                  <router-link
                    class="has-text-white "
                    :to="{ name: 'about' }"
                    href="#"
                    >About Company
                  </router-link>
                </li>
                <li
                  @click="showMobileNav"
                  class="py-4 is-size-4 font-weight-bold"
                >
                  <router-link
                    class="has-text-white"
                    :to="{ name: 'mtzBot' }"
                    href="#"
                    >MTZ 5.0
                  </router-link>
                </li>
                <li
                  @click="showMobileNav"
                  class="py-4 is-size-4 font-weight-bold"
                >
                  <router-link
                    class="has-text-white"
                    :to="{ name: 'contact' }"
                    href="#"
                    >Contact
                  </router-link>
                </li>
              </ul>
            </div>
         </div>
          </div>
        </div>
      </template>
      <!--            mobile navigation-->
    </div>
  </div>
</template>

<script>
import TopHeader from "./TopHeader.vue";

export default {
  components: {
    TopHeader,
  },

  data() {
    return {
      showNav: {
        toggle: false,
        "is-hidden-desktop": true,
        "is-hidden-touch": true,
      },

      menuLinks: [
        {
          title: "Home",
          link: "home",
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
    };
  },

  methods: {
    showMobileNav() {
      this.showNav.toggle = !this.showNav.toggle;
      this.showNav["is-hidden-touch"] = !this.showNav["is-hidden-touch"];
    },
  },
  watch: {
    "$route.name"() {
      window.fakeReloadSmooth();
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-menu {
  background-color: #7e22ce;
  height: 100vh;

  z-index: 9999;
  position: fixed; /* Sit on top of the page content */
  /*display: none; !* Hidden by default *!*/
  width: 100%; /* Full width (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.current-page {
  background-color: #7e22ce;
  color: #ffffff;
}
.current-page:focus,
.current-page:focus-within {
  background-color: #7e22ce;
  color: #ffffff;
}

#logo {
  height: 40px;
  // width: 200px;

  // max-width: 50%;
}

.navbar-item {
  color: #000000;
}

.navbar-item:hover {
  color: #f5fffd;
}

/*//slide out menu*/

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #a5f640;
  display: block;
  transition: 0.3s;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
</style>
