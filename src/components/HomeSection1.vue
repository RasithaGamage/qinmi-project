<template>
    <v-container fluid grid-list-sm>
        <v-layout row wrap class="main-section">
            <v-row  class="section-1">
                <v-col cols>
                    <div class="main-img">
                        <img src="../assets/Smart Watch.H01.2k.png">
                    </div>
                </v-col>
                <v-col cols >
                    <div class="main-text">
                        <h1> The future of health is on your wrist.</h1>
                        <div class="feature">
                            <p><font-awesome-icon icon="phone-volume"/>Voice Calling / Video Calling / Messaging</p>
                            <p><font-awesome-icon icon="map-marked-alt"/>GPS Tracking</p>
                            <p><font-awesome-icon icon="camera-retro"/>Camera</p>
                            <p><font-awesome-icon icon="hand-point-down"/>Touch Screen</p>
                            <p><font-awesome-icon icon="swimmer"/>IP67 Waterproof</p>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name:'HomeSection1',
    data:()=>({
    })
}
</script>

<style scoped>

.main-section{
 width: 100vw;
}

.section-1 {
    margin-top: -20px;
    background-image: url("../assets/main-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;

}
.main-img img{
    max-height: 100vh;
    max-width: 100vw;
}
.main-text {
padding: 20px;
 margin: 0;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.main-text h1{
    font-size: 5vw;
    line-height: 5vw;
}
.main-text .feature{
    margin-top:20px;
}

.main-text .feature svg{
    margin-right:20px;
}

</style>