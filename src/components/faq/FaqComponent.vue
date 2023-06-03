<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="max-w-2xl lg:mx-auto lg:text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        <p v-if="false" class="mt-4 text-gray-500">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus
          elementum blandit et.
        </p>
      </div>
      <div class="mt-20">
        <dl
          class="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0"
        >
          <div v-for="faq in faqs" :key="faq.id">
            <dt class="font-semibold text-gray-900">{{ faq.question }}</dt>
            <dd class="mt-3 text-gray-500" v-html="faq.answer"></dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
    
        {
          question: ` How do I Identify my Trade-expert after successfully
                    subscribing into a Trade-For-Me Plan?`,
          answer: `    The Contact information of your designated trade-expert
                    automatically comes with the successful subscription
                    notification email.`,
        },
        {
          question: `   Will I be required to share my brokerage account login details`,
          answer: `  <p class="has-text-left" slot="content">
                  Your login Details are confidential!
                  <br />
                  You will not be required at any time to share your login
                  Details wit any Trader.
                </p>`,
        },

        {
          question: "Can i share my brokerage account with someone else?",
          answer: `We have no restrictions about how you use your account as long as you do not go against the terms and conditions.`,
        },
      ],
    };
  },
};
</script>
