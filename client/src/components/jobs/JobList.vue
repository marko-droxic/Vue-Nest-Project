<template>
  <div>
  <b-table striped hover :items="jobs"  :fields="fields">
    <template v-slot:cell(actions)="{ item }">
      <div>
        <b-btn  @click="editItem(item)">Edit</b-btn>
        <b-btn variant="danger" class="m-1" @click="removeItem(item)">Remove</b-btn>
      </div>
    </template>
  </b-table>
  <b-pagination
      :value="page"
      @change="onPageChange"
      :total-rows="total"
      :per-page="perPage"
      aria-controls="my-table"
  ></b-pagination>
    <b-modal v-model="showRemoveModal"
             @hidden="resetModal"
             @ok="handleRemoveItem">
      Are you sure you want to remove this item?
    </b-modal>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  props: {
      page: Number,
      jobs: Array,
      total: Number
  },
  data() {
    return {
      fields: ["name", "description", "actions"],
      perPage: 5,
      showRemoveModal: false,
      removeIndex: null
    }
  },
  methods: {
    editItem(item: any) {
      const { id } = item;
      this.$router.push({ path: `/job/${id}` })
    },
    removeItem(item: any) {
      const { id } = item;
      this.showRemoveModal = !this.showRemoveModal
      this.removeIndex = id;
    },
    onPageChange(pageNumber: number) {
      this.$emit('pageChange', pageNumber)
    },
    resetModal() {
      console.log('close modal')
    },
    async handleRemoveItem() {
      try {
        const { data } = await this.$api.delete(`/jobs/${this.removeIndex}`);
        this.$emit('refreshList')
      } catch (e) {
        console.log(e)
      }
      console.log('remove')
    }
  }
})
</script>
