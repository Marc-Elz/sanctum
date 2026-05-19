/** * If the user is logged in this page should show content, if the user is not
logged in this page should show a 401 Unauthorized Error */
<template>
    <h1>Welcome to the Me page</h1>

    {{ me }}

    <!-- <h1 v-if="me.value != null">
        <button @click="logOutUser()">Log out</button>
    </h1> -->
</template>

<script setup lang="ts">
import { fetchUser, logOutUser } from "../store";
import { ref, onMounted } from "vue";

const me = ref(null);

async function fetch() {
    const res = await fetchUser();
    console.log(res);
    me.value = res.status === 200 ? await res.data : null;
}

onMounted(fetch);
</script>
