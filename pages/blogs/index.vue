<script setup>
const title = ref("Blogs");
const description = ref("My App Description");

const { client } = usePrismic();
const { data: blogs } = await useAsyncData("blogs", () =>
  client.getAllByType("blogs")
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
  <div class="pt-8">
    <div class="grid grid-cols-3 gap-4">
      <div
        class="border rounded-lg bg-white"
        v-for="blog in blogs"
        :key="blog.id"
      >
        <prismic-image
          class="aspect-square object-cover rounded-t-lg"
          :field="blog.data.thumbnail"
        />
        <div class="p-4">
          <prismic-text
            wrapper="h1"
            :field="blog.data.title"
            class="font-semibold text-lg"
          />
          <div class="mt-4">
            <RouterLink
              :to="`/blogs/${blog.uid}`"
              class="bg-indigo-500 mt-4 px-4 py-1 text-sm rounded-full text-white"
            >
              Read more
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
