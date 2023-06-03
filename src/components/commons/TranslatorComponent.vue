<template>
 <div>
<div >
  <select class="border-2 w-24  rounded-md border-purple-800" v-model="selectedLanguage">
    <option v-for="(item, index) in  languages" :key="index" :value="item.code">{{item.escapedIcon}}{{ item.title }}</option>
  </select>
</div>
 </div>
</template>

<script >
import languages from "../../../src/languages.json";

export default {

  data() {
    return {
      languages,
      selectedLanguage: "en",
    };
  },

  watch: {
    selectedLanguage(newLanguage) {
      this.handleTranslation(newLanguage);
    },
  },

  methods: {
    handleTranslation(code) {
      window.location.assign(`/#googtrans(${code})`);

      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped></style>
