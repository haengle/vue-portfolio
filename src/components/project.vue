<template>
    <div class="project-detail">
        <section class="project-header">
            <h2>{{ props.title }} <span v-if="props.siteLink">
                    <a :href="props.siteLink" target="_blank" rel="noopener" class="site-link">
                    Visit Site 
                    <font-awesome-icon icon="fa-solid fa-external-link-alt" />
                    </a>
                </span>
            </h2>
            <div class="project-summary">
                <p v-html="props.summary"></p>
                <img v-if="props.image" :src="props.image" alt="props.imageDesc" />
                
            </div>
        </section>
       
        <section class="project-code">
           <slot name="code"></slot>
        </section>
    </div>
    
</template>

<script setup>
   const props = defineProps({
        siteLink: String,
        image: String,
        imageDesc: String,
        title: String,
        summary: String
   })
</script>

<style scoped>
    .project-detail {
        @apply p-8 overflow-x-hidden max-w-screen-md m-auto;
    }

    .project-header h2 {
        @apply text-3xl font-semibold mb-4 flex flex-col md:flex-row md:items-center
    }

    .project-summary p {
        @apply mb-8 leading-relaxed
    }

    .site-link {
        @apply inline-block md:ml-4 text-sm rounded-full bg-teal py-2 px-5 bg-opacity-50 hover:bg-opacity-100
    }

    img {
       @apply border-2 border-white drop-shadow-xl;
    }

    .project-code {
        @apply mt-8
    }

</style>