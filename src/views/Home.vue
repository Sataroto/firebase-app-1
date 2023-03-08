<template>
    <div>
        <h1>Bienvenido: {{ userStore.userData }}</h1>
    </div>
</template>

<script setup>
import {useUserStore} from '../stores/userStore'

const userStore = useUserStore();

</script>