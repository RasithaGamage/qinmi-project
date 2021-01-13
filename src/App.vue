<template>
  <v-app>

    <Header/>

    <v-main>
      <Home/>
    </v-main>

  <v-footer
    color="blue-grey darken-4"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="blue-grey darken-4 lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>QINMI</strong>
      </v-col>
    </v-row>
  </v-footer> 

  </v-app>
</template>

<script>
import Home from './components/Home';
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    Home,
    Header,
  },
};
</script>

<style scoped>

</style>
