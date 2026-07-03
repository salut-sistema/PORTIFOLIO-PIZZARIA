/* ============================================================
   CONFIGURAÇÃO DA EMPRESA
   Para reutilizar este site em outro negócio, basta editar
   este arquivo. Nenhum componente deve conter esses dados
   escritos diretamente.
   ============================================================ */

window.CONFIG = window.CONFIG || {};

window.CONFIG.company = {
  name: "Forno Nero",
  tagline: "Pizzaria Premium",
  logoText: "FORNO",
  logoAccent: "NERO",
  description:
    "Pizzas artesanais assadas em forno a lenha, com ingredientes selecionados e o fogo como protagonista de cada receita.",
  heroTitle: "O fogo que transforma\nsimplicidade em arte.",
  heroSubtitle:
    "Massa de fermentação lenta, forno a lenha a 400°C e ingredientes escolhidos a dedo. Uma experiência de pizzaria premium, do primeiro cheiro ao último pedaço.",

  phone: "+55 11 95917-5925",
  whatsapp: "5511959175925", // placeholder — substitua pelo número real da pizzaria
  email: "contato@fornonero.com.br",

  address: {
    street: "Rua das Brasas, 128 — Jardins",
    city: "São Paulo, SP",
    mapsUrl: "https://maps.google.com/?q=Rua+das+Brasas+128+Jardins+Sao+Paulo"
  },

  hours: [
    { dias: "Terça a Sexta", horario: "18h00 — 23h30" },
    { dias: "Sábado e Domingo", horario: "12h00 — 00h00" },
    { dias: "Segunda", horario: "Fechado" }
  ],

  seo: {
    title: "Forno Nero — Pizzaria Premium",
    description:
      "Pizzaria premium com forno a lenha, ingredientes selecionados e experiência gastronômica cinematográfica.",
    favicon: "assets/backgrounds/favicon.png"
  },

  theme: "dark-ember" // referência ao tema ativo em theme.js
};
