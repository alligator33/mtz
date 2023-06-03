x
<template>
  <div class="bg-white" id="app bg-white">
    <ContactFormV3 />
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-x-40 py-10 items-center content-end">
        <div>
          <ul class="p-4 space-y-2">
            <li v-if="phone.length < 1">
              <i class="fas fa-phone-alt"></i> Phone Number: <br />
              {{ phone }}
            </li>
            <li>
              <i class="fa-regular fa-envelopes"></i> Email: <br />
              {{ emailAddress }}
            </li>
            <li>
              <i class="pr-2 fa-sharp fa-solid fa-building"></i>Address:
              <br />{{ location }}
            </li>
          </ul>
        </div>
        <div>
          <img class="object-cover order-2 w-1/2" :src="`/img/jumbo/contact.svg`" />
        </div>
      </div>
    </div>

    <FaqComponent v-scrollanimation />
  </div>
</template>

<script>
import FaqComponent from "../components/faq/FaqComponent.vue";

import ContactFormV3 from "../components/form/ContactFormV3";
import data from "../db/main_data";

export default {
  components: {
    ContactFormV3,
    FaqComponent,
  },
  data() {
    return {
      phone: data.global.telephone,
      emailAddress: `contact@${data.global.domain}`,
      location: data.global.address,
    };
  },
};
</script>

<style scoped>
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
