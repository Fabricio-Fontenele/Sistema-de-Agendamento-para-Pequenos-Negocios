<template>
  <div class="home">
    <header class="home__header">
      <img
        class="home__logo"
        src="/logo.svg"
        alt="Logo do Sistema"
        @click="$router.push('/home')"
        style="cursor: pointer"
      />
      <nav class="home__nav">
        <button @click="$router.push('/login')" class="btn btn--primary">
          Entrar
        </button>
        <button @click="$router.push('/register')" class="btn btn--secondary">
          Cadastrar
        </button>
      </nav>
    </header>

    <section class="home__hero">
      <h1>Sistema de Agendamento para Pequenos Negócios</h1>
      <p>
        Facilite o dia a dia do seu negócio! Gerencie agendamentos, otimize seu
        tempo e ofereça praticidade aos seus clientes.
      </p>
      <div class="home__cta">
        <button
          @click="$router.push('/register')"
          class="btn btn--primary btn--large"
        >
          Comece Agora
        </button>
      </div>
    </section>

    <section class="home__features">
      <div class="feature">
        <i class="fa-solid fa-calendar-check"></i>
        <h3>Agendamento Online</h3>
        <p>Clientes marcam horários sem complicação, direto pelo sistema.</p>
      </div>
      <div class="feature">
        <i class="fa-solid fa-clock"></i>
        <h3>Gestão de Horários</h3>
        <p>Visualize e organize todos os agendamentos em um só lugar.</p>
      </div>
      <div class="feature">
        <i class="fa-solid fa-users"></i>
        <h3>Ideal para Pequenos Negócios</h3>
        <p>Salão, barbearia, clínica, consultório, e muito mais!</p>
      </div>
    </section>

    <footer class="home__footer">
      <p>
        &copy; {{ new Date().getFullYear() }} Sistema de Agendamento | Feito com
        ❤️ por Fabricio Fontenele
      </p>
    </footer>
  </div>
</template>

<script setup>
// Nenhum script adicional necessário aqui
</script>

<style lang="scss" scoped>
@use "@/assets/styles/home.scss"; // Caminho a partir da pasta src. Altere se necessário!
</style>
