import Link from "next/link";

const membros = [
  { nome: "Fabricio", cargo: "Full Stack", img: "/avatar-fabricio.png" },
  { nome: "Ruan", cargo: "Backend", img: "/avatar-ruan.png" },
  { nome: "Francisco", cargo: "Frontend", img: "/avatar-francisco.png" },
];

const funcionalidades = [
  {
    title: "Agendamento Online",
    desc: "Clientes marcam e gerenciam horários 24/7 pelo site, com confirmação e cancelamento fácil.",
    icon: "🗓️",
  },
  {
    title: "Painel Administrativo",
    desc: "Tenha controle total de horários, serviços, equipe, agenda e clientes em um só lugar.",
    icon: "📊",
  },
  {
    title: "Lembretes Automáticos",
    desc: "Envio de e-mail e SMS para lembrar clientes dos agendamentos, reduzindo faltas.",
    icon: "🔔",
  },
  {
    title: "Customização do Perfil",
    desc: "Personalize horários, serviços, fotos e equipe. Sua identidade, seu jeito.",
    icon: "🎨",
  },
  {
    title: "Relatórios & Histórico",
    desc: "Visualize agendamentos passados, exporte relatórios e acompanhe o crescimento.",
    icon: "📈",
  },
  {
    title: "Acesso Mobile",
    desc: "Funciona perfeitamente em qualquer dispositivo. Seu negócio na palma da mão.",
    icon: "📱",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-900 via-purple-900 to-sky-900 text-zinc-100">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center py-24 px-4 text-center relative overflow-hidden select-none">
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Glow balls background */}
          <div className="absolute left-[-10%] top-[-10%] w-80 h-80 rounded-full bg-gradient-to-br from-purple-700/30 via-indigo-400/15 to-sky-400/15 blur-3xl animate-pulse" />
          <div className="absolute right-[-10%] bottom-[-10%] w-80 h-80 rounded-full bg-gradient-to-tr from-blue-400/30 via-purple-400/10 to-pink-400/10 blur-3xl animate-pulse delay-300" />
        </div>
        <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-purple-300 to-pink-400 drop-shadow-2xl animate-fade-in">
          Organize seu negócio.<br className="hidden md:inline" />
          <span className="bg-gradient-to-r from-pink-500 to-sky-400 bg-clip-text text-transparent">Encante seus clientes.</span>
        </h1>
        <p className="relative z-10 text-lg md:text-xl mt-7 mb-10 max-w-2xl mx-auto text-zinc-200/80 animate-fade-in-slow">
          Plataforma de agendamento online para salões, barbearias, consultórios, freelancers e pequenos negócios.<br />
          Digitalize processos, simplifique a rotina e ofereça uma experiência premium!
        </p>
        <div className="relative z-10 flex flex-col md:flex-row gap-4">
          <Link href="/login" className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 via-sky-500 to-pink-500 shadow-xl text-white font-bold hover:brightness-110 hover:-translate-y-1 hover:shadow-2xl transition-all duration-200">
            Entrar
          </Link>
          <a
            href="#funcionalidades"
            className="px-8 py-3 rounded-full bg-white/10 text-sky-200 font-semibold border-2 border-sky-400 hover:bg-sky-900/80 hover:text-white hover:shadow-lg transition-all duration-200"
          >
            Ver funcionalidades
          </a>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section id="funcionalidades" className="py-20 px-4 bg-gradient-to-t from-zinc-900/70 to-transparent backdrop-blur-sm">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-300 mb-12 drop-shadow">Funcionalidades principais</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {funcionalidades.map(({ title, desc, icon }) => (
            <div
              key={title}
              className="relative bg-white/10 border border-zinc-700 rounded-2xl shadow-xl p-7 flex flex-col items-center hover:scale-[1.04] hover:shadow-2xl transition-all duration-200 backdrop-blur-md group"
            >
              <span className="text-5xl mb-3 drop-shadow-lg group-hover:scale-110 transition">{icon}</span>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-sky-200 to-pink-200 bg-clip-text text-transparent">{title}</h3>
              <p className="text-zinc-200/80 text-center">{desc}</p>
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br from-sky-500/30 to-pink-500/10 blur-xl opacity-70 group-hover:opacity-100 transition pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* TIME */}
      <section className="py-20 px-4 bg-gradient-to-r from-sky-900/60 via-zinc-950 to-purple-950/60">
        <h2 className="text-3xl font-bold text-center text-pink-300 mb-12">Quem faz acontecer</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {membros.map((membro) => (
            <div
              key={membro.nome}
              className="flex flex-col items-center bg-white/10 border border-zinc-700 rounded-2xl p-7 shadow-xl w-60 hover:scale-105 hover:shadow-2xl transition-all duration-200 backdrop-blur-sm"
            >
              <div className="mb-3">
                <img
                  src={membro.img}
                  alt={membro.nome}
                  className="w-20 h-20 rounded-full border-4 border-sky-500 shadow-lg object-cover bg-zinc-200/30"
                  style={{ boxShadow: "0 2px 24px 0 #0ea5e9" }}
                />
              </div>
              <span className="font-bold text-lg text-sky-200">{membro.nome}</span>
              <span className="text-pink-200 text-sm">{membro.cargo}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center bg-gradient-to-t from-pink-900/50 to-transparent">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-sky-100 drop-shadow">Pronto para transformar o seu negócio?</h2>
        <p className="mb-7 text-zinc-200/80">Experimente grátis, organize sua agenda e encante seus clientes.</p>
        <Link
          href="/login"
          className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-600 via-sky-500 to-purple-700 text-white font-semibold shadow-2xl hover:scale-105 hover:brightness-110 transition-all duration-200 text-lg"
        >
          Comece agora
        </Link>
      </section>
      <footer className="text-center py-7 text-zinc-400 text-sm bg-transparent tracking-wider">
        &copy; {new Date().getFullYear()} Sistema de Agendamento Online — Feito por <span className="text-sky-300 font-semibold">Fabricio</span>, <span className="text-pink-300 font-semibold">Ruan</span> e <span className="text-purple-300 font-semibold">Francisco</span> 🚀
      </footer>
    </main>
  );
}