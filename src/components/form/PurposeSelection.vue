<template>
  <div>
  
  {{ selected }}dd
    <div>
                <label class="">Subject:</label><br />
                <select
                  class="border-2 p-2 rounded-md my-2"
                  v-model="selected"
                >
                  <option disabled value="none">Please select one</option>
                  <option v-for="subject in subjects" :key="subject">
                    {{ subject }}
                  </option>
                </select>
              </div>
  </div>
</template>

<script>
export default {
  name: "PurposeSelection",
  props: {
    subjects: {
      type: Array,
      required: true,
    },
    selectedSubject: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      selected: this.props.selectedSubject,
    };
  },

  
};
</script>

<style lang="scss" scoped></style>
