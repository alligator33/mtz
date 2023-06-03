<template>
  <div>
    <label class=""> {{ label }}: </label><br />
    <template v-if="type === 'textarea'">
      <textarea
        @keyup="updateInputValue"
        :value="modelValue"
        :placeholder="placeholder"
        class="border-2 border-indigo-100 ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 rounded-md p-2 w-[300px] lg:w-[400px]"
        type="textarea"
        :rows="5" :cols="10"
      />
    </template>
    <template v-else>
      <input
        @keyup="updateInputValue"
        class="border-2 border-indigo-100 ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 rounded-md p-2 w-full lg:w-[400px]"
        :value="modelValue"
        :placeholder="placeholder"
        type="text"
        :id="`contact-${id}`"
       
       
      />
    </template>
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    label: {
      type: String,
      required: true,
    },

    id: {
      type: String,
     
    },

    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: "enter a value here",
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateInputValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },


   
  },
};
</script>

<style lang="scss" scoped></style>
