<template>
  <div class="add-job-form mt-3">
    <b-form @submit="onJobSubmit" @reset="onReset">
      <b-row>
        <BCol cols="6">
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
        </BCol>
      </b-row>
      <b-row class="mt-2">
        <b-col cols="6">
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
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset fields</b-button>
        <b-button type="button" variant="secondary" @click.prevent="onCancel">Cancel</b-button>
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
      this.$emit('save', this.job)
    },
    onReset(): void {
      Object.keys(this.job).reduce((acc, curr) => ({...acc, [curr]: ''}), {});
    },
    onCancel() {
      this.$router.back()
    }
  }
})
</script>