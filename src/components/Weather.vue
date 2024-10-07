<template>
    <h3>La temperatura actual es: {{weatherStore.temperatura}} º</h3>
</template>

<script setup>
import { useWeather } from '@/composables/useWeather';
import { onMounted } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';

const weatherStore = useWeatherStore();
/*+
La funcion de onMounted se utiliza para llamar fuciones cuando 
un arcivo de vue sea montado o cargado, en este caso es cuando se carge
el archivo Weather.vue
*/
onMounted(()=>{
    useWeather();
})
</script>

<style scoped></style>