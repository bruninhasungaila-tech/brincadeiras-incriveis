/* ===== Config ===== */
const WHATSAPP = '5562984568686';
const waLink = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
const brl = (v) => v.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

/* ===== Dados ===== */
const COMBOS = [
  {
    id: 'rosa', emoji: '🎨', name: 'Combo Rosa', desc: 'Pintura Facial e Manipulação com Balões',
    items: ['Pintura facial com material antialérgico profissional', 'Esculturas com balões espaguete'],
    prices: {
      '2h': [['1 Recreador', 450], ['2 Recreadores', 550]],
      '3h': [['1 Recreador', 550], ['2 Recreadores', 650]],
    },
    addon: '✨ Adicional: Camarim Infantil com espelho e cadeira por +R$ 50,00',
  },
  {
    id: 'amarelo', emoji: '🎈', name: 'Combo Amarelo', desc: 'Apenas Brincadeiras e Balões',
    items: ['Brincadeiras e gincanas', 'Circuitos por idade', 'Balões'],
    prices: {
      '2h': [['1 Recreador', 500, 'até 15 crianças'], ['2 Recreadores', 650, 'de 16 a 30 crianças']],
      '3h': [['1 Recreador', 600, 'até 15 crianças'], ['2 Recreadores', 750, 'de 16 a 30 crianças']],
    },
  },
  {
    id: 'verde', emoji: '🏃', name: 'Combo Verde', desc: 'Recreação: Brincadeiras e Gincanas Solo',
    items: ['Brincadeiras, gincanas e circuitos', 'Músicas infantis', '1 oficina à escolha', 'Manipulação de balões'],
    prices: {
      '2h': [['1 Recreador', 550, 'até 15 crianças'], ['2 Recreadores', 680, 'de 16 a 30 crianças']],
      '3h': [['1 Recreador', 650, 'até 15 crianças'], ['2 Recreadores', 780, 'de 16 a 30 crianças']],
    },
  },
  {
    id: 'azul', emoji: '💦', name: 'Combo Azul', desc: 'Recreação Completa Aquática',
    items: ['Brincadeiras aquáticas (recreadores conduzem as atividades de fora da piscina)', '1 oficina à escolha', 'Balões', 'Torta na cara com chantilly (opcional)'],
    prices: {
      '2h': [['1 Recreador', 550, 'até 15 crianças'], ['2 Recreadores', 680, 'de 16 a 30 crianças']],
      '3h': [['1 Recreador', 650, 'até 15 crianças'], ['2 Recreadores', 780, 'de 16 a 30 crianças']],
    },
    alerts: [
      '<strong>⚠️ Atenção – Segurança na piscina:</strong> é muito importante a presença de um <strong>salva-vidas</strong> para cuidar das crianças em eventos aquáticos. Nossos recreadores conduzem as atividades <strong>de fora da piscina</strong>. Não nos responsabilizamos por crianças sem boias ou que não sabem nadar.',
      '<strong>⚠️ Torta na cara:</strong> o local fica sujo após a atividade. O ideal é realizá-la em <strong>local aberto ou com grama</strong>, para que o piso não fique escorregadio.',
    ],
  },
  {
    id: 'roxo', emoji: '🎉', name: 'Combo Roxo', desc: 'Recreação Completa', badge: 'Mais completo',
    items: ['Pinturinha facial', 'Gincanas e músicas', '1 oficina à escolha', 'Auxílio no parabéns', 'Manipulação de balões'],
    prices: {
      '2h': [['1 Recreador', 550, 'até 15 crianças'], ['2 Recreadores', 680, 'de 16 a 30 crianças']],
      '3h': [['1 Recreador', 650, 'até 15 crianças'], ['2 Recreadores', 780, 'de 16 a 30 crianças']],
    },
  },
];

const BUBBLES_SVG = `<svg viewBox="0 0 64 64" width="1em" height="1em"><g fill="rgba(255,255,255,.35)" stroke="#38bdf8" stroke-width="2.5"><circle cx="26" cy="36" r="18"/><circle cx="50" cy="18" r="10"/><circle cx="52" cy="46" r="6"/></g><g fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><path d="M15 30a12 12 0 0 1 8-8"/><path d="M45 13a6 6 0 0 1 4-3"/></g></svg>`;

