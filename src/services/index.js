import { createRouter, createWebHistory } from "vue-router";
import { reactive } from "vue";
import routes from "./routes";
import sharedState from "./sharedState";

const history = createWebHistory(process.env.BASE_URL);

export const router = createRouter({ history, routes });

export const sharedState = reactive(sharedState);
