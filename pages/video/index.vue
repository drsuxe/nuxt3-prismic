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
    <h1 class="text-2xl font-bold py-4">Video</h1>

    <video class="aspect-video border rounded-lg" controls autoplay>
      <source
        src="https://prismic-io.s3.amazonaws.com/nuxt3-experimental/cd27eba8-00ee-4179-a140-52fd82a16897_videoplayback.mp4"
        type="video/mp4"
      />
      Your browser does not support HTML video.
    </video>
  </div>
</template>
