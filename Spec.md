# PRD - Site Pauba Vibes
## MVP - Website de Locação de Imóveis por Temporada

### Visão de Produto

#### 1. Resumo Executivo
Website institucional simples para divulgação de imóveis disponíveis para locação por temporada. O site funciona como uma vitrine de consulta: o visitante navega pelos anúncios, se interessa por um imóvel e entra em contato diretamente via WhatsApp com o proprietário para negociar e fechar a reserva. Não há sistema de reservas, pagamento ou disponibilidade em tempo real na plataforma — toda a negociação acontece fora do site.

#### 2. Problema a Resolver
Hoje não existe um canal digital centralizado para apresentar os imóveis disponíveis para locação, dificultando que potenciais hóspedes conheçam as opções antes de entrar em contato. O objetivo do MVP é criar essa vitrine mínima, validando a ideia antes de investir em funcionalidades mais complexas (reservas online, pagamentos, calendário de disponibilidade, etc.).

#### 3. Objetivo do MVP
Publicar uma página única (landing page) contendo entre 4 e 8 anúncios de imóveis, cada um com informações suficientes para gerar interesse, e um botão de contato direto via WhatsApp para iniciar a conversa de reserva.

#### 4. Público-Alvo
* Pessoas buscando imóveis para locação de temporada (turismo, lazer, viagens curtas).
* Usuários que acessam principalmente pelo celular (o design deve priorizar mobile).

---

### 5. Escopo do MVP

#### 5.1 Dentro do escopo (o que o MVP TEM)
* Página única (*single page*) responsiva.
* Entre 4 e 8 anúncios de imóveis, cada um contendo:
  * Título do imóvel (ex: "Casa de praia em Ubatuba")
  * Galeria de fotos (mínimo de 10 fotos por imóvel, com navegação/carrossel)
  * Descrição (texto livre: características, comodidades, capacidade de hóspedes, localização aproximada)
  * Botão de contato ("Reservar" ou "Consultar disponibilidade") que abre o WhatsApp com número pré-definido e mensagem automática (ex: "Olá, tenho interesse na Casa X")
* Layout organizado (grid ou lista de cards).
* Informações institucionais básicas (nome do negócio, forma de contato geral, talvez uma breve introdução no topo da página).

#### 5.2 Fora do escopo (o que o MVP NÃO TEM)
* Sistema de reservas/agendamento online.
* Pagamento online.
* Calendário de disponibilidade em tempo real.
* Login de usuário / área do cliente.
* Painel administrativo para editar anúncios (nesta fase os anúncios podem ser cadastrados diretamente no código ou em um arquivo de configuração simples).
* Múltiplas páginas (página de detalhe por imóvel), busca ou filtros.
* Avaliações/comentários de hóspedes.

> **Observação:** use esta lista como changelog de futuras versões — cada item "fora do escopo" pode virar uma fase 2, 3, etc.

---

### 6. Fluxo do Usuário (User Flow)
1. Usuário acessa o site.
2. Visualiza a lista de imóveis disponíveis (cards com foto + resumo).
3. Lê a descrição completa do imóvel de interesse.
4. Clica no botão de contato.
5. É redirecionado para o WhatsApp (via link `wa.me`) com mensagem pré-preenchida, já mencionando o imóvel de interesse.
6. A negociação e confirmação da reserva acontecem diretamente na conversa do WhatsApp, fora da plataforma.

---

### 7. Estrutura de Dados de um Anúncio
Para facilitar a futura implementação (e permitir editar imóveis sem mexer no layout), cada anúncio pode seguir este modelo:

| Campo | Tipo | Obrigatório | Exemplo |
| :--- | :--- | :--- | :--- |
| `id` | texto/número | Sim | `"casa-01"` |
| `titulo` | texto | Sim | `"Casa de praia em Ubatuba"` |
| `descricao` | texto longo | Sim | `"3 quartos, piscina, a 200m da praia..."` |
| `capacidade_hospedes` | número | Não | `8` |
| `localizacao` | texto | Não | `"Ubatuba, SP"` |
| `fotos` | lista de URLs/imagens (mín. 10 por imóvel) | Sim | `["foto1.jpg", "foto2.jpg", ..., "foto10.jpg"]` |
| `numero_whatsapp` | texto | Sim | `"+5511999999999"` |
| `mensagem_whatsapp_padrao` | texto | Não | `"Olá! Tenho interesse na Casa de praia em Ubatuba."` |

---

### 8. Requisitos Não Funcionais
* **Responsivo:** prioridade para experiência mobile (a maioria dos acessos via WhatsApp/redes sociais tende a vir de celular).
* **Performance:** carregamento rápido, imagens otimizadas.
* **Simplicidade de manutenção:** como não há painel administrativo nesta fase, o conteúdo dos anúncios deve estar centralizado em um único arquivo/estrutura fácil de editar (ex: JSON, ou array no código).
* **SEO básico:** título, descrição e imagens com atributo alt, para facilitar buscas no Google.

---

### 9. Critérios de Sucesso do MVP
* Site publicado e acessível.
* Todos os anúncios exibindo corretamente em desktop e mobile.
* Botão de WhatsApp funcionando e abrindo a conversa com a mensagem correta.
* Validação qualitativa: gerar ao menos algumas consultas reais via WhatsApp após divulgação do link.

---

### 10. Possíveis Evoluções Futuras (fora do MVP atual)
* Painel administrativo para cadastro/edição de imóveis sem mexer em código.
* Página de detalhes individual por imóvel (com mais fotos e informações).
* Filtros de busca (data, número de hóspedes, faixa de preço).
* Calendário de disponibilidade.
* Reservas e pagamento online.
* Avaliações de hóspedes anteriores.
* Múltiplos idiomas.

---

### 11. Perguntas em Aberto (para você definir antes de repassar à IA)
* Qual será o nome/marca do site?
* Os anúncios terão preço visível ou o valor só é informado no WhatsApp?
* O número de WhatsApp será o mesmo para todos os anúncios, ou pode variar por imóvel/host?
* Existe alguma identidade visual (cores, logo) já definida?
