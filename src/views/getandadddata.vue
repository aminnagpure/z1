<template>
  <div>sdfsdf</div>
</template>

<script>
import { exchanges, db } from "../components/data.js";
import axios from "axios";

export default {
  created() {
    //select exchanges first
    exchanges.get().then(jj => {
      jj.forEach(dd => {
        let exname = dd.data().name;
        console.log(exname);

        db.collection(exname)
          .get()
          .then(docref => {
            docref.forEach(eachdoc => {
              console.log(eachdoc.data().ethaddress);
              ///now add these ethaddress
            });
          });
      });
    });
  }
};
</script>
