<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />
        Ryong
      </div>

      <v-spacer></v-spacer>

          <router-link class="routes" to="/">Home</router-link>
          <router-link class="routes" to="/dialog">Dialog</router-link>
          <router-link class="routes" to="/calendar">Calendar</router-link>
          <router-link class="routes" to="/progress">Progress</router-link>
          <router-link class="routes" to="/steppers">Steppers</router-link>
          <router-link class="routes" to="/dataiterators">DataIterators</router-link>
          <router-link class="routes" to="/table">Table</router-link>
          <router-link class="routes" to="/virtual">VirtualScroller</router-link>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-spacer></v-spacer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-btn color="success">Success</v-btn>
    <v-btn color="error">Error</v-btn>
    <v-btn color="warning">Warning</v-btn>
    <v-btn color="info">Info</v-btn>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
 
  }),
};
</script>

<style scoped>
.routes {
  color: white;
  padding: 9px;
  text-decoration: none;
  margin: 5px;
}
</style>