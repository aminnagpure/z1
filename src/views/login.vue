
<template>
  <div v-if="!loggedIn" id="e3" style="max-width: 400px; margin: auto;" class="grey lighten-3">
    <button @click="socialLogin" class="social-button">
      <img alt="Google Logo" src="../assets/google-logo.png">
    </button>
  </div>
</template>
<script>
import { auth, provider } from "../components/data";

export default {
  name: "login",
  methods: {
    socialLogin() {
      auth
        .signInWithPopup(provider)
        .then(result => {
          this.$store.dispatch("setUser", result.user);
        })
        .then(() => {
          this.$router.replace("dashboard");
        })
        .catch(err => {
          alert("Oops. " + err.message);
        });
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    }
  }
};
</script>
