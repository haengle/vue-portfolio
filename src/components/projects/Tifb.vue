<script setup>
    import projectVue from '../project.vue';

     const TifbScss = `
        @keyframes fade100 {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

        @keyframes fadein-scale {
            0% { 
                opacity: 0; 
                transform: scale(0.6) translateY(8px); 
                transform-origin: right; 
            }
            100% { opacity: 1; }
        }

        .banner-wrapper {
            opacity: 0;
            position: relative;
            z-index: 400;
            animation: fade100 1.2s ease-in-out 1 forwards;
            > svg {
                opacity: 0;
                position: absolute;
                z-index: 50;
                mix-blend-mode: multiply;
                animation: fade100 1.5s ease-in-out 1s 1 forwards;
                polygon {
                    animation-name: fadein-scale;
                    animation-duration: 250ms;
                    animation-delay: calc(var(--animation-order) * 70ms);
                    animation-fill-mode: both;
                    animation-timing-function: ease-in-out;
                }
            }
        }`;    

    const TifbJs = `
    var polygons = $f('.page-header-img svg polygon, .banner-wrapper > svg polygon').length;
    $f('.page-header-img svg polygon, .banner-wrapper > svg polygon').each(function(i) {
        var random = Math.floor(Math.random() * (polygons - 1) + 1);
        $f(this).attr('style', '--animation-order: '+random);
    `
</script>

<template>

    <projectVue
        title="This is FIRSTBranch"
        summary="'This is FIRSTBranch' is the customer-facing marketing site used to drive sales for Kasasa's website product, FIRSTBranch. As the lead engineer, I worked with internal stakeholders to bring the approved design mockups to life by leveraging custom SVG animations and scroll interaction."
        image="tifb.png"
        imageDesc="This is Firstbranch homepage"
        siteLink="https://www.thisisfirstbranch.com">

        <template #code>
             <h3>SVG Animation</h3>
              <p>To randomly animate the polygons in the SVG, I used javascript to assign a number to a CSS variable, then accessed the variable for the animation-delay property.</p>
              <h4>Sass</h4>
               <pre v-highlightjs="TifbScss"><code class="scss"></code></pre>

               <h4>jQuery</h4>
               <pre v-highlightjs="TifbJs"><code class="javascript"></code></pre>
        </template>
    </projectVue>
    
</template>
