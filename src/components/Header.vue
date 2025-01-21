<template>
  <header>
    <p-menubar :model="items">
      <template #start>
        <img src="/logo.png" alt="Logo" height="40" />
      </template>
      <template #end>
        <button class="p-button p-button-outlined p-button-rounded">
          Subscribe
        </button>
      </template>
    </p-menubar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { label: "Bulletproof", command: () => {} },
        { label: "A-to-Z", command: () => {} },
        { label: "Consulting", command: () => {} },
        { label: "Productivity Nexus", command: () => {} },
        { label: "Insights", command: () => {} },
      ],
    };
  },
};
</script>

<style>
header {
  margin-bottom: 20px;
}
</style>