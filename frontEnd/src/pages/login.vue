<template>
  <div class="login-hero">
    <div class="login-container">
      <div class="login-logo">
        <img
          class="home__logo"
          src="/logo.svg"
          alt="Logo do Sistema"
          @click="$router.push('/home')"
          style="cursor: pointer"
        />
      </div>
      <h1 class="login-title">
        Bem-vindo ao <span>Sistema de Agendamento</span>
      </h1>
      <form class="login-form" @submit.prevent="login">
        <div class="input-group">
          <label for="email">E-mail</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="seu@email.com"
            required
            autocomplete="username"
          />
        </div>
        <div class="input-group">
          <label for="password">Senha</label>
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            v-model="password"
            placeholder="********"
            required
            autocomplete="current-password"
          />
          <button
            class="show-password-btn"
            type="button"
            @click="showPassword = !showPassword"
          >
            <span v-if="showPassword">🙈</span>
            <span v-else>👁️</span>
          </button>
        </div>
        <button class="login-btn" :disabled="loading">
          <span v-if="loading" class="login-spinner"></span>
          <span v-else>Entrar</span>
        </button>
        <div class="login-links">
          <router-link class="link" to="/recuperar-senha"
            >Esqueci minha senha</router-link
          >
          <router-link class="link" to="/cadastro">Criar conta</router-link>
        </div>
      </form>
      <div class="login-footer">
        <span
          >© {{ new Date().getFullYear() }} — Feito com ❤️ para pequenos
          negócios</span
        >
      </div>
    </div>
    <div class="login-bg-graphics">
      <div class="circle c1"></div>
      <div class="circle c2"></div>
      <div class="circle c3"></div>
      <div class="pattern"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const loading = ref(false);
const router = useRouter();

const login = async () => {
  if (!email.value || !password.value) return;
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    router.push("/dashboard");
  }, 1200);
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/login.scss";
</style>
