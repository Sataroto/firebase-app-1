<template>
    <div>
        <h1>Register</h1>
        <p>{{ userStore.userMinuscula }}</p>
        <button @click="userStore.registerUser('Gerardo')"> Cambiar Nombre </button>
        <button @click="userStore.registerUser('Sataroto')">Regresar Nombre</button>
    </div>
</template>
<script setup>

import {useUserStore} from '../stores/userStore'

const userStore = useUserStore();

</script>