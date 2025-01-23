<template>
  <header class="bg-blue-400 border-bottom-1 surface-border">
    <div class="flex align-items-center">
      <a href="/" class="no-underline">
        <img src="@/assets/img/logo-ut.svg" alt="Logo" height="40" />
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.hover\:text-primary:hover {
  color: var(--primary-color);
}
</style>