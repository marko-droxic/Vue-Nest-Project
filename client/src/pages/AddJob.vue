<template>
  <div class="add-job-form">
    <add-job @save="onSaveJob"/>
  </div>
</template>


<script lang="ts">

import { defineComponent } from 'vue'
import AddJob from '../components/jobs/AddJob.vue'

export default defineComponent({
  components: {
    AddJob
  },
  methods: {
    async onSaveJob() {
      try {
        const { data } = await this.$api.post('/jobs', this.job);
        this.$router.back()
      } catch (e) {
        console.log(e)
      }
    }
  }
})
</script>