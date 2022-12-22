<template>
  <div class="add-job-form">
    <b-form @submit="onJobSubmit">
      <b-row>
        <b-col cols="12">
            <b-form-group
                id="input-group-1"
                label="Job name"
                label-for="input-1"
            >
              <b-form-input
                  id="input-1"
                  v-model="job.name"
                  type="text"
                  placeholder="Enter name"
                  required
              ></b-form-input>
            </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-group id="input-group-2" label="Job description" label-for="input-2">
            <b-form-textarea
                id="textarea"
                v-model="job.description"
                placeholder="Enter description..."
                rows="3"
                max-rows="6"
                no-resize
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>
      <div class="mt-3">
        <b-button type="submit" variant="primary" size="md">Update</b-button>
        <b-button type="button" variant="secondary" class="ml-1" size="md" @click.prevent="cancelForm">Cancel</b-button>
      </div>
    </b-form>
  </div>
</template>


<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      job: {
        name: '',
        description: '',
      },
    }
  },
  methods: {
    async onJobSubmit(event: Event) {
      event.preventDefault()
      console.log('JOBBB ', this.job)
      const data = await this.$api.get('/hello');
    },
    cancelForm() {
      this.$router.back()
    }
  }
})
</script>