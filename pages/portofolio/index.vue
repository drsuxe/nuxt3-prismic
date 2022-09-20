<script setup>
const title = ref("Portofolio");
const description = ref("My App Description");

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">Portofolio</h1>
  </div>
</template>
