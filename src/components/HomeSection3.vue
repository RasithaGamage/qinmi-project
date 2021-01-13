<template>
  <v-layout row wrap class="main-section">
    <v-row class="section-1">
      <v-col cols>
        <div class="main-text">
          <h1>Elegant and versatile design</h1>
          <br />
          <div class="feature">
            <div>Available Colors</div>
            <div class="mt-5">
              <div class="dot">
                <v-btn
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
          </div>
        </div>
        <div class="other-features">
          <p>
            Stainless steel brush finished body <span>.</span> 2 inch touch
            screen <span>.</span> Always-On OLED display
          </p>
          <p></p>
        </div>
      </v-col>
      <v-col cols>
        <div class="main-img-1">
          <zoom-on-hover :img-normal="img2"></zoom-on-hover>
        </div>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
import img1White from "../assets/Smart Watch.H14.2k_white.png";
import img1Dark from "../assets/Smart Watch.H14.2k_dark.png";
import img1Blue from "../assets/Smart Watch.K03.2k.png";
import img1Pink from "../assets/Smart Watch.H14.2k_pink.png";

export default {
  name: "HomeSection3",
  data: () => ({
    img2: img1White,
  }),
  methods: {
    changeColor(color) {
      switch (color) {
        case "white":
          this.img2 = img1White;
          break;
        case "dark":
          this.img2 = img1Dark;
          break;
        case "blue":
          this.img2 = img1Blue;
          break;
        case "pink":
          this.img2 = img1Pink;
          break;
        default:
          this.img2 = img1Blue;
          break;
      }
    },
  },
};
</script>

<style scoped>
.other-features {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 350;
  font-size: 1.5vw;
  position: relative;
  top: 30%;
  padding-left: 10vw;
}
.other-features span {
  font-size: 4vw;
}

.main-section {
  background: rgb(241, 241, 241);
  background: radial-gradient(
    circle,
    rgba(241, 241, 241, 1) 17%,
    rgba(204, 204, 204, 1) 57%,
    rgba(210, 210, 210, 1) 100%
  );

  position: relative;
}
.main-img-1 {
  top: 0%;
  left: 0%;
  min-width: 300px;
  z-index: 1 !important;
}

.main-text {
  padding-left: 10vw;
  margin: 0;
  position: relative;
  top: 40%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

@media screen and (max-width: 600px) {
  .main-text {
    padding-left: 50px;
    margin: 0;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .main-text h1 {
    font-size: 8vw !important;
    line-height: 9vw !important;
  }

  .other-features {
    font-size: 4vw;
    line-height: 4vw !important;
    top: 20vw;
    padding: 10vw;
  }
  .other-features span {
    font-size: 10vw;
  }
}

.main-text h1 {
  font-size: 3vw;
  line-height: 3vw;
}
.main-text .feature {
  margin-top: 20px;
}
.main-text .feature div:nth-of-type(1) {
  display: inline-block;
  margin: 0;
  position: relative;
}
.dot {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: inline-block;
  margin-left: 20px;
}
</style>