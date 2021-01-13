<template>
  <v-layout row wrap class="main-section">
    <v-row class="section-1">
      <v-col cols>
        <div class="main-img">
          <img
            src="../assets/close-up-female-hands-using-wrist-smart-watch.png"
          />
        </div>
      </v-col>
      <v-col cols>
        <div class="main-text">
          <h1>Upgrade the life style</h1>
        </div>
      </v-col>
    </v-row>
  </v-layout>
</template>


<script>
export default {
  name: "HomeSection2",
  data: () => ({}),
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.main-section {
  background: rgb(255, 255, 255);
  height: 100vh;
  position: relative;
}

.main-img {
  height: 100vh;
  max-width: 100vw;
}
.main-img img {
  height: 80vh;
  max-width: 100vw;
  position: absolute;
  margin-top: 10vh;
  z-index: 90;
  left: 0px;
  bottom: 10px;
}

@media screen and (max-width: 600px) {
  .main-img img {
    height: auto;
    max-width: 100vw;
    position: absolute;
    z-index: 90;
    left: 0px;
    bottom: 10px;
  }

  .main-text h1 {
    font-size: 20vw !important;
    line-height: 20vw !important;
  }
  .main-text {
       top: 30% !important;
       padding-right: 30px!important;
  }
}

.main-img img:nth-of-type(1) {
}
.main-text {
  margin: 0;
  width: fit-content;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 0;
  color: rgb(186, 186, 186);
  padding-right: 100px;
}
.main-text h1 {
  font-size: 10vw;
  line-height: 10vw;
  text-align: right !important;
}
</style>