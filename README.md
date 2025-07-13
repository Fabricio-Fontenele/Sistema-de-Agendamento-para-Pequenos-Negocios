# Sistema de Agendamento Online para Pequenos Negócios

Plataforma web completa para agendamento online, ideal para salões de beleza, barbearias, consultórios, freelancers e pequenos negócios que desejam digitalizar o processo de marcação de horários, melhorar o atendimento e organizar a rotina da equipe.

---

## Funcionalidades

- **Cadastro de negócios e clientes**
- **Painel administrativo** para o negócio (gerenciamento de horários, serviços, profissionais e agendamentos)
- **Agendamento online** com confirmação/cancelamento
- **Lembretes automáticos** por e-mail/SMS
- **Histórico de agendamentos**
- **Perfil do negócio**: horários disponíveis, serviços oferecidos, equipe
- **Responsividade**: funciona em dispositivos móveis e desktop

### Funcionalidades Extra (roadmap)

- Sincronização com Google Calendar/Outlook
- Pagamento online (Stripe/Pix)
- Avaliações e comentários dos clientes
- Exportação de relatórios (CSV/PDF)
- Multiplos prestadores por negócio
- Tema escuro (dark mode)
- Internacionalização (português/inglês)

---

## Tecnologias

- **Frontend:** Vue 3 + Vite
- **Backend:** Node.js + Express + Prisma ORM
- **Banco de Dados:** MySQL
- **Notificações:** SendGrid (e-mail) e Twilio (SMS)
- **Autenticação:** JWT
- **Cloud:** AWS (EC2, RDS, S3)
- **CI/CD:** GitHub Actions
- **Containerização:** Docker + Yarn

---

## Como rodar o projeto

> Pré-requisitos: [Docker](https://www.docker.com/get-started/) e [Docker Compose](https://docs.docker.com/compose/)

Clone o repositório:

```sh
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

Suba toda a stack em containers:

```sh
sudo docker compose up --build
```

Acesse:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:3333](http://localhost:3333)
- MySQL: localhost:3306 (usuário: root, senha: admin)

> O projeto sobe automaticamente os serviços, cria o banco e já está pronto para uso local.

---

## Estrutura de pastas

```
/
├── frontEnd/      # Next.js (yarn)
├── backEnd/       # Node.js/Express/Prisma (yarn)
├── docker-compose.yml
├── README.md
└── ...
```

---

## Contribuição

Pull requests são bem-vindos! Para grandes mudanças, abra uma issue primeiro para discutir o que você gostaria de modificar.

### Recomendações

- Padronize seu ambiente usando sempre **Yarn 1.x** (`yarn install`) – igual ao Docker!
- Mantenha o arquivo `yarn.lock` commitado em todas as pastas de projeto.
- Não esqueça de criar e preencher arquivos `.env` conforme o `.env.example` (se houver).

---

## Licença

[MIT](LICENSE)

---

> Projeto desenvolvido por [Fabricio, Ruan e Francisco] durante as férias de 2025, com o objetivo de aprendizado e portfólio.
