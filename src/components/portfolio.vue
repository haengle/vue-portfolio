<script setup>
    import thumbnailVue from './thumbnail.vue';
</script>

<template>
    <section class="portfolio-wrapper grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <thumbnailVue
        link="/butler"
        image="butler.jpg"
        title="Butler University"
        features="Eleventy, Alpine JS, Tailwind, Netlify" />

        <thumbnailVue
        link="/inmo"
        image="inmo.png"
        title="This is INMO+"
        features="CSS, Javascript, Custom SVG Animation, Scroll Interaction" />

     <thumbnailVue
        link="/tifb"
        image="tifb.png"
        title="This is FIRSTBranch"
        features="CSS, Javascript/jQuery, Custom SVG Animation, Scroll Interaction" />

      <thumbnailVue
        link="/thelocal"
        image="local-chart.png"
        title="The LOCAL Credit Union"
        features="CSS, Javascript/jQuery, Custom Bootstrap Product Comparison" />

      <thumbnailVue
        link="/exchange"
        image="exchange.jpg"
        title="Exchange Bank"
        features="CSS, Javascript/jQuery, Custom CSS Animation" />

      <thumbnailVue
        link="/bootstrapcalc"
        image="calc.png"
        title="Bootstrap Calculators"
        features="UX, Bootstrap, Javascript" />

      <thumbnailVue
        link="/jqueryes6"
        image="js-code.png"
        title="jQuery to ES6"
        features="Refactored existing codebase jQuery into vanilla JS" />

      <thumbnailVue
        link="/fnb"
        image="henning.jpg"
        title="First National Bank"
        features="CSS, Javascript/jQuery, Custom Scroll-based Animation" />
      </section>
</template>