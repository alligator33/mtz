<template>
  <div class="py-4">
    <h1 class="text-lg lg:text-2xl text-center py-1">Make an Enquiry</h1>

    <div class="flex min-h-full flex-col justify-center py-2 sm:px-6 lg:px-8">
      <div class="shadow px-10 sm:mx-auto sm:w-full sm:max-w-2xl rounded-lg">
        <template v-if="messageStatus.status">
          <div class="flex justify-center p-10 py-20">
            <div class="flex flex-col items-center">
              <h1
                class="text-2xl text-center"
              >
                {{ messageStatus.message }}
              </h1>
              <br />
              <h3 v-if="messageStatus.sent">
                <i
                  class="text-5xl text-indigo-600 fa-regular fa-circle-check"
                ></i>
              </h3>
              <h3 v-else>
                <i
                  class="text-5xl text-red-600 fa-regular fa-circle-exclamation"
                ></i>
              </h3>

              <div class="flex flex-col md:flex-row gap-10 items-center my-4">
                <router-link
                  class="border-2 p-2 rounded-md border-indigo-500"
                  to="/"
                  >Go Home</router-link
                >
                <button
                  class="bg-indigo-500 rounded-md text-white p-2"
                  @click.prevent="newMessage"
                >
                  New Enquiry
                </button>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="flex justify-center p-10">
            <form @submit.prevent="() => false">
              <div class="space-y-2">
                <FormInput
                  :modelValue="formData.name"
                  type="text"
                  class=""
                  id="name"
                  name="name"
                  placeholder="Your Full name"
                  label="Full name"
                  @update:modelValue="handleInputValue('name', $event)"
                />
                <p
                  v-if="formError.key === 'name'"
                  v-text="formError.error"
                  class="text-red-500 text-sm"
                ></p>

                <div>
                  <label class="">Subject:</label><br />
                  <select
                    class="border-2 border-indigo-100 p-2 rounded-md my-2"
                    v-model="formData.subject"
                  >
                    <option disabled value="none">Please select one</option>
                    <option v-for="subject in subjects" :key="subject">
                      {{ subject }}
                    </option>
                  </select>
                </div>

                <!-- multiple options -->

                <div v-if="formData.subject === 'Request for Trader'">
                  <div>
                    <div class="field">
                      <FormInput
                        :modelValue="formData.traderName"
                        type="text"
                        class=""
                        name="traderName"
                        label="Trader Full name"
                        placeholder="Trader Full name"
                        @update:modelValue="
                          handleInputValue('traderName', $event)
                        "
                      />
                    </div>
                  </div>
                </div>

                <div
                  v-if="formData.subject === 'Report an issue'"
                  class="field"
                >
                  <label class="label has-text-left mb-3"
                    >Do you have an Account?</label
                  >
                  <div class="control">
                    <label class="radio">
                      Yes
                      <input
                        type="radio"
                        id="yes"
                        value="yes"
                        v-model="formData.member"
                        name="member"
                      />

                      <span class="checkmark"></span>
                    </label>
                    <label class="radio">
                      No
                      <input
                        type="radio"
                        id="no"
                        value="no"
                        v-model="formData.member"
                        name="member"
                      />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div v-if="formData.member === 'yes'" class="field">
                  <FormInput
                    :modelValue="formData.username"
                    type="text"
                    class=""
                    label="Your username"
                    placeholder="your username"
                    @update:modelValue="handleInputValue('username', $event)"
                  />
                </div>
                <!-- multiple options -->

                <div>
                  <FormInput
                    :modelValue="formData.mobile"
                    type="text"
                    id="mobile"
                    class=""
                    placeholder="Your phone number"
                    label="Your phone number"
                    @update:modelValue="handleInputValue('mobile', $event)"
                  />
                  <p
                    v-if="formError.key === 'mobile'"
                    v-text="formError.error"
                    class="text-red-500 text-sm"
                  ></p>
                </div>

                <FormInput
                  :modelValue="formData.email"
                  type="email"
                  id="email"
                  class=""
                  placeholder="provide a valid email address"
                  label="Your email"
                  @update:modelValue="handleInputValue('email', $event)"
                />
                <p
                  v-if="formError.key === 'email'"
                  v-text="formError.error"
                  class="text-red-500 text-sm"
                ></p>

                <div>
                  <FormInput
                    :modelValue="formData.message"
                    type="textarea"
                    class="p-1 rounded-md w-full"
                    placeholder="tell us more about your request"
                    label="Message"
                    id="message"
                    @update:modelValue="handleInputValue('message', $event)"
                  />
                </div>
                <p
                  v-if="formError.key === 'message'"
                  v-text="formError.error"
                  class="text-red-500 text-sm"
                ></p>
              </div>

              <!-- multiple choice -->

              <!-- multiple choice -->
              <div class="flex justify-between">
                <button
                  @click="handleReset"
                  class="bg-gray-300 p-2 text-white rounded-md my-10"
                >
                  <span class="px-10 text-gray-900">Reset</span>
                </button>
                <button
                  @click.prevent="handleSubmit"
                  class="bg-indigo-500 p-2 text-white rounded-md my-10"
                >
                  <span class="px-10">Submit</span>
                </button>
              </div>
            </form>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import FormInput from "../../components/form/FormInput.vue";
import $axios from "../../http";

export default {
  name: "ContactFormV3",
  components: {
    FormInput,
  },
  setup() {
    const formError = reactive({
      key: "",
      error: "",
    });

    const messageStatus = reactive({
      status: false,
      message: "",
      sent: null,
    });
    const subjects = [
      "General Enquiry",
      "Report an issue",
      "Arbitrage Trading",
      "Nft Trading",
      "Request for Trader",
    ];
    const formData = reactive({
      name: "",
      email: "",
      mobile: "",
      message: "",
      member: "",
      username: "",
      subject: "General Enquiry",
      traderName: "",
    });

    function handleInputValue(key, value) {
      formData[key] = value;
    }

    async function newMessage() {
      messageStatus.sent = false;

      messageStatus.status = false;
      handleReset();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    async function handleSubmit() {
      window.scrollTo({
        top: 10,
        behavior: "smooth",
      });

      $axios
        .post("/api/mailer", formData)
        .then((res) => {
          console.log("hlll", res);
          messageStatus.status = res.data.status;
          messageStatus.message = res.data.message;
          messageStatus.sent = res.data.sent;
        })
        .catch((err) => {
          const _key = err.response.data.key;
          const _error = err.response.data.error;
          formError.key = _key;
          formError.error = _error;


          if (err.response.data.sent === false) {
            messageStatus.status = true;
            messageStatus.sent = false;
            messageStatus.message = err.response.data.error;
          }

          const el = document.getElementById(`contact-${_key}`);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            el.focus();
          }
          console.log(el);
        });
    }

    function handleReset() {
      formData.name = "";
      formData.email = "";
      formData.mobile = "";
      formData.message = "";
      formData.member = "";
      formData.traderName = "";
    }

    return {
      formData,
      handleInputValue,
      handleSubmit,
      subjects,
      handleReset,
      messageStatus,
      formError,
      newMessage,
    };
  },
};
</script>

<style lang="scss" scoped></style>
