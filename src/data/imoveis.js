/**
 * Configuração Geral e Base de Dados dos Imóveis - Paúba Vibes
 * 
 * Para editar, adicionar ou remover imóveis, basta alterar esta estrutura.
 * O layout se adapta automaticamente a qualquer alteração feita aqui.
 */

export const CONFIG_GERAL = {
  nome_site: "Paúba Vibes",
  slogan: "Seu refúgio de praia em Paúba • São Sebastião - SP",
  descricao_seo: "Casas completas e aconchegantes para locação por temporada na paradisíaca praia de Paúba. A poucos passos do mar, conforto, deck, pergolado e natureza.",
  whatsapp_padrao: "5511995231996",
  whatsapp_formatado: "(11) 99523-1996",
  instagram: "@paubavibes",
  localizacao_geral: "Praia de Paúba, São Sebastião - SP",
  preco_padrao_sufixo: "/diária",
};

export const IMOVEIS = [
  {
    id: "casa-91",
    nome: "Casa 91",
    titulo: "Casa 91 • Charme Praiano & Amplo Espaço Integrado",
    subtitulo: "Decoração elegante, sala ampla com mesa de jantar posta e atmosfera acolhedora",
    preco: "A partir de R$ 400",
    preco_detalhe: "por diária",
    capacidade_hospedes: 8,
    quartos: 3,
    banheiros: 2,
    distancia_praia: "300m da praia (5 min a pé)",
    pet_friendly: true,
    tags: ["Destaque", "Espaçosa", "Família & Amigos"],
    descricao: "A Casa 91 une sofisticação e o clima descontraído do litoral norte. Com ambientes integrados, sala de estar ampla e arejada, mesa de jantar de vidro com pendentes em fibra natural e decoração temática marinha, é perfeita para famílias ou grupos de amigos que buscam conforto, requinte e tranquilidade.",
    comodidades: [
      { icone: "wifi", nome: "Wi-Fi Alta Velocidade" },
      { icone: "wind", nome: "Ar-Condicionado nos Quartos" },
      { icone: "tv", nome: "Smart TV na Sala" },
      { icone: "utensils", nome: "Cozinha Completa Equipada" },
      { icone: "car", nome: "Garagem Privativa" },
      { icone: "paw", nome: "Aceita Pet (sob consulta)" },
      { icone: "sun", nome: "Ventiladores de Teto" },
      { icone: "shield-check", nome: "Condomínio Seguro" }
    ],
    fotos: [
      {
        url: "/images/casas/casa-91-sala.jpg",
        titulo: "Sala de estar ampla e integrada com luz natural",
        categoria: "Sala"
      },
      {
        url: "/images/casas/casa-91-jantar.jpg",
        titulo: "Sala de jantar refinada com mesa de vidro e luminárias rústicas",
        categoria: "Jantar"
      },
      {
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        titulo: "Suíte Master aconchegante com cama queen",
        categoria: "Quarto"
      },
      {
        url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
        titulo: "Cozinha moderna com eletrodomésticos completos",
        categoria: "Cozinha"
      },
      {
        url: "https://images.unsplash.com/photo-1540518614846-7ede433c4efc?auto=format&fit=crop&w=1200&q=80",
        titulo: "Segundo dormitório climatizado com camas de solteiro",
        categoria: "Quarto"
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
        titulo: "Banheiro moderno com acabamento em granito",
        categoria: "Banheiro"
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        titulo: "Fachada e área externa ensolarada",
        categoria: "Exterior"
      },
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        titulo: "Praia de Paúba a poucos minutos de caminhada",
        categoria: "Praia"
      },
      {
        url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
        titulo: "Pôr do sol inesquecível na praia",
        categoria: "Praia"
      },
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        titulo: "Tranquilidade e natureza ao redor",
        categoria: "Natureza"
      }
    ],
    // Número específico (se vazio, usa CONFIG_GERAL.whatsapp_padrao)
    numero_whatsapp: "",
    mensagem_whatsapp: "Olá! Vi a *Casa 91* no site Paúba Vibes e gostaria de consultar a disponibilidade e valores para reserva."
  },
  {
    id: "casa-81",
    nome: "Casa 81",
    titulo: "Casa 81 • Varanda Gourmet com Deck & Pergolado Rústico",
    subtitulo: "Espaço ao ar livre exuberante com rede, área gourmet integrada e cerca em bambu",
    preco: "A partir de R$ 400",
    preco_detalhe: "por diária",
    capacidade_hospedes: 6,
    quartos: 2,
    banheiros: 2,
    distancia_praia: "250m da praia (4 min a pé)",
    pet_friendly: true,
    tags: ["Mais Procurada", "Área Gourmet", "Deck & Rede"],
    descricao: "A Casa 81 é o refúgio perfeito para quem ama relaxar ao ar livre. Possui um charmoso deck de madeira com pergolado e rede de descanso suspensa, além de uma área gourmet equipada com bancada de madeira, cercamento em bambu que garante total privacidade e contato com a mata verde de Paúba.",
    comodidades: [
      { icone: "sparkles", nome: "Deck de Madeira com Pergolado" },
      { icone: "coffee", nome: "Rede de Descanso Suspensa" },
      { icone: "flame", nome: "Área Gourmet com Bancada" },
      { icone: "wifi", nome: "Wi-Fi Fibra Óptica" },
      { icone: "wind", nome: "Ar-Condicionado Quente/Frio" },
      { icone: "tv", nome: "Smart TV Streaming" },
      { icone: "utensils", nome: "Cozinha Completa" },
      { icone: "paw", nome: "Pet Friendly" }
    ],
    fotos: [
      {
        url: "/images/casas/casa-81-deck.jpg",
        titulo: "Deck de madeira coberto por pergolado com rede aconchegante",
        categoria: "Deck"
      },
      {
        url: "/images/casas/casa-81-jardim.jpg",
        titulo: "Área gourmet externa com cerca em bambu e paisagismo tropical",
        categoria: "Gourmet"
      },
      {
        url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
        titulo: "Sala de estar acolhedora e integrada",
        categoria: "Sala"
      },
      {
        url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
        titulo: "Quarto principal com vista verde e cama king",
        categoria: "Quarto"
      },
      {
        url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
        titulo: "Cozinha prática para preparar refeições pós-praia",
        categoria: "Cozinha"
      },
      {
        url: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
        titulo: "Quarto secundário confortável para família",
        categoria: "Quarto"
      },
      {
        url: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
        titulo: "Banheiro espaçoso e higienizado",
        categoria: "Banheiro"
      },
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        titulo: "Areias claras da praia de Paúba",
        categoria: "Praia"
      },
      {
        url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
        titulo: "Ondas e mar calmo para banho",
        categoria: "Praia"
      },
      {
        url: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1200&q=80",
        titulo: "Natureza preservada e pôr do sol em Paúba",
        categoria: "Natureza"
      }
    ],
    numero_whatsapp: "",
    mensagem_whatsapp: "Olá! Vi a *Casa 81* no site Paúba Vibes e gostaria de consultar a disponibilidade e valores para reserva."
  }
];

