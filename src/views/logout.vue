<template>
  <div id="example-2">
    <!-- `greet` is the name of a method defined below -->
    <v-btn @click="greet">Greet</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    greet() {
      //console.log(event);
      //alert("dispatch method called");
      this.$store.dispatch("logout");
    },
    greet2() {
      alert("hello world");
    }
  }
};
</script>