const DOUGH_SVG = `<svg viewBox="0 0 64 64" width="1em" height="1em"><path d="M14 26c0-9 8-15 18-15s18 6 18 15z" fill="#ff5fa2"/><path d="M22 18c3-3 8-4 12-2" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/><rect x="10" y="24" width="44" height="8" rx="3" fill="#ffd23f"/><path d="M14 32h36l-3 22a4 4 0 0 1-4 3H21a4 4 0 0 1-4-3z" fill="#3fa9f5"/><rect x="20" y="38" width="24" height="10" rx="3" fill="#fff" opacity=".9"/><circle cx="27" cy="43" r="2" fill="#ff5fa2"/><circle cx="32" cy="43" r="2" fill="#5fb30d"/><circle cx="37" cy="43" r="2" fill="#a855f7"/></svg>`;

const OFICINAS = [
  ['🧪', 'Slime', 'Massinha geleca colorida e cheia de brilho.', 'var(--lime)'],
  ['🏺', 'Vasinho de Argila', 'Esculturas de vasinho feitas à mão.', 'var(--orange)'],
  ['📿', 'Pulseiras e Tornozeleiras', 'Miçangas coloridas para criar acessórios.', 'var(--magenta)'],
  [DOUGH_SVG, 'Massinha Play Dooh Comestível', 'Modelar e criar à vontade! Se os pequenos colocarem na boca, não há perigo (não incentivamos a comer).', 'var(--yellow)'],
  ['🧁', 'Oficina de Cupcake', 'Decoração de cupcakes com confeitos.', 'var(--purple)'],
  ['🔑', 'Chaveiro com Nome', 'Chaveiros de letrinhas personalizados.', 'var(--cyan)'],
  ['✏️', 'Lápis ou Caneta Decorado', 'Material escolar cheio de personalidade.', 'var(--orange)'],
  [BUBBLES_SVG, 'Bolha de Sabão Gigante', 'Bolhas enormes que encantam todo mundo.', 'var(--cyan)'],
];

const FAQ = [
  ['Vocês levam os materiais?', 'Sim! Levamos todos os insumos de excelência: tintas antialérgicas profissionais, balões, materiais das oficinas e itens das gincanas. Você não precisa se preocupar com nada.', 'var(--orange)'],
  ['Como agendar?', 'É simples: clique em qualquer botão do WhatsApp e fale com o nosso atendimento automatizado para verificar a disponibilidade da sua data e fazer a reserva.', 'var(--cyan)'],
  ['Atendem todas as idades?', 'Sim! Nossas gincanas e brincadeiras são adaptadas por faixa etária, dos pequenininhos aos pré-adolescentes, e também atendemos escolas e eventos corporativos.', 'var(--magenta)'],
];

/* ===== Componentes ===== */
function PriceRows(rows) {
  return rows.map(([label, value, note]) => `
    <div class="price-row">
      <span class="price-row__label">${label}${note ? `<small>${note}</small>` : ''}</span>
      <span class="price-row__value"><sup>R$</sup>${brl(value)}</span>
    </div>`).join('');
}

function ComboCard(c) {
  return `
  <article class="combo combo--${c.id} reveal" data-combo="${c.id}">
    ${c.badge ? `<span class="combo__badge">⭐ ${c.badge}</span>` : ''}
    <div class="combo__top">
      <span class="combo__emoji" aria-hidden="true">${c.emoji}</span>
      <h3 class="combo__name">${c.name}</h3>
      <p class="combo__desc">${c.desc}</p>
    </div>
    <div class="combo__body">
      <ul class="combo__list">${c.items.map((i) => `<li>${i}</li>`).join('')}</ul>
      <div class="prices">
        <div class="tabs" role="tablist" aria-label="Duração">
          <button class="tab" role="tab" aria-selected="true" data-time="2h" id="tab-${c.id}-2h">⏱ 2 horas</button>
          <button class="tab" role="tab" aria-selected="false" data-time="3h" id="tab-${c.id}-3h">⏱ 3 horas</button>
        </div>
        <div class="price-rows" role="tabpanel">${PriceRows(c.prices['2h'])}</div>
        ${c.addon ? `<p class="addon">${c.addon}</p>` : ''}
        ${c.id !== 'rosa' ? `<p class="addon">👥 Acima de 30 crianças? Solicite um orçamento separado.</p>` : ''}
      </div>
      ${(c.alerts || []).map((a) => `<p class="combo__alert" role="alert">${a}</p>`).join('')}
      <a class="btn btn--wa" id="cta-${c.id}" data-combo="${c.id}" data-wa="Olá! Quero reservar o ${c.name} (${c.desc}).">🟢 Reservar este Combo</a>
    </div>
  </article>`;
}

