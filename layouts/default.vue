<template>
  <div class="max-w-7xl mx-auto">
    <nav class="py-4">
      <ul class="flex gap-6">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blogs">Blogs</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/portofolio">Portofolio</NuxtLink>
        </li>
      </ul>
    </nav>
    <slot />
  </div>
</template>