export const FAQ_ITENS = [
  {
    pergunta: "Como funciona o processo de reserva?",
    resposta: "É simples e direto! Você escolhe a casa de sua preferência no site, clica no botão de WhatsApp e fala diretamente conosco. Passamos todas as informações de disponibilidade, tiramos dúvidas e combinamos a reserva com total segurança."
  },
  {
    pergunta: "Quais são os horários de check-in e check-out?",
    resposta: "Geralmente o check-in ocorre a partir das 14h e o check-out até as 12h. Horários flexíveis podem ser combinados previamente via WhatsApp dependendo da disponibilidade."
  },
  {
    pergunta: "As casas aceitam animais de estimação (Pet Friendly)?",
    resposta: "Sim! Aceitamos pets de pequeno e médio porte em nossas unidades sob consulta prévia. Basta nos informar a raça e porte do seu pet no momento do contato."
  },
  {
    pergunta: "As casas possuem roupas de cama e banho?",
    resposta: "Fornecemos travesseiros e protetores de colchão higienizados. Roupas de cama e toalhas podem ser trazidas pelos hóspedes ou solicitadas como serviço adicional."
  },
  {
    pergunta: "Qual é a distância das casas até a praia?",
    resposta: "Todas as nossas casas estão estrategicamente localizadas em Paúba, entre 200m e 350m do mar — uma caminhada plana e tranquila de 3 a 5 minutos até a areia."
  }
];

export const DICAS_PAUBA = [
  {
    titulo: "Pôr do Sol Mágico",
    descricao: "Paúba tem um dos pores do sol mais espetaculares do litoral norte paulista, com o sol se pondo no mar.",
    icone: "sunset"
  },
  {
    titulo: "Mar de Tombo & Canto Calmo",
    descricao: "A praia oferece tanto o canto esquerdo protegido e calmo para famílias quanto boas ondas para surfe no centro.",
    icone: "waves"
  },
  {
    titulo: "Trilha Paúba - Maresias",
    descricao: "Trilha rápida de 20 minutos com mirante panorâmico no topo ligando as duas praias mais famosas da região.",
    icone: "compass"
  },
  {
    titulo: "Gastronomia Aconchegante",
    descricao: "Restaurantes charmosos, quiosques com frutos do mar frescos e bistrôs a poucos metros das casas.",
    icone: "utensils"
  }
];
