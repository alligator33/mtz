<template>
  <div v-if="showComponent">
    <div v-scrollanimation class="container">
      <div class="grid lg:grid-cols-2 gap-x-40 py-10 items-center content-end">
        <div class="text-gray-700 px-10">
          <h1 id="target" class="font-medium text-2xl lg:text-3xl text-left">
            {{ route.title }}
          </h1>
          <div class="mt-2">
            <div
              class="lg:text-xl text-justify"
              v-html="route.description"
            ></div>
          </div>
        </div>

        <div>
          <img
            class="object-cover order-2"
            :src="`/img/jumbo/${route.image}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageJumbotron",
  props: {
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus vitae ea dolores, alias nostrum, facilis esse impedit non similique iusto eum rem commodi sit dolore dolor corrupti vel quaerat.
    
    `,
    },
  },
  data() {
    return {};
  },

  computed: {
    // get route meta data
    route() {
      return {
        title: this.$route.meta.title,
        description: this.$route.meta.description,
        image: this.$route.meta.image,
      };
    },

    showComponent() {
      const pages = [
        "admin",
        "profile",
        "viewTrader",
        "allTraders",
        "addTrader",
        "traders",
        "comments",
        "editTrader",
        "users",
        "home",
        "login",
      ];
      return !pages.includes(this.$route.name);
    },
  },
};
// import { useRoute } from "vue-router";

// hide component in home page
</script>

<style scoped>
#jumbo {
  /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 40vh; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}

.icon {
  height: 60px;
  width: 60px;
}

.vl {
  border-left: 3px solid #7e22ce;
  height: 100px;
}

.is-horizontal-center {
  justify-content: center;
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

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  #jumbo {
    height: 50vh; /* You must set a specified height */
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  #jumbo {
    height: 55vh; /* You must set a specified height */
  }
}
</style>
