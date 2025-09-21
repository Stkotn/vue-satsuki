import { createRouter, createWebHistory } from "vue-router";
import Blog from "@/views/Blog.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  { path: "/", name: "Blog", component: Blog },
  { path: "/about", name: "About", component: About },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
