<template>
  <div id="app">
    <div class="container">
      <h4 class="is-size-5">{{ percent }}%</h4>
      <div class="loading-bar">
        <div class="percentage" :style="{ width: percentage + '%' }"></div>
      </div>
    </div>

    <div class="container">
      <h4 class="is-size-5">{{ percent }}%</h4>
      <div class="loading-bar">
        <div class="percentage" :style="{ width: percentage + '%' }"></div>
      </div>
    </div>
    <div class="container">
      <h4 class="is-size-5">{{ percent }}%</h4>
      <div class="loading-bar">
        <div class="percentage" :style="{ width: percentage + '%' }"></div>
      </div>
    </div>
    <div class="container">
      <h4 class="is-size-5">{{ percent }}%</h4>
      <div class="loading-bar">
        <div class="percentage" :style="{ width: percentage + '%' }"></div>
      </div>
    </div>
    <div class="container">
      <h4 class="is-size-5">{{ percent }}%</h4>
      <div class="loading-bar">
        <div class="percentage" :style="{ width: percentage + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage: 20,
      staff: 70,
    };
  },

  computed: {
    percent() {
      return this.percentage.toFixed();
    },
  },

  created() {
    var intval = setInterval(() => {
      if (this.percentage < this.staff) this.percentage += 0.1;
      else clearInterval(intval);
    }, 10);
  },
};
</script>

<style lang="scss" scoped>
.container {
  text-align: right;
  /*font-size:8rem;*/
  color: black;
}

.loading-bar {
  position: relative;
  width: 400px;
  height: 20px;
  border-radius: 15px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba($color: #000, $alpha: 0.4), 0 -1px 1px #fff,
    0 1px 0 #fff;

  .percentage {
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    display: block;
    height: 100%;

    border-radius: 15px;
    background-color: #7e22ce;
    background-size: 30px 30px;
    background-image: linear-gradient(
      135deg,
      rgba($color: #fff, $alpha: 0.15) 25%,
      transparent 50%,
      rgba($color: #fff, $alpha: 0.15) 50%,
      rgba($color: #fff, $alpha: 0.15) 75%,
      transparent 75%,
      transparent
    );

    animation: animate-stripes 3s linear infinite;
  }
}

@keyframes animate-stripes {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 0;
  }
}
</style>