const WorkshopCard = ([icon, title, text, color]) => `
  <article class="workshop" style="--w:${color}">
    <div class="workshop__icon" aria-hidden="true">${icon}</div>
    <h3>${title}</h3><p>${text}</p>
  </article>`;

const FaqItem = ([q, a, color], i) => `
  <div class="acc reveal" style="--a:${color}">
    <button class="acc__btn" id="faq-${i}" aria-expanded="false" aria-controls="faq-panel-${i}">${q}<span class="acc__icon">+</span></button>
    <div class="acc__panel" id="faq-panel-${i}" role="region" aria-labelledby="faq-${i}"><div><p>${a}</p></div></div>
  </div>`;

/* ===== Render ===== */
document.getElementById('combos-grid').innerHTML = COMBOS.map(ComboCard).join('');
document.getElementById('oficinas-track').innerHTML = OFICINAS.map(WorkshopCard).join('');
document.getElementById('faq-list').innerHTML = FAQ.map(FaqItem).join('');
document.getElementById('year').textContent = new Date().getFullYear();

/* Links WhatsApp genéricos */
document.querySelectorAll('[data-wa]').forEach((el) => {
  el.href = waLink(el.dataset.wa);
  el.target = '_blank';
  el.rel = 'noopener';
});

/* ===== Formulário antes do WhatsApp ===== */
const modal = document.getElementById('lead-modal');
const form = document.getElementById('lead-form');
const selCombo = document.getElementById('lead-combo');
const selOficina = document.getElementById('lead-oficina');
const inpKids = document.getElementById('lead-criancas');

selCombo.innerHTML = '<option value="">Ainda não decidi</option>' +
  COMBOS.map((c) => `<option value="${c.id}">${c.name} – ${c.desc}</option>`).join('');
selOficina.innerHTML = '<option value="" disabled selected>Selecione uma oficina</option>' +
  OFICINAS.map(([, t]) => `<option>${t}</option>`).join('') +
  '<option>Ainda não decidi</option><option>Não quero oficina</option>';

const SEM_OFICINA = ['rosa', 'amarelo']; // combos que não incluem oficina
const oficinaField = [selOficina, document.querySelector('label[for="lead-oficina"]')];
function syncOficina() {
  const hide = SEM_OFICINA.includes(selCombo.value);
  oficinaField.forEach((el) => { el.hidden = hide; });
  selOficina.required = !hide;
}
selCombo.addEventListener('change', syncOficina);

document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-wa]');
  if (!link || typeof modal.showModal !== 'function') return; // navegador antigo: segue o link direto
  e.preventDefault();
  selCombo.value = link.dataset.combo || '';
  syncOficina();
  modal.showModal();
});

document.getElementById('lead-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  const combo = COMBOS.find((c) => c.id === selCombo.value);
  const msg = [
    'Olá! Vim pelo site e quero um orçamento.',
    `• Combo: ${combo ? `${combo.name} (${combo.desc})` : 'Ainda não decidi'}`,
    ...(selOficina.required ? [`• Oficina: ${selOficina.value}`] : []),
    `• Quantidade de crianças: ${inpKids.value}`,
  ].join('\n');
  window.open(waLink(msg), '_blank', 'noopener');
  modal.close();
});

/* Abas de preço 2h/3h */
document.getElementById('combos-grid').addEventListener('click', (e) => {
  const tab = e.target.closest('.tab');
  if (!tab) return;
  const card = tab.closest('.combo');
  const combo = COMBOS.find((c) => c.id === card.dataset.combo);
  card.querySelectorAll('.tab').forEach((t) => t.setAttribute('aria-selected', t === tab));
  card.querySelector('.price-rows').innerHTML = PriceRows(combo.prices[tab.dataset.time]);
});

/* Carrossel */
const track = document.getElementById('oficinas-track');
const step = () => track.querySelector('.workshop').offsetWidth + 18;
document.getElementById('oficinas-prev').onclick = () => track.scrollBy({ left: -step(), behavior: 'smooth' });
document.getElementById('oficinas-next').onclick = () => track.scrollBy({ left: step(), behavior: 'smooth' });

/* Accordion */
document.getElementById('faq-list').addEventListener('click', (e) => {
  const btn = e.target.closest('.acc__btn');
  if (!btn) return;
  const item = btn.parentElement;
  const open = !item.classList.contains('open');
  document.querySelectorAll('.acc').forEach((a) => {
    a.classList.remove('open');
    a.querySelector('.acc__btn').setAttribute('aria-expanded', 'false');
  });
  item.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', open);
});

/* Reveal on scroll */
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
