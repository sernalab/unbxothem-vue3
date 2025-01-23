<template>
  <section class="my-8">
    <div class="container">
      <div class="grid">
        <div
          class="col-12 lg:col-6 flex flex-column align-items-center lg:align-items-start"
        >
          <h1 class="text-center text-6xl lg:text-left lg:text-8xl">
            Be part of the
            <span class="gradient-text">first 10 posts</span>
            delving into the world of adult industry.
          </h1>

          <Button
            label="Participate"
            class="p-button-lg"
            @click="$router.push('/send')"
          />
        </div>

        <div class="col-12 lg:col-6 hidden lg:block">
          <img
            :src="logo"
            alt=""
            class="w-full object-cover"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import logo from "@/assets/img/AW.jpg";

export default {
  name: "Hero",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style>
.gradient-text {
  background: linear-gradient(
    315deg,
    var(--primary-200) 25%,
    var(--secondary-500)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media (min-width: 1024px) {
  .lg\:text-8xl {
    font-size: 6rem;
  }
}
</style>