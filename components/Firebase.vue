<template lang="">
  <div>
    <h1>Firestore Test</h1>
    <li v-for="(item, index) in data" :key="index">
      {{ item }}
    </li>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from 'firebase/compat/app'

interface Test {
  name: string
}

export default Vue.extend({
  data() {
    return {
      data: [] as Test[],
    }
  },
  mounted: function () {
    firebase
      .firestore()
      .collection('test')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().name}`)
          this.data.push(doc.data().name)
        })
      })
  },
})
</script>
