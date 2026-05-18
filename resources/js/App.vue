<script setup lang="ts">
import Login from "./domains/authentication/pages/Login.vue";
</script>

<template>
    <h1>Sanctum test</h1>
    <nav>
        <router-link :to="{ name: 'auth.login' }"> Login </router-link>
        <router-link :to="{ name: 'auth.locked' }"> Me </router-link>
    </nav>
    <router-view></router-view>
</template>
