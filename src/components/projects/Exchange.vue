<script setup>
    import projectVue from '../project.vue';

    const ExchangeScss = `
    .bg {
        width: 50vw;
        background-size: cover;
        background-position: center top;
        transition: opacity .25s;
        &.fp-1 { z-index: 4; opacity: 1; }
        &.fp-2 { z-index: 3; opacity: 0; }
        &.fp-3 { z-index: 2; opacity: 0; }
        &.fp-4 { z-index: 1; opacity: 0; }
    }
    
    .fp {
        z-index: 5;
        .icon {
            background: $darkBlue;
            transition: background-color .25s;
        }
    
        &:hover {
            h3 a { color: $tan; }
            .icon { background-color: $tan; }
            + .bg { z-index: 4; opacity: 1; }
        }
    }`;

</script>

<template>

    <projectVue
        title="Exchange Bank"
        summary="This custom promotional area displays a different image when each feature is interacted with, I created a CSS-only solution for the transitions while keeping the area client-editable in the CMS."
        image="exchange.jpg"
        imageDesc="Exchange bank homepage"
        siteLink="https://www.myexchangebank.com">

        <template #code>
             
              <h4>Sass</h4>
               <pre v-highlightjs="ExchangeScss"><code class="scss"></code></pre>

        </template>
    </projectVue>
    
</template>
