<script setup>
const route = useRoute();
const { client } = usePrismic();
const { data: blog } = await useAsyncData("blog", () =>
  client.getByUID("blogs", route.params.uid)
);
</script>

<template>
  <div>
    <article class="prose lg:prose-xl">
      <prismic-image
        class="aspect-video object-cover rounded-lg mb-4 max-w-2xl"
        :field="blog.data.thumbnail"
      />
      <prismic-text
        wrapper="h1"
        :field="blog.data.title"
        class="font-semibold text-4xl mb-4"
      />
      <prismic-rich-text :field="blog.data.content" />
    </article>
  </div>
</template>
