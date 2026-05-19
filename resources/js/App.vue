<script setup lang="ts"></script>

<template>
    <h1>Sanctum test</h1>
    <nav>
        <router-link :to="{ name: 'auth.login' }"> Login </router-link>
        <router-link :to="{ name: 'auth.locked' }"> Me </router-link>
    </nav>
    <router-view></router-view>
</template>
