<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <v-card color="purple" dark>
          <v-card-title primary class="title">Overall</v-card-title>
          <v-card-text>other things</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card color="indigo" dark>
              <v-card-text>
                <marketwatch/>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex v-for="n in 2" :key="n" d-flex xs12>
                <v-card color="red lighten-2" dark>
                  <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm6 md2 child-flex>
        <v-card color="green lighten-2" dark>
          <tr v-for="exch1 in exch" :key="exch1.name">
            <td>{{exch1.name}}</td>
          </tr>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-card color="blue lighten-2" dark>
          <v-card-text>
            <ul v-for="ch in chat" :key="ch.id">
              <li>{{ch.name}} - {{ch.msg}}</li>
            </ul>
            <v-text-field value="John Doe" v-model="msg" label="Outline"></v-text-field>
            <v-btn block color="secondary" @click="insertchat" dark>Block Button</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import marketwatch from "../components/marketwatch";
import { exchanges, chatbox, currentUser } from "../components/data";
import { auth } from "firebase";

export default {
  data: () => ({
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
    exch: [],
    chat: []
  }),
  created() {
    this.getexchanges();
    this.getchats();
  },
  methods: {
    getexchanges: function() {
      console.log("called getexchanges");
      exchanges.get().then(kk => {
        kk.forEach(dd => {
          this.exch.push(dd.data());
          console.log(dd.data());
        });
      });
    },
    getchats: function() {
      chatbox.get().then(kk => {
        kk.forEach(dd => {
          this.chat.push(dd.id, dd.data());
          console.log("chatbox " + chat);
        });
      });
    },
    insertchat: function() {
      console.log("currentuser " + auth().currentUser.displayName);
      //console.log("this.msg" + this.msg);
      chatbox.add({
        msg: this.msg,
        name: auth().currentUser.displayName
      });
    }
  },
  components: {
    marketwatch
  }
};
</script>
