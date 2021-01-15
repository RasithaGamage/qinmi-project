<template>
  <v-layout row wrap class="main-section">
    <v-row class="section-1">
      <v-col cols>
        <h1>Rich in technology</h1>
        <v-row>
          <v-col cols="12" sm="4" xs="12">
            <v-card class="my-12 f-card rounded-xl">
              <v-card-title>Communicate With Your Kids</v-card-title>

              <v-card-text>
                <v-row align="center"> </v-row>
                <div class="card-icon-div">
                  <img src="../assets/com.png" />
                </div>
                <div class="my-4 subtitle-1">
                  Voice Calling / Video Calling / Messaging
                </div>

                <div class="card-content">
                  Talk to your child and let them talk to you and your loved
                  ones anytime, anywhere. Your child can call, text, send photos
                  and voice messages to friends, grandparents, aunts, uncles and
                  cousins.
                </div>
              </v-card-text>
            </v-card>
            <v-card class="my-12 f-card rounded-xl">
              <div class="card-icon-div">
                <img src="../assets/warning-sign-png.png" />
              </div>
              <v-card-title>SOS Function</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0"> </v-row>

                <div class="my-4 subtitle-1">
                  Know if your child is in distress
                </div>

                <div class="card-content">
                  In an emergency your child can simply press an SOS button to
                  let you know they need help, and the watch automatically calls
                  the emergency contact setup within the App.
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4" xs="12">
            <div class="main-img">
              <img src="../assets/Smart Watch.H02.2k.png" />
              <v-row>
                <v-dialog
                  v-model="dialog"
                  fullscreen
                  hide-overlay
                  transition="dialog-bottom-transition"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      rounded
                      color="blue-grey darken-3"
                      dark
                      class="text-center ma-auto"
                      v-bind="attrs"
                      v-on="on"
                    >
                      View all features
                    </v-btn>
                  </template>
                  <v-card>
                    <v-toolbar dark color="blue-grey darken-3">
                      <v-btn icon dark @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                      <v-toolbar-title>QINMI Features</v-toolbar-title>
                      <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-list color="blue-grey lighten-4" three-line subheader>
                      <div v-for="feature in features" :key="feature.key">
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title>{{
                              feature.title
                            }}</v-list-item-title>
                            <v-list-item-subtitle>{{
                              feature.description
                            }}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                      </div>
                    </v-list>
                  </v-card>
                </v-dialog>
              </v-row>
            </div>
          </v-col>
          <v-col cols="12" sm="4" xs="12">
            <v-card class="my-12 f-card-2 rounded-xl">
              <div class="card-icon-div">
                <img src="../assets/Pedometer.png" />
              </div>
              <v-card-title>Pedometer</v-card-title>

              <v-card-text>
                <v-row align="center"> </v-row>

                <div class="my-4 subtitle-1">Count steps</div>

                <div class="card-content">
                  Keep track of how active your child is.Know your kid&#39;s
                  steps through the Pedometer feature on your Smart Phone Watch,
                  and easily set up goals for them to achieve.
                </div>
              </v-card-text>
            </v-card>
            <v-card class="my-12 f-card-2 rounded-xl">
              <div class="card-icon-div">
                <img src="../assets/gps.png" />
              </div>
              <v-card-title>GPS Tracking</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0"> </v-row>

                <div class="my-4 subtitle-1">
                  Track your child at Anytime, Anywhere
                </div>

                <div class="card-content">
                  Using the Leefine app, you can see your child&#39;s location
                  on a map at any time, anywhere in the world. Featuring full
                  GPS Tracking, even if your kid is travelling overseas, you can
                  still check their location.
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
export default {
  name: "HomeSection4",
  data: () => ({
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    features: [
      {
        key: 1,
        title: "Communicate With Your Kids",
        description:
          "Voice Calling / Video Calling / Messaging - Talk to\
                    your child and let them talk to you and your loved\
                    ones anytime, anywhere. Your child can call, text,\
                    send photos and voice messages to friends,\
                    grandparents, aunts, uncles and cousins.",
      },
      {
        key: 2,
        title:
          "Gives Parents Peace Of Mind - GPS Tracking / Safe Zones / SOS / Secure Data",
        description:
          "See your child&#39;s location on a map at any time,\
                    set safe zones, SOS button lets you know if they\
                    need help. Smart Features - Camera / Class Times /\
                    Pedometer / Alarms - Take photos, you can set up\
                    times stop it disturbing school times, keep track of\
                    how active your child is and create and set up\
                    alarms.",
      },
      {
        key: 3,
        title:
          "Designed For Kids - Touch Screen / Waterproof / Parent Controlled App",
        description:
          "Easy to use, waterproof up to 1 metre depth for 30\
                    minutes, customisable for a cool new look and\
                    settings controlled by parents from iOS/Android\
                    compatible App.",
      },
      {
        key: 4,
        title: "Built-In Sim Card",
        description:
          "Using the Local 4G Network. Voice Calling: Talk to\
                    your child, let them talk to you. Anytime.\
                    Anywhere.The kid&#39;s smart watch phone allows your\
                    child to make and receive calls from a parent\
                    controlled contact list. You decide who your child\
                    can call or be called by; granny and grandad yes,\
                    but no strangers. Video Calling: Two way video\
                    calling from the Watch and the Leefine App, The\
                    phone watch can make and receive video calls between\
                    the watch and the Leefine App,adding an extra\
                    dimensions of fun.",
      },
      {
        key: 5,
        title:
          "Messaging: Keep in touch with your child with text and voice messages",
        description:
          "The smart watch can receive voice, text &amp;\
                    emojis messages, as well as sending voice messages\
                    and emojis. Using a parent controlled contact list,\
                    you and your child can quickly communicate without\
                    calling. Built-In Camera:The Smart phone watch has a\
                    built in camera which allows your kids to take\
                    photos that they can then share with their loved\
                    ones.",
      },
      {
        key: 6,
        title:
          "Pedometer: Keep track of how active your child is.Know your kid&#39;s steps through the Pedometer",
        description:
          "feature on your Smart Phone Watch, and easily set up\
                    goals for them to achieve. Waterproof: Let your\
                    child play in the water without any worries. Touch\
                    Screen: Easily flick through the watch&#39;s\
                    screen.Intuitive touch screen displays allows kids\
                    to quickly and easily navigate through the menu\
                    options.",
      },
      {
        key: 7,
        title:
          "GPS Tracking: Track your child at any time. Anywhere in the world.Using the Leefine app",
        description:
          "You can see your child&#39;s location on a map at\
                    any time, anywhere in the world. Featuring full GPS\
                    Tracking, even if your kid is travelling overseas,\
                    you can still check their location. Safe Zones:\
                    Create Safe Zones to keep your child safe.Make your\
                    home, school and any other places you want into Safe\
                    Zones and know immediately when your child leaves\
                    them. SOS Function: Know if your child is in\
                    distress.In an emergency your child can simply press\
                    an SOS button to let you know they need help, and\
                    the watch automatically calls the emergency contact\
                    setup within the App.",
      },
      {
        key: 8,
        title: "Class Mode: Watch doesn&#39;t disturb class times",
        description:
          "Set up times when watch can&#39;t receive calls to\
                    stop it disturbing school times, or being a\
                    distraction. Alarms: Make sure you child doesn&#39;t\
                    miss anything again.Create and set up alarms, to\
                    easily remind your kids of specific events/duties.\
                    contact setup within the App.",
      },
    ],
  }),
  methods: {
    show() {
      this.$modal.show("my-modal");
    },
    hide() {
      this.$modal.hide("my-modal");
    },
  },
  mount() {},
};
</script>

<style scoped>
.main-section {
  background: rgb(241, 241, 241);
  background: radial-gradient(
    circle,
    rgb(0, 102, 118) 17%,
    rgb(0, 60, 77) 57%,
    rgb(1, 26, 33) 100%
  );
  height: fit-content;
  position: relative;
  max-width: 100vw;
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

.f-card {
  float: right;
  max-width: 80%;
  min-width: 80%;
  background-color: rgba(0, 0, 0, 0.08) !important;
  color: rgb(255, 255, 255) !important;
}

.subtitle-1 {
  color: rgb(223, 223, 223) !important;
  font-family: sans-serif !important;
}

.card-content {
  color: rgb(223, 223, 223) !important;
  font-size: 13px;
  font-weight: 100 !important;
  font-family: Verdana, Geneva, Tahoma, sans-serif !important;
  /* letter-spacing: 1.5px; */
}

.f-card-2 {
  float: left;
  max-width: 80%;
  min-width: 80%;
  background-color: rgba(0, 0, 0, 0.08) !important;
  color: rgb(255, 255, 255) !important;
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 8vw !important;
    margin-bottom: 50px;
  }
  .f-card {
    float: unset;
    margin: auto;
    max-width: 70%;
    min-width: 70%;
  }
  .f-card-2 {
    float: unset;
    margin: auto;
    max-width: 70%;
    min-width: 70%;
  }
  .main-img {
    margin-top: -10vw;
    height: auto;
  }

  .main-img img {
    margin: auto;
    height: auto;
    max-width: 80%;
    display: block;
  }
}
h1 {
  font-size: 4vw;
  line-height: 3vw;
  margin-top: 10vh;
  text-align: center;
  color: rgb(255, 255, 255);
}

.my-modal {
  background-color: rgb(91, 91, 91);
  width: 100%;
  height: 100%;
}

.feature-row {
  padding: 20px;
  color: blanchedalmond;
  font-weight: 200;
  font-size: 12px;
  letter-spacing: 1px;
  margin-left: 10px;
}

.modal-layout {
  margin: 10px;
}

.modal-layout h2 {
  margin: 10px;
  width: 100%;
  padding-left: 50px;
  color: rgb(193, 193, 193);
}

.card-icon-div {
  width: 70px;
  height: 50px;
  position: absolute;
  top: -10px;
  right: -25px;
}
.card-icon-div img {
  width: inherit;
  height: auto;
}
</style>