<template>
  <div class="add-job-form">
    <add-job @save="onSaveJob"/>
  </div>
</template>


<script lang="ts">

import { defineComponent } from 'vue'
import type  { AxiosError } from 'axios'
import { isAxiosError } from 'axios'
import AddJob from '../components/jobs/AddJob.vue'
import type { Job } from '@/types/types'

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
        if (isAxiosError(e)) {
          const err = e as AxiosError
          const message = err.response?.data?.message[0]
          this.$bvToast.toast(message, {
            title: 'Error',
            variant: 'danger',
            solid: true
          })
        }
      }
    }
  }
})
</script>