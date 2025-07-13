<template>
  <div class="home">
    <header class="home__header">
      <img class="home__logo" src="/logo.svg" alt="Logo do Sistema" />
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
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #42b983 0%, #35495e 100%);
  color: #fff;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4vw 1rem 4vw;
    background: rgba(53, 73, 94, 0.9);
  }

  &__logo {
    height: 48px;
    width: 48px;
    border-radius: 10px;
    background: #fff;
    object-fit: contain;
  }

  &__nav {
    display: flex;
    gap: 1rem;
  }

  &__hero {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem 2rem 2rem 2rem;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      font-weight: bold;
      letter-spacing: 1px;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      max-width: 500px;
      opacity: 0.92;
    }
  }

  &__cta {
    margin-bottom: 2rem;
  }

  &__features {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin: 2rem auto;
    max-width: 900px;

    .feature {
      background: rgba(255, 255, 255, 0.07);
      border-radius: 16px;
      padding: 2rem 1.5rem;
      text-align: center;
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
      transition: transform 0.2s;
      flex: 1;

      &:hover {
        transform: translateY(-6px) scale(1.04);
        background: rgba(255, 255, 255, 0.12);
      }

      i {
        font-size: 2.1rem;
        margin-bottom: 1rem;
        color: #ffd700;
      }

      h3 {
        font-size: 1.2rem;
        margin-bottom: 0.7rem;
        color: #fff;
        font-weight: 700;
      }

      p {
        color: #e0e0e0;
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }

  &__footer {
    text-align: center;
    padding: 1.5rem 0;
    background: rgba(53, 73, 94, 0.95);
    font-size: 1rem;
    opacity: 0.9;
    letter-spacing: 0.5px;
    margin-top: auto;
  }
}

.btn {
  padding: 0.7rem 2rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
  margin-left: 0.5rem;

  &--primary {
    background: #ffd700;
    color: #35495e;

    &:hover {
      background: #ffe066;
    }
  }

  &--secondary {
    background: transparent;
    color: #ffd700;
    border: 2px solid #ffd700;

    &:hover {
      background: #ffd700;
      color: #35495e;
    }
  }

  &--large {
    padding: 1rem 3rem;
    font-size: 1.15rem;
  }
}

@media (max-width: 900px) {
  .home__features {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
  }
  .home__header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

@media (max-width: 600px) {
  .home__hero {
    padding: 2rem 1rem 1rem 1rem;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
  .home__logo {
    height: 38px;
    width: 38px;
  }
}
</style>
