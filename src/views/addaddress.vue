<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      name="exchange"
      required
    ></v-select>

    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

    <v-btn :disabled="!valid" color="success" @click="validate">Validate</v-btn>
  </v-form>
</template>
<script>
import { exchanges, db } from "../components/data.js";
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: []
  }),
  created() {
    exchanges.get().then(dd => {
      dd.forEach(kk => {
        this.items.push(kk.data().name);
      });
    });
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        console.log(this.select);
        let ethadd = db.collection(this.select).doc();
        ethadd.set({ ethaddress: this.name, exchangename: this.select });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>