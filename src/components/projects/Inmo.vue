<script setup>
    import projectVue from '../project.vue';

    const InmoJs = `
    // only trigger JS animations for users without prefers reduced motion
    var notReduceMotion = window.matchMedia('(prefers-reduced-motion: no-preference)');
    if (!notReduceMotion || notReduceMotion.matches) {
        startAnimations();
    }

    function startAnimations() {
        var controller = new ScrollMagic.Controller();

        var growFlare = '.grow-flare g, .save-flare g';
   
        // check elements
        var check = document.querySelector(growFlare);
        if (check) {
             gsap.to(growFlare, {
                duration: 2, 
                scale: 1.05,
                y: -100,
                opacity: .83,
                stagger: .3,
                ease: "elastic"
            });
        }
       
    
        var iconSections = document.querySelectorAll('.content-section');
        if (iconSections) {
            [...iconSections].forEach(sect => {
                new ScrollMagic.Scene({
                    triggerElement: sect,
                    offset: 50,
                    triggerHook: 0.9,
                    reverse: false,
                }).setClassToggle(sect, 'reveal').addTo(controller);
            })
        }

        //homepage
        var bannerLeft = document.querySelectorAll('#home-banner-left path');
        var bannerRight = document.querySelectorAll('#home-banner-right path');


        gsap.to('.staticBanner .content h1, .staticBanner .content p', {
            duration: 2,
            scale: 1,
            opacity: 1,
            ease: "elastic"
        });

        gsap.to('.staticBanner img', {
            duration: 1,
            scale: 1,
            opacity: 1
        })


        if (bannerLeft) {
            gsap.to(bannerLeft, {
                duration: 1,
                scale: 1,
                opacity: .83,
                stagger: .1
            })
        }
        if (bannerRight) {
            gsap.to(bannerRight, {
                delay: 1,
                duration: 1,
                scale: 1,
                opacity: .83,
                stagger: .1
            })
        }
        var homecontroller = new ScrollMagic.Controller();

        var homeSections = document.querySelectorAll('#homePage main .row');
  
        if (homeSections) {
            [...homeSections].forEach(sect => {
                new ScrollMagic.Scene({
                    triggerElement: sect,
                    offset: 50,
                    triggerHook: 0.9,
                    reverse: false,
                }).setClassToggle(sect, 'reveal').addTo(homecontroller);
            });        
        }

        var pathSections = document.querySelectorAll('.path-section');
        if (pathSections) {
            [...pathSections].forEach(path => {
                new ScrollMagic.Scene({
                    triggerElement: path,
                    offset: 50,
                    triggerHook: 0.9,
                })
                .setClassToggle(path, "visible") // add class toggle
                .addTo(homecontroller);
            })
        }

        var drawPath = document.querySelector('#home-path-line');
        if (drawPath) {
            var drawPathLength = drawPath.getTotalLength();
            drawPath.style.strokeDasharray = drawPathLength + ' ' + drawPathLength;
            drawPath.style.strokeDashoffset = drawPathLength;

            
            new ScrollMagic.Scene({
                triggerElement: '#home-path',
                offset: 50,
                triggerHook: 0.9,
            })
            .setClassToggle("#home-path-line", "visible") // add class toggle
            .addTo(homecontroller);
        }
        
    }
    `
</script>

<template>

    <projectVue
        title="This is INMO+"
        summary="'This is INMO+' is the client-facing marketing site used to drive sales for Kasasa's online account opening product, INMO+. As the lead engineer, I worked with internal stakeholders to bring the approved design mockups to life. I worked closely with the lead designer to build custom SVG animations with GSAP and ScrollMagic."
        image="inmo.png"
        imageDesc="This is INMO+ homepage"
        siteLink="https://www.thisisinmoplus.com">

        <template #code>
             <h3>SVG Animation</h3>
            
               <h4>Javascript</h4>
               <pre v-highlightjs="InmoJs"><code class="javascript"></code></pre>
        </template>
    </projectVue>
    
</template>
