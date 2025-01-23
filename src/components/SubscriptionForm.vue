<template>
  <section class="flex flex-column align-items-center py-6">
    <div class="w-full md:w-6 lg:w-4">
      <div class="flex flex-column gap-3">
        <InputText
          v-model="firstName"
          placeholder="First Name"
          class="p-inputtext-lg"
        />
        <InputText
          v-model="email"
          placeholder="Email Address"
          class="p-inputtext-lg"
        />
        <Button label="Subscribe →" class="p-button-lg" @click="submitForm" />
      </div>
    </div>
  </section>
</template>