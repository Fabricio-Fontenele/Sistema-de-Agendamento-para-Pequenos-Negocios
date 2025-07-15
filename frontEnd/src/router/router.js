import Home from "@/pages/home.vue";
import Login from "@/pages/login.vue";
import Register from "@/pages/register.vue";

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
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register", 
    component: Register
  }
];

export default routes;