<template>
  <section class="job-list">
    <b-button variant="primary" @click="addJob">Add Job </b-button>
    <b-table striped hover :items="items"  :fields="fields">
      <template v-slot:cell(actions)="{ item }">
        <div>
          <b-btn  @click="editItem(item)">Edit</b-btn>
          <b-btn variant="danger" class="m-1" @click="removeItem(item)">Remove</b-btn>
        </div>
      </template>
    </b-table>
    <b-pagination
        v-model="page"
        :total-rows="total"
        :per-page="perPage"
        aria-controls="my-table"
    ></b-pagination>
  </section>
</template>
<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      items: [
        { id: "1", name: 'Dickerson', description: 'Macdonald' },
        { id: "2", name: 'Larsen', description: 'Shaw' },
        { id: "3",name: 'Geneva', description: 'Wilson' },
        { id: "4", name: 'Jami', description: 'Carney' }
      ],
      fields: ["name", "description", "actions"],
      page: 0,
      perPage: 5,
      total: 20
    }
  },
  methods: {
    addJob() {
      this.$router.push({ path: '/add-job' })
    },
    editItem(item: any) {
      const { id } = item;
      this.$router.push({ path: `/job/${id}` })
    },
    removeItem(item: any) {
      const { id } = item;
      console.log('Item', id)
    }
  }
})
</script>
<style>

</style>
