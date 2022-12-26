<template>
  <div class="add-job-form">
    <add-job @save="onSaveJob"/>
  </div>
</template>


<script lang="ts">

import { defineComponent } from 'vue'
import AddJob from '../components/jobs/AddJob.vue'
import type { Job } from '../types/types'

export default defineComponent({
  components: {
    AddJob
  },
  methods: {
    async onSaveJob(job: Job) {
      try {
        const { data } = await this.$api.post('/jobs', job);
        this.$router.push('/jobs')
      } catch (e) {
        console.log(e)
      }
    }
  }
})
</script>