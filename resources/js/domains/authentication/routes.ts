import Locked from "./pages/Locked.vue";
import Login from "./pages/Login.vue";

export const authRoutes = [
    { path: "/login", component: Login, name: "auth.login" },
    { path: "/me", component: Locked, name: "auth.locked" },
];
