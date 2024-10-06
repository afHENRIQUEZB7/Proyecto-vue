<template>
    <div>
        <Form :validation-schema="schema" @submit="onSubmit">
            <h2>Registro de Formulario</h2>
            <div class="form">
                <label for="nombre">Nombre: </label>
                <Field type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre"/>
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
            <div class="form">
                <label for="correo">Correo: </label>
                <Field type="email" name="email" id="correo" placeholder="Ingrese su email"/>
                <ErrorMessage name="email"></ErrorMessage>
            </div>
            <div class="form">
                <button type="submit">Regitrar</button>
            </div>
        </Form>
    </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationScheme';

const onSubmit = ()=>{
    console.log("Se ha envido correctaente el formulario");
    alert("Se ha envido correctaente el formulario");
}
</script>

<style scoped>
.form{
    margin-bottom: 10px;
}
</style>