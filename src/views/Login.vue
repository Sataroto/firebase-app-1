<template>
    <div>
        <h1>Login</h1>
        <p>{{ getMayus }}</p>
    </div>
</template>

<script setup>

import {useUserStore} from '../stores/userStore'
import {computed} from 'vue'

const userStore = useUserStore()

const getMayus = computed(() => userStore.userData.toUpperCase() )

</script>