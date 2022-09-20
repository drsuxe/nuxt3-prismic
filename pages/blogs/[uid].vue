<script setup>
const route = useRoute();
const { client } = usePrismic();
const { data: blog } = await useAsyncData("blog", () =>
  client.getByUID("blogs", route.params.uid)
);
</script>

<template>
  <div>
    {{ blog }}
  </div>
</template>
