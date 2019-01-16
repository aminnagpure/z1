<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Zetamales</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu bottom left>
        <v-btn slot="activator">
          <v-icon>more_vert</v-icon>
        </v-btn>

        <v-list>
          <div v-if="this.$store.state.loggedIn">
            {{this.$store.loggedIn}}
            <v-list-tile v-for="(item, i) in itemslogged" :key="i" @click="alert(item.url)">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </div>
          <div v-else>
            <v-list-tile v-for="(item, i) in itemsnologged" :key="i" @click="alert(item.url)">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile>
          </div>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content>
      <router-view :key="$route.fullpath"/>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  data: () => ({
    itemslogged: [
      { title: "Home", url: "/" },
      { title: "About us", url: "about" },
      { title: "Logout", url: "logout" },
      { title: "Exchange", url: "addexchange" }
    ],
    itemsnologged: [
      { title: "Home", url: "/" },
      { title: "About us", url: "about" },
      { title: "Login", url: "login" },
      { title: "Exchange", url: "addexchangee" }
    ]
  }),
  methods: {
    alert(e) {
      this.$router.replace(e);
    }
  }
};
</script>
