<template>
  <section class="job-list">
    <b-button @click="addJob">Add Job </b-button>
    <b-table striped hover :items="items"></b-table>
  </section>
</template>
<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  },
  methods: {
    addJob() {
        console.log('ADD job')
      this.$router.push({ path: '/add-job' })
    }
  }
})
</script>
<style>

</style>
