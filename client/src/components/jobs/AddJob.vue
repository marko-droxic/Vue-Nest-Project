<template>
  <div class="add-job-form mt-3">
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <b-form @submit.stop.prevent="handleSubmit(onJobSubmit)" @reset="onReset">
        <b-row>
          <BCol cols="6">
            <validation-provider
                name="Name"
                :rules="{ required: true, min: 5, max: 20 }"
                v-slot="validationContext"
            >
              <b-form-group
                  id="input-group-1"
                  label="Name"
                  label-for="input-1"
              >
                <b-form-input
                    id="input-1"
                    v-model="job.name"
                    :state="getValidationState(validationContext)"
                    type="text"
                    placeholder="Enter name"
                    aria-describedby="input-1-live-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="input-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </BCol>
        </b-row>
        <b-row class="mt-2">
          <b-col cols="6">
            <validation-provider
                name="Description"
                :rules="{ required: true, min: 5 }"
                v-slot="validationContext">
              <b-form-group id="input-group-2"  label="Description" label-for="input-description">
                <b-form-textarea
                    id="textarea"
                    v-model="job.description"
                    placeholder="Enter description..."
                    :state="getValidationState(validationContext)"
                    rows="3"
                    max-rows="6"
                    no-resize
                ></b-form-textarea>
                <b-form-invalid-feedback id="input-2-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
        </b-row>
        <div class="mt-4">
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger" class="mx-2">Reset fields</b-button>
          <b-button type="button" variant="secondary" @click.prevent="onCancel">Cancel</b-button>
        </div>
      </b-form>
    </validation-observer>
  </div>
</template>


<script lang="ts">
import type { ValidationObserver } from 'vee-validate'
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
    async onJobSubmit() {
      this.$emit('save', this.job)
    },
    onReset(): void {
      Object.keys(this.job).reduce((acc, curr) => ({...acc, [curr]: ''}), {});
      this.$nextTick(() => {
        (this.$refs?.observer as InstanceType<typeof ValidationObserver>)?.reset();
      });
    },
    onCancel() {
      this.$router.back()
    },
    getValidationState({ dirty = false, validated = false, valid = null }) {
      return dirty || validated ? valid : null;
    }
  }
})
</script>