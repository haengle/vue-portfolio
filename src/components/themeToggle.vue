<template>
    <button @click="toggleTheme()" class="btn-switch">
        <font-awesome-icon :icon="`fa-solid fa-${themeIcon}`" />
    </button>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const darkTheme = ref(false);
const selectedTheme = ref('light');
const themeIcon = ref('sun');
const useDark = window.matchMedia("(prefers-color-scheme: dark)");
const root = document.documentElement;

function toggleTheme() {
   darkTheme.value = !darkTheme.value;
   if (darkTheme.value) {
        root.classList.add('dark');
        selectedTheme.value = 'dark'
        localStorage.setItem('dark_theme', true);
        themeIcon.value = 'moon';
   } else {
        root.classList.remove('dark');
        selectedTheme.value = 'light'
        localStorage.removeItem('dark_theme');
        themeIcon.value = 'sun';
   }
}

onMounted(() => {
    if (useDark.matches || localStorage.getItem('dark_theme')) {
        selectedTheme.value = 'dark';
        root.classList.add('dark');
        themeIcon.value = 'moon';
    } else {
        selectedTheme.value = 'light';
        root.classList.remove('dark');
        themeIcon.value = 'sun';
    }
})

</script>