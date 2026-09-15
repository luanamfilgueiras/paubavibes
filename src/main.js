import { CONFIG_GERAL, IMOVEIS, FAQ_ITENS, DICAS_PAUBA } from './data/imoveis.js';

// Estado global da Galeria Lightbox
let currentImovel = null;
let currentPhotoIndex = 0;

// SVG Icons embutidos para fidelidade e performance zero-latency
const ICONS = {
  wave: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`,
  mapPin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  bed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>`,
  bath: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-1C4.7 2.5 4 3.2 4 4v3"/><path d="M4 19h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  sunset: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/></svg>`,
  waves: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
  compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  utensils: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"/><path d="M15 11v11"/><path d="M5 2v14a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2"/><path d="M9 2v6"/><path d="M5 2v6"/></svg>`
};

/**
 * Monta a URL de redirecionamento do WhatsApp com mensagem codificada
 */
function gerarUrlWhatsapp(imovel) {
  const phone = (imovel && imovel.numero_whatsapp && imovel.numero_whatsapp.trim() !== "") 
    ? imovel.numero_whatsapp.replace(/\D/g, '') 
    : CONFIG_GERAL.whatsapp_padrao.replace(/\D/g, '');

  const msg = (imovel && imovel.mensagem_whatsapp)
    ? imovel.mensagem_whatsapp
    : `Olá! Acessei o site Paúba Vibes e gostaria de consultar a disponibilidade para reserva.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

/**
 * Renderiza os Cards de Imóveis no Grid
 */
function renderizarImoveis() {
  const container = document.getElementById('imoveis-grid-container');
  if (!container) return;

  container.innerHTML = IMOVEIS.map((imovel, index) => {
    const waUrl = gerarUrlWhatsapp(imovel);
    const tagsHtml = (imovel.tags || []).map((t, i) => 
      `<span class="badge-tag ${i === 0 ? 'highlight' : ''}">${t}</span>`
    ).join('');

    // Primeiras 4 fotos para o carrossel do card
    const previewFotos = imovel.fotos.slice(0, 4);
    const slidesHtml = previewFotos.map((foto, fIndex) => `
      <div class="card-carousel-slide ${fIndex === 0 ? 'active' : ''}" data-slide="${fIndex}">
        <img src="${foto.url}" alt="${foto.titulo}" loading="lazy" />
      </div>
    `).join('');

    const dotsHtml = previewFotos.map((_, dIndex) => `
      <span class="carousel-dot ${dIndex === 0 ? 'active' : ''}" data-dot="${dIndex}"></span>
    `).join('');

    // Comodidades pills
    const comodidadesHtml = (imovel.comodidades || []).slice(0, 4).map(c => `
      <span class="amenity-pill">
        ${ICONS.check} ${c.nome}
      </span>
    `).join('');

    return `
      <article class="property-card" data-id="${imovel.id}" id="${imovel.id}">
        <!-- Carrossel de Fotos do Card -->
        <div class="card-media">
          <div class="card-top-badges">
            ${tagsHtml}
          </div>

          <div class="card-carousel" id="carousel-${imovel.id}">
            ${slidesHtml}
          </div>

          <button class="carousel-btn prev" aria-label="Foto anterior" onclick="window.navCardCarousel('${imovel.id}', -1)">
            ${ICONS.chevronLeft}
          </button>
          <button class="carousel-btn next" aria-label="Próxima foto" onclick="window.navCardCarousel('${imovel.id}', 1)">
            ${ICONS.chevronRight}
          </button>

          <div class="carousel-indicators">
            ${dotsHtml}
          </div>

          <button class="btn-open-gallery-chip" onclick="window.abrirGaleria('${imovel.id}', 0)">
            ${ICONS.camera} Ver todas as ${imovel.fotos.length} fotos
          </button>
        </div>

        <!-- Conteúdo do Card -->
        <div class="card-body">
          <div class="card-location">
            ${ICONS.mapPin} <span>${imovel.distancia_praia}</span>
          </div>

          <h3 class="card-title">${imovel.titulo}</h3>
          <p class="card-subtitle">${imovel.descricao}</p>

          <!-- Especificações Chave -->
          <div class="card-specs">
            <div class="spec-item">
              <span class="spec-icon">${ICONS.users}</span>
              <span class="spec-val">Até ${imovel.capacidade_hospedes}</span>
              <span class="spec-label">Hóspedes</span>
            </div>
            <div class="spec-item">
              <span class="spec-icon">${ICONS.bed}</span>
              <span class="spec-val">${imovel.quartos} Quartos</span>
              <span class="spec-label">Espaçosos</span>
            </div>
            <div class="spec-item">
              <span class="spec-icon">${ICONS.bath}</span>
              <span class="spec-val">${imovel.banheiros} Banheiros</span>
              <span class="spec-label">Completos</span>
            </div>
          </div>

          <!-- Comodidades Rápidas -->
          <div class="card-amenities-pills">
            ${comodidadesHtml}
          </div>

          <!-- Rodapé do Card com Preço e CTA -->
          <div class="card-footer">
            <div class="card-price-box">
              <span class="price-prefix">Diária</span>
              <span class="price-amount">${imovel.preco}</span>
              <span class="price-suffix">${imovel.preco_detalhe || 'por noite'}</span>
            </div>

            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" id="btn-wa-${imovel.id}">
              ${ICONS.whatsapp} Consultar no WhatsApp
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Controle de navegação do carrossel interno do card
 */
window.navCardCarousel = function(imovelId, direction) {
  const card = document.querySelector(`.property-card[data-id="${imovelId}"]`);
  if (!card) return;

  const slides = card.querySelectorAll('.card-carousel-slide');
  const dots = card.querySelectorAll('.carousel-dot');
  let activeIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));

  if (activeIndex === -1) activeIndex = 0;
  let newIndex = activeIndex + direction;

  if (newIndex < 0) newIndex = slides.length - 1;
  if (newIndex >= slides.length) newIndex = 0;

  slides.forEach((s, idx) => s.classList.toggle('active', idx === newIndex));
  dots.forEach((d, idx) => d.classList.toggle('active', idx === newIndex));
};

/**
 * Lightbox Modal - Abertura e Navegação em Tela Cheia (10+ fotos)
 */
window.abrirGaleria = function(imovelId, initialIndex = 0) {
  const imovel = IMOVEIS.find(i => i.id === imovelId);
  if (!imovel) return;

  currentImovel = imovel;
  currentPhotoIndex = initialIndex;

  const modal = document.getElementById('lightbox-modal');
  const modalTitle = document.getElementById('lightbox-title');
  const modalSubtitle = document.getElementById('lightbox-subtitle');
  const ctaBtn = document.getElementById('lightbox-cta-btn');

  modalTitle.textContent = imovel.titulo;
  modalSubtitle.textContent = `📍 ${imovel.distancia_praia} • Até ${imovel.capacidade_hospedes} hóspedes`;
  
  ctaBtn.href = gerarUrlWhatsapp(imovel);
  ctaBtn.innerHTML = `${ICONS.whatsapp} Reservar ${imovel.nome} via WhatsApp`;

  renderizarThumbnailsModal();
  atualizarFotoModal();

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.fecharGaleria = function() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

window.navFotoModal = function(direction) {
  if (!currentImovel) return;
  const total = currentImovel.fotos.length;
  currentPhotoIndex = (currentPhotoIndex + direction + total) % total;
  atualizarFotoModal();
};

function renderizarThumbnailsModal() {
  const container = document.getElementById('lightbox-thumbs-container');
  if (!container || !currentImovel) return;

  container.innerHTML = currentImovel.fotos.map((foto, idx) => `
    <div class="lightbox-thumb ${idx === currentPhotoIndex ? 'active' : ''}" onclick="window.irParaFoto(${idx})">
      <img src="${foto.url}" alt="${foto.titulo}" />
    </div>
  `).join('');
}

window.irParaFoto = function(idx) {
  currentPhotoIndex = idx;
  atualizarFotoModal();
};

function atualizarFotoModal() {
  if (!currentImovel) return;
  const foto = currentImovel.fotos[currentPhotoIndex];
  const imgEl = document.getElementById('lightbox-main-image');
  const captionEl = document.getElementById('lightbox-caption-text');
  const counterEl = document.getElementById('lightbox-counter-text');

  imgEl.style.opacity = '0.3';
  setTimeout(() => {
    imgEl.src = foto.url;
    imgEl.alt = foto.titulo;
    captionEl.textContent = `${foto.categoria ? '[' + foto.categoria + '] ' : ''}${foto.titulo}`;
    counterEl.textContent = `${currentPhotoIndex + 1} / ${currentImovel.fotos.length}`;
    imgEl.style.opacity = '1';
  }, 100);

  // Atualiza active nos thumbnails
  const thumbs = document.querySelectorAll('.lightbox-thumb');
  thumbs.forEach((t, idx) => t.classList.toggle('active', idx === currentPhotoIndex));

  // Scroll suave no container de thumbnails
  const activeThumb = thumbs[currentPhotoIndex];
  if (activeThumb) {
    activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

/**
 * Renderiza Dicas de Paúba e FAQ
 */
function renderizarDicasEFAQ() {
  // Dicas
  const dicasContainer = document.getElementById('pauba-dicas-grid');
  if (dicasContainer) {
    dicasContainer.innerHTML = DICAS_PAUBA.map(dica => `
      <div class="pauba-card">
        <div class="pauba-card-icon">
          ${ICONS[dica.icone] || ICONS.wave}
        </div>
        <h4>${dica.titulo}</h4>
        <p>${dica.descricao}</p>
      </div>
    `).join('');
  }

  // FAQ
  const faqContainer = document.getElementById('faq-accordion-container');
  if (faqContainer) {
    faqContainer.innerHTML = FAQ_ITENS.map((item, index) => `
      <div class="faq-item ${index === 0 ? 'active' : ''}">
        <button class="faq-question" onclick="this.parentElement.classList.toggle('active')">
          <span>${item.pergunta}</span>
          <span class="faq-icon-arrow">${ICONS.chevronDown}</span>
        </button>
        <div class="faq-answer">
          <p>${item.resposta}</p>
        </div>
      </div>
    `).join('');
  }
}

/**
 * Configuração de Eventos Globais
 */
function initEvents() {
  // Navbar scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Teclado na galeria (Esc, Setas)
  window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightbox-modal');
    if (!modal || !modal.classList.contains('open')) return;

    if (e.key === 'Escape') window.fecharGaleria();
    if (e.key === 'ArrowLeft') window.navFotoModal(-1);
    if (e.key === 'ArrowRight') window.navFotoModal(1);
  });

  // Touch Swipe para Mobile no Modal
  let touchStartX = 0;
  let touchEndX = 0;
  const stage = document.querySelector('.lightbox-stage');
  if (stage) {
    stage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    stage.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) window.navFotoModal(1);
      if (touchEndX - touchStartX > 50) window.navFotoModal(-1);
    }, { passive: true });
  }

  // Configuração do Botão Flutuante e Header WA
  const globalWaUrl = `https://wa.me/${CONFIG_GERAL.whatsapp_padrao.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Acessei o site Paúba Vibes e gostaria de tirar uma dúvida sobre as locações.')}`;
  const floatWa = document.getElementById('floating-wa-link');
  if (floatWa) floatWa.href = globalWaUrl;

  const headerWa = document.getElementById('nav-wa-cta');
  if (headerWa) headerWa.href = globalWaUrl;

  const bannerWa = document.getElementById('banner-wa-cta');
  if (bannerWa) bannerWa.href = globalWaUrl;
}

// Inicialização ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
  renderizarImoveis();
  renderizarDicasEFAQ();
  initEvents();
});
