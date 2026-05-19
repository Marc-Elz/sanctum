<template>
    <div>
        <h2>Login form</h2>
        <Form @submit="handleSubmit" />
        <ErrorMessage />
    </div>
</template>

<script setup lang="ts">
import { authenticate } from "../store";
import Form from "../pages/components/Form.vue";
import { authType } from "../../../services/store/types";
import { useRouter } from "vue-router";
import ErrorMessage from "./components/ErrorMessage.vue";

const router = useRouter();

const handleSubmit = async (data: authType) => {
    await authenticate(data);
    router.push({ name: "auth.locked" });
};
</script>
