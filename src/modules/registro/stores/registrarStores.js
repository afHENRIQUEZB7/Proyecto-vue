import { defineStore } from "pinia";
import { ref } from "vue";

export const useRegistrarStore = defineStore('registrar',() => {
    const nombre = ref('');
    const email = ref('');
    const guardarRegistro = (nombreFormulario, emailFormulario) => {
        //alert("Nombre ingresado: " + nombreFormulario);
        nombre.value = nombreFormulario;
        email.value = emailFormulario;
    }
    return {nombre, email, guardarRegistro}
});