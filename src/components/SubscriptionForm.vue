<template>
  <section class="subscription-form flex flex-column align-items-center py-6">
    <div class="form-container w-10">
      <p-inputText
        v-model="firstName"
        placeholder="First Name"
        class="mb-3 w-full"
      />
      <p-inputText
        v-model="email"
        placeholder="Email Address"
        class="mb-3 w-full"
      />
      <p-button label="Subscribe →" class="w-full" @click="submitForm" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      email: "",
    };
  },
  methods: {
    submitForm() {
      if (this.firstName && this.email) {
        alert(`Thanks for subscribing, ${this.firstName}!`);
      } else {
        alert("Please fill out all fields.");
      }
    },
  },
};
</script>

<style>
.subscription-form {
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.form-container {
  padding: 20px;
}
</style>