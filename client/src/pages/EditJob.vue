<template>
  <div class="edit-job-form">
    <p>Edit Job</p>
    <edit-job-form :job="job" @update="onJobUpdate"/>
  </div>
</template>


<script lang="ts">

import { defineComponent } from 'vue'
import EditJobForm from '../components/jobs/EditJob.vue'

interface Job {
  id: number
  name: string
  description: string
}

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
    console.log('id', id)
    const { data } = await this.$api.get(`/jobs/${id}`);
    this.job = data;
  },
  methods: {
    async onJobUpdate(jobDto: Job) {
      const { id, name, description } = jobDto;
      const { data } = await this.$api.patch(`/jobs/${id}`, { name, description });
      this.$router.push('/jobs')

    },
  }
})
</script>