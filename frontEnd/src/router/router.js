import Home from "@/pages/home.vue";

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
];

export default routes;