<template>
  <Header />
  <Hero />
  <SubscriptionForm />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import SubscriptionForm from "./components/SubscriptionForm.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Header, Hero, SubscriptionForm, Footer },
};
</script>

<style>
</style>