<template>
  <div class="py-5 bg-white">
    <div class="">

      <div>
      
      </div>
      <div class="container">
        <div class="text-left py-10">
          <p
            class="text-lg bg-violet-100 inline-flex px-2 text-violet-500 font-bold rounded-md"
          >
            Our features
          </p>
          <!-- <h3 class="text-3xl font-medium">Why {{ name }} ?</h3> -->
        </div>
        <div class="grid lg:grid-cols-3 gap-x-20 justify-items-center">
          <div v-for="feature in features" :key="feature.id">
            <div class="">
              <div class="bg-gray-50  shadow-md">
               
                <div class="card-content ">
                  <div class="content has-text-left">
                  <span class="text"><i class="fa-regular fa-circle-dashed text-2xl spinner"></i></span>

                    <h6
                      class="is-size-5 has-text-weight-bold has-text-left "
                    >
                      {{ feature.title }}
                    </h6>

                    <p class="has-text-justified is-size-6-touch">
                      {{ feature.text }}
                    </p>

                    <router-link :to="{ name: feature.link }"
                      ><span
                        class="underline has-text-weight-semibold has-text-dark "
                        >LEARN MORE</span
                      ></router-link
                    >
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
import data from "../../db/main_data";

export default {
  data() {
    return {
      name: data.global.name,
      features: data.features,
    };
  },
};
</script>

<style lang="scss" scoped>
$grey: #4a4a4a;
$white: #ffffff;
$orange: #7e22ce;

.hova {
  -webkit-transition: 0.25s ease-in-out 0.25s;

  #icon {
    color: $orange !important;
    transition: 0.25s ease-in-out 0.25s;
  }

  h6 {
    color: $grey;
    transition: 0.25s ease-in-out 0.25s;
  }

  p {
    color: $grey;
    transition: 0.25s ease-in-out 0.25s;
  }
}

.hova:hover {
  background-color: $orange;
  transition: 0.25s ease-in-out 0.25s;

  #icon {
    color: $white !important;
    transition: 0.25s ease-in-out 0.25s;
  }
  p {
    color: $white !important;
    transition: 0.25s ease-in-out 0.25s;
  }
  .heda {
    color: $white !important;
    transition: 0.25s ease-in-out 0.25s;
  }
  .img {
    height: 3000px;
  }
}


.spinner {
  animation: spin 3s linear infinite;
  transform-origin: center center;
 
}
</style>
