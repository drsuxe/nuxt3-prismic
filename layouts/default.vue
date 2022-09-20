<template>
  <div class="max-w-6xl mx-auto px-4">
    <nav class="py-4">
      <ul class="flex gap-4">
        <li>
          <NuxtLink class="px-4 py-1 rounded-full hover:text-indigo-600" to="/">
            Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="px-4 py-1 rounded-full hover:text-indigo-600"
            to="/blogs"
            >Blogs</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="px-4 py-1 rounded-full hover:text-indigo-600"
            to="/Video"
            >Video</NuxtLink
          >
        </li>
      </ul>
    </nav>
    <slot />
  </div>
</template>

<style>
.router-link-exact-active {
  @apply text-indigo-600 bg-indigo-50;
}
</style>
