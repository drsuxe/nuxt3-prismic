<script setup>
const title = ref("Home");
const description = ref("My App Description");

const { client } = usePrismic();
const { data: home } = await useAsyncData("home", () =>
  client.getSingle("home")
);

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
  <div class="py-16">
    <div class="flex items-center">
      <div class="w-1/2">
        <div class="flex flex-col max-w-lg">
          <prismic-text
            wrapper="h1"
            :field="home.data.headline"
            class="text-6xl font-bold tracking-tight text-gray-900"
          />
          <prismic-text
            wrapper="h3"
            :field="home.data.caption"
            class="text-xl text-gray-500 mt-4"
          />
        </div>
      </div>

      <div class="w-1/2">
        <div class="flex justify-end">
          <prismic-image
            class="h-[300px] w-auto rounded-lg"
            :field="home.data.thumbnail"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
