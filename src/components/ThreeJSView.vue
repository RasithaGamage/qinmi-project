<template>
  <v-layout row wrap id="3dObjectContainer"> </v-layout>
</template>

<script>
import * as THREE from "three-full";

export default {
  name: "ThreeJSView",
  data: function () {
    return {
   scene: undefined, 
   camera: undefined, 
   renderer: undefined
    };
  },
  methods: {
    init: function () {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        40,
        300/550,
        1,
        1000
      );
      this.camera.position.x = 800;
      this.camera.position.y = 100;
      this.camera.position.z = 100;
      let hlight = new THREE.AmbientLight(0x404040, 1);
      this.scene.add(hlight);
      let light4 = new THREE.PointLight(0xc4c4c4, 1);
      light4.position.set(-500, 300, 500);
      this.scene.add(light4);
      this.renderer = new THREE.WebGLRenderer({ antialias: true,alpha: true});
      this.renderer.setSize(300,550);
      this.renderer.setClearColor( 0x000000, 0 );
      let controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
      controls.enableZoom = false;
      controls.update();
      document.getElementById("3dObjectContainer").appendChild(this.renderer.domElement);
      let loader = new THREE.OBJLoader();
      loader.load("./WatchSeries3.obj", this.loaderCallBack);
    },
    animate: function () {
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.animate);
    },
    loaderCallBack: function(obj){
        obj.scale.set(0.5, 0.5, 0.5);
        this.scene.add(obj);
        this.animate();
    }
  },
  mounted: function ()  {
    this.init();
  },
};
</script>

<style scoped>

</style>