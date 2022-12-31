<template>
  <div class="edit-job-form">
    <p>Edit Job</p>
    <edit-job-form :job="job" @update="onJobUpdate"/>
  </div>
</template>


<script lang="ts">

import { defineComponent } from 'vue'
import EditJobForm from '../components/jobs/EditJob.vue'
import type { Job } from '@/types/types'
import type  { AxiosError } from 'axios'
import { isAxiosError } from 'axios'

export default defineComponent({
  components: {
    EditJobForm
  },
  data() {
    return {
      job: {
        name: '',
        description: ''
      },
    }
  },
  async created () {
    const id = this.$route.params.id;
    const { data } = await this.$api.get(`/jobs/${id}`);
    this.job = data;
  },
  methods: {
    async onJobUpdate(jobDto: Job) {
      const { id, name, description } = jobDto;
      try {
        const { data } = await this.$api.patch(`/jobs/${id}`, { name, description });
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

    },
  }
})
</script>