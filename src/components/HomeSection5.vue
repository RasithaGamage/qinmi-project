<template>
  <v-layout row wrap class="main-section">
    <v-row class="section-1">
      <v-col cols>
        <v-row>
          <v-col cols="5" xs12>
            <div class="main-img">
              <img src="../assets/Smart Watch.H01.2k.png" />
              <v-row>
                <div class="feature">
                  <div>Colors</div>
                  <div class="dot">
                    <v-btn
                      :height="25"
                      :width="25"
                      v-on:click="changeColor('white')"
                      contextmenu=""
                      class="mx-2"
                      fab
                      small
                      color="rgb(255, 255, 255)"
                    >
                    </v-btn>
                  </div>
                  <div class="dot">
                    <v-btn
                      :height="25"
                      :width="25"
                      v-on:click="changeColor('dark')"
                      contextmenu=""
                      class="mx-2"
                      fab
                      small
                      color="rgb(48, 48, 48)"
                    >
                    </v-btn>
                  </div>
                  <div class="dot">
                    <v-btn
                      :height="25"
                      :width="25"
                      v-on:click="changeColor('blue')"
                      contextmenu=""
                      class="mx-2"
                      fab
                      small
                      color="primary"
                    >
                    </v-btn>
                  </div>
                  <div class="dot">
                    <v-btn
                      :height="25"
                      :width="25"
                      v-on:click="changeColor('pink')"
                      contextmenu=""
                      class="mx-2"
                      fab
                      small
                      color="rgb(255, 112, 112)"
                    >
                    </v-btn>
                  </div>
                </div>
              </v-row>
              <v-row>
                <div class="selected-item ma-auto">
                  <p>QINMI {{ selected }} color smart watch</p>
                </div>
                <v-btn rounded color="primary" dark class="text-center ma-auto"
                  >BUY NOW
                </v-btn>
              </v-row>
            </div>
          </v-col>

          <v-col cols xs12 class="px-16 price-description">
            <h1>Heavy on features. Light on price.</h1>
            <br />
            <br />
            <br />
            <p>
              Meet QINMI, the health & fitness watch with built-in GPS, Active
              Zone Minutes, 20+ exercise modes and music experiences to keep you
              moving.
            </p>
            <h1><span>just </span><span>$ </span> 500</h1>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
export default {
  name: "HomeSection5",
  data: () => ({
    selected: "blue",
  }),
  methods: {
    changeColor(color) {
      switch (color) {
        case "white":
          this.selected = "white";
          break;
        case "dark":
          this.selected = "black";
          break;
        case "blue":
          this.selected = "blue";
          break;
        case "pink":
          this.selected = "pink";
          break;
        default:
          this.selected = "blue";
          break;
      }
    },
  },
};
</script>

<style scoped>
.main-section {
  background: rgb(255, 255, 255);
  height: fit-content;
  position: relative;
}

.main-img {
  height: 100vh;
  width: fit-content;
  margin: auto;
}

.main-img img {
  height: 70vh;
  margin-top: 10vh;
}

.main-img img:nth-of-type(1) {
  margin: auto;
}

h1 {
  font-size: 4vw;
  line-height: 4vw;
  margin-top: 10vh;
  text-align: center;
  color: rgb(58, 58, 58);
}

h1 span {
  font-size: 1vw;
}

h1 span:nth-of-type(2) {
  font-size: 2vw;
}

.dot {
  display: inline-block;
  margin-left: 10px;
}

.feature {
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  padding: 10px;
  background-color: rgb(235, 235, 235);
  border-radius: 20px;
}
.feature div:nth-of-type(1) {
  display: inline-block;
  margin: 0;
  position: relative;
}
.price-description {
  margin-top: 10vh;
}
.price-description p {
  width: 300px;
  text-align: center;
  margin: auto;
  position: relative;
}

.selected-item {
  text-align: center;
  width: 100%;
  display: block;
  margin-top: -20px !important;
}

@media screen and (max-width: 600px) {
  .price-description {
    margin-top: -10vh;
    margin-bottom: 100px;
  }
  .price-description h1 {
    font-size: 5vw;
  }

  h1 span {
    font-size:3.8vw;
  }

  h1 span:nth-of-type(2) {
    font-size: 4vw;
  }

}
</style>