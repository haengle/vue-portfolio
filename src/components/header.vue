<template>
   <header class="flex flex-col md:flex-row p-4 md:p-8 justify-between">
      <div class="intro order-last md:order-first flex flex-col lg:flex-row lg:items-center lg:gap-4">
       <h1><a href="/">Heather Engle</a></h1>
        <h2>Pixel-perfect Front End Engineer</h2>
       </div>
      <div class="contact -mt-4 mb-4 md:mb-0 md:-mt-8 md:-mr-8">
        <themeToggleVue />
          <a href="mailto:h.a.engle@gmail.com" title="Email me">
            <font-awesome-icon icon="fa-solid fa-envelope" />
          </a>
          <a href="HeatherEngleResume.pdf" title="View my resume" rel="noopener" target="_blank">
            <font-awesome-icon icon="fa-solid fa-file-pdf" />
          </a>
          <a href="https://www.linkedin.com/in/heatherengle" rel="noopener" target="_blank" title="Find me on LinkedIn">
            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
          </a>
          <a href="https://www.instagram.com/heatherengle" rel="noopener" target="_blank" title="Follow me on Instagram">
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </a>
          <a href="https://www.github.com/haengle" rel="noopener" target="_blank" title="Find me on github">
            <font-awesome-icon icon="fa-brands fa-github" />
          </a>
          <a href="https://keen-melba-f0a407.netlify.app/" rel="noopener" target="_blank" title="Meet my cats">
            <font-awesome-icon icon="fa-solid fa-cat" />
          </a>
      </div>
    </header>
</template>

<style scoped>
header {
  @apply bg-gray-100;
}

.dark header {
  @apply bg-darkblue
}

h1 {
  text-shadow: 3px 3px 0 theme("colors.aqua");
  @apply text-darkblue text-5xl font-display tracking-widest;
}

h1 a {
  @apply border-b-2 border-transparent hover:border-aqua;
}

.dark h1 {
  @apply text-aqua text-opacity-75;
  text-shadow: none;
}

h2 {
  @apply text-[1.05rem] opacity-75 mt-5 font-semibold uppercase;
}

.contact a,
.btn-switch {
  @apply p-2 text-darkblue text-2xl 
  inline-block bg-white mx-1 shadow-inner
  hover:bg-teal hover:shadow-sm
}

.dark .contact a,
.dark .btn-switch {
  @apply text-white bg-midblue hover:text-aqua
}

.contact svg,
.btn-switch svg {
  @apply fill-darkblue;
  filter: drop-shadow(1px 1px 0 theme("colors.aqua"));
}

.dark .contact svg,
.dark .btn-switch svg {
  @apply fill-white filter-none;
}
</style>

<script setup>
import themeToggleVue from './themeToggle.vue';
</script>