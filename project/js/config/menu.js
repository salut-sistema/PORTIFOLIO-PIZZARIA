/* ============================================================
   CONFIGURAÇÃO DO CARDÁPIO
   ============================================================ */

window.CONFIG = window.CONFIG || {};

window.CONFIG.menu = {
  categories: [
    {
      id: "tradicionais",
      label: "Tradicionais",
      description: "Os clássicos que nunca saem de moda, feitos como manda a tradição.",
      items: [
        {
          nome: "Marguerita Nero",
          descricao: "Molho de tomate San Marzano, mussarela de búfala, manjericão fresco e azeite trufado.",
          preco: "R$ 62",
          imagem: "assets/products/pizza-tradicional.jpg"
        },
        {
          nome: "Mussarela com Brócolis",
          descricao: "Linguiça calabresa curada na casa, cebola roxa caramelizada e azeitonas pretas.",
          preco: "R$ 58",
          imagem: "assets/hero/hero-pizza.jpg"
        }
      ]
    },
    {
      id: "especiais",
      label: "Especiais",
      description: "Criações autorais do nosso chef, exclusivas do Forno Nero.",
      items: [
        {
          nome: "Aberta Nero",
          descricao: "Pizza fechada no forno a lenha, recheada com carne selecionada e temperos da casa.",
          preco: "R$ 74",
          imagem: "assets/products/pizza-fechada-1.jpg"
        },
        {
          nome: "Aberta Toscana",
          descricao: "Massa dourada e crocante, recheio generoso de carne, cebola e ervas frescas.",
          preco: "R$ 74",
          imagem: "assets/products/pizza-fechada-2.jpg"
        }
      ]
    },
    {
      id: "doces",
      label: "Doces",
      description: "O fecho perfeito para a noite, direto do forno a lenha.",
      items: [
        {
          nome: "Chocolate & Avelã",
          descricao: "Massa fina, chocolate meio-amargo derretido e avelãs tostadas.",
          preco: "R$ 46",
          imagem: "assets/gallery/forno-especiais-1.jpg"
        }
      ]
    },
    {
      id: "bebidas",
      label: "Bebidas",
      description: "Seleção de rótulos para acompanhar cada fatia.",
      items: [
        {
          nome: "Vinho Tinto da Casa",
          descricao: "Taça de vinho tinto selecionado para harmonizar com sabores intensos.",
          preco: "R$ 32",
          imagem: "assets/gallery/forno-especiais-2.jpg"
        }
      ]
    }
  ]
};
