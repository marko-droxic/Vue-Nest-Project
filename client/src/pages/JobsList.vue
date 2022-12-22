<template>
  <section class="job-list">
    <b-button variant="primary" @click="addJob">Add Job </b-button>
    <b-dropdown id="dropdown-1" text="Export Jobs" class="m-md-2">
      <b-dropdown-item @click="exportJobs">Export as CSV</b-dropdown-item>
    </b-dropdown>
    <div class="jobs-table" v-if="items.length">
      <jobs-table :jobs="items" :page="page" :total="total" @pageChange="onPageChange" @refreshList="refreshList"/>
    </div>
    <div v-else>
      <h3>Currently there are not Jobs please create new ones</h3>
    </div>
  </section>
</template>
<script lang="ts">

import JobsTable from '../components/jobs/JobList.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    JobsTable
  },
  data() {
    return {
      items: [],
      total: 0,
      page: 1,
      perPage: 5,
    }
  },
  async mounted () {
    try {
      const { data } = await this.$api.get(`/jobs?page=${this.page}&limit=${this.perPage}`);
      this.total = data.total;
      this.items = data.data;
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    addJob() {
      this.$router.push({ path: '/add-job' })
    },
    async onPageChange(pageNumber: number) {
      // todo combine similar method calls
      this.page = pageNumber;
      try {
        const { data } = await this.$api.get(`/jobs?page=${this.page}&limit=${this.perPage}`);
        this.total = data.total;
        this.items = data.data;
      } catch (e) {
        console.log(e)
      }
    },
    async refreshList() {
      try {
        const { data } = await this.$api.get(`/jobs?page=${this.page}&limit=${this.perPage}`);
        this.total = data.total;
        this.items = data.data;
      } catch (e) {
        console.log(e)
      }
    },
    async exportJobs() {
      try {
        const { data } = await this.$api.get(`/jobs/export`);
        const csvData = 'data:text/csv;charset=utf-8,' + data.join('\n')
        const excel = encodeURI(csvData);
        const link = document.createElement('a');
        link.setAttribute('href', excel); //Links to CSV File
        link.setAttribute('download', 'Jobs.csv'); //Filename that CSV is saved as
        link.click();
      } catch (e) {
        console.log(e)
      }
    },

  }
})
</script>
