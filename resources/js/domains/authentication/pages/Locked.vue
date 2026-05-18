/** * If the user is logged in this page should show content, if the user is not
logged in this page should show a 401 Unauthorized Error */
<template>
    <h1>Welcome to the Me page</h1>

    {{ me }}
</template>

<script setup lang="ts">
import { fetchUser } from "../store";

const me = fetchUser();
</script>
