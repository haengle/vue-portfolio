<template>
    <div class="project-card">
        <div class="card-image">
            <a :href="props.link">
               <img :src="props.image" :alt="props.title" class="object-cover"/>
               <span class="absolute top-0 left-0 w-full h-full opacity-0 text-white z-10">
                More Details 
                <font-awesome-icon icon="fa-solid fa-long-arrow-alt-right" />
                </span>
            </a>
        </div>
        <div class="card-body">
            <h3 class="card-title"><a :href="props.link">{{ props.title }}</a></h3>
                <h4 class="card-subtitle">
                    {{ props.features }}
                </h4>
            </div>
    </div>
    
</template>

<script setup>
   const props = defineProps({
        link: String,
        image: String,
        title: String,
        features: String
   })
</script>

<style>
    .project-card {
        @apply relative rounded-md bg-white border-white border border-8 drop-shadow-2xl;
    }
    .card-image {
        @apply relative h-64 rounded-t-md overflow-hidden;
    }
    .card-image a:hover img {
        @apply opacity-75;
    }
    .card-title a {
        @apply border-b border-transparent hover:border-aqua
    }
    .card-body {
        @apply z-10 p-4;
    }

    .dark .project-card {
        @apply bg-darkblue bg-opacity-75 border-darkblue;
    }
    .dark .card-body {
        @apply text-gray-50
    }
    .dark .card-title {
        @apply filter-none
    }
</style>