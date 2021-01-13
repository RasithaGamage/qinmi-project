<template>
  <v-container>
    <v-toolbar flat class="mainHeader">
      <div class="d-flex align-center">
        <v-img
          alt="Qinmi logo"
          class="shrink mr-2"
          contain
          src="../assets/logo.png"
          transition="scale-transition"
          width="120"
        />
      </div>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text><router-link to="/">Products</router-link></v-btn>
        <v-btn text><router-link to="/">Why QINMI</router-link></v-btn>
        <v-btn text><router-link to="/about">Specs</router-link></v-btn>
        <v-btn text><router-link to="/contact">Buy now</router-link></v-btn>
      </v-toolbar-items>
      <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsive-menu">
            <v-list-item>
              <v-list-item-title
                ><router-link to="/">Products</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/">Why QINMI</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/">Specs</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/">Buy now</router-link></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data: () => ({}),
};
</script>

<style scoped>
.nav-button {
  color: rgb(40, 40, 40) !important;
}
.navbar-styles {
  padding-top: 20px;
  padding-left: 20px;
}
.responsive-menu {
  width: 100vw;
}
</style>