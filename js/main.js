/* ══════════════════════════════════════════════════
   CALIFORNIA VILLAS — main.js
   ══════════════════════════════════════════════════ */

const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;

/* ── CUSTOM CURSOR (desktop only) ── */
if (!isTouchDevice) {
  const cur  = document.getElementById("cur");
  const cur2 = document.getElementById("cur2");
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    if (cur) { cur.style.left = mx + "px"; cur.style.top = my + "px"; }
  });

  (function animateCursor() {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    if (cur2) { cur2.style.left = rx + "px"; cur2.style.top = ry + "px"; }
    requestAnimationFrame(animateCursor);
  })();

  document.querySelectorAll("a,button,input,select,textarea,label,.gallery-thumb,.car-thumb").forEach((el) => {
    el.addEventListener("mouseenter", () => document.body.classList.add("lh"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("lh"));
  });
}

/* ── NAVBAR ── */
const navEl = document.getElementById("nav");
if (navEl) {
  window.addEventListener("scroll", () => {
    navEl.classList.toggle("scrolled", window.scrollY > 70);
  });
}

/* ── HERO ── */
setTimeout(() => {
  const hero = document.getElementById("hero");
  if (hero) {
    hero.classList.add("loaded");
    if (!isTouchDevice) {
      const bg = document.getElementById("hBg");
      if (bg) bg.style.transform = "scale(1.06)";
    }
  }
}, 100);

const hBg = document.getElementById("hBg");
if (hBg && !isTouchDevice) {
  window.addEventListener("scroll", () => {
    if (window.scrollY < window.innerHeight) {
      hBg.style.transform = `scale(1) translateY(${window.scrollY * 0.28}px)`;
    }
  }, { passive: true });
}

/* ── MOBILE MENU ── */
const mob          = document.getElementById("mob");
const openMenuBtn  = document.getElementById("hbg-btn");
const closeMenuBtn = document.getElementById("mob-x");

if (mob && openMenuBtn && closeMenuBtn) {
  openMenuBtn.addEventListener("click",  () => mob.classList.add("open"));
  closeMenuBtn.addEventListener("click", () => mob.classList.remove("open"));
  mob.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => mob.classList.remove("open"));
  });
}

/* ── SCROLL REVEAL ── */
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("on"); });
}, { threshold: 0.1 });

document.querySelectorAll(".rv,.rvL,.rvR,.p-card,.s-card,.t-card,.sold-card").forEach((el) => {
  obs.observe(el);
});

/* ── TESTIMONIAL SLIDER ── */
const track       = document.getElementById("tTrack");
const dotsWrapper = document.getElementById("tDots");
const nextBtn     = document.getElementById("tNext");
const prevBtn     = document.getElementById("tPrev");

if (track && dotsWrapper && nextBtn && prevBtn) {
  const totalSlides = document.querySelectorAll(".t-slide").length;
  let currentSlide = 0, autoTimer;

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("div");
    dot.className = "t-dot" + (i === 0 ? " on" : "");
    dot.addEventListener("click", () => goTo(i));
    dotsWrapper.appendChild(dot);
  }

  function goTo(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll(".t-dot").forEach((d, i) => d.classList.toggle("on", i === currentSlide));
    const cards = document.querySelectorAll(".t-card");
    if (cards[currentSlide] && !cards[currentSlide].classList.contains("on")) {
      cards[currentSlide].classList.add("on");
    }
  }

  const startAuto = () => { autoTimer = setInterval(() => goTo(currentSlide + 1), 5500); };
  const stopAuto  = () => clearInterval(autoTimer);

  nextBtn.addEventListener("click", () => { stopAuto(); goTo(currentSlide + 1); startAuto(); });
  prevBtn.addEventListener("click", () => { stopAuto(); goTo(currentSlide - 1); startAuto(); });
  startAuto();
}

/* ══════════════════════════════════════════════════
   CONTACT FORM — WhatsApp submission
   ══════════════════════════════════════════════════ */

const WHATSAPP_NUMBER = "15628621902"; // Laura's number (no + no spaces)

const form = document.getElementById("cForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let ok = true;

    const nm   = document.getElementById("fName");
    const em   = document.getElementById("fEmail");
    const ph   = document.getElementById("fPhone");
    const dt   = document.getElementById("fDate");
    const msg  = document.getElementById("fMsg");
    const tcpa = document.getElementById("fTcpa");
    const en   = document.getElementById("errName");
    const ee   = document.getElementById("errEmail");
    const et   = document.getElementById("errTcpa");

    // Validate name
    if (!nm.value.trim()) {
      en.classList.add("show");
      nm.style.borderColor = "#e07070";
      ok = false;
    } else {
      en.classList.remove("show");
      nm.style.borderColor = "";
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value)) {
      ee.classList.add("show");
      em.style.borderColor = "#e07070";
      ok = false;
    } else {
      ee.classList.remove("show");
      em.style.borderColor = "";
    }

    // Validate TCPA checkbox
    if (!tcpa.checked) {
      et.classList.add("show");
      const tcpaWrap = document.querySelector(".tcpa-wrap");
      if (tcpaWrap) tcpaWrap.classList.add("tcpa-error");
      ok = false;
    } else {
      et.classList.remove("show");
      const tcpaWrap = document.querySelector(".tcpa-wrap");
      if (tcpaWrap) tcpaWrap.classList.remove("tcpa-error");
    }

    if (!ok) return;

    // ── Build WhatsApp message ──
    const name    = nm.value.trim();
    const email   = em.value.trim();
    const phone   = ph.value.trim()  || "Not provided";
    const date    = dt.value         || "Not specified";
    const message = msg.value.trim() || "No additional message.";

    const waText = [
      "*New Contact Request — Tu Casa con Laura*",
      "",
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      `*Phone:* ${phone}`,
      `*Preferred Date:* ${date}`,
      "",
      `*Message:*`,
      message,
      "",
      "_Client has consented to receive calls/texts (TCPA)._"
    ].join("\n");

    const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

    // ── Show spinner briefly then open WhatsApp ──
    const btn = document.getElementById("fBtn");
    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Opening WhatsApp...';
    btn.disabled = true;

    setTimeout(() => {
      form.style.display = "none";
      const successEl = document.getElementById("success-msg");
      if (successEl) successEl.style.display = "block";
      window.open(waURL, "_blank");
    }, 900);
  });

  // Clear TCPA error live when user checks the box
  const tcpaInput = document.getElementById("fTcpa");
  if (tcpaInput) {
    tcpaInput.addEventListener("change", () => {
      if (tcpaInput.checked) {
        document.getElementById("errTcpa").classList.remove("show");
        const tcpaWrap = document.querySelector(".tcpa-wrap");
        if (tcpaWrap) tcpaWrap.classList.remove("tcpa-error");
      }
    });
  }
}

/* ── COUNTERS ── */
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    counterObserver.unobserve(entry.target);
    const el     = entry.target;
    const val    = parseInt(el.dataset.val, 10);
    const sfx    = el.dataset.sfx  || "";
    const prefix = el.dataset.pre  || "";
    let current  = 0;
    const step   = Math.max(1, Math.ceil(val / 55));
    const timer  = setInterval(() => {
      current += step;
      if (current >= val) { current = val; clearInterval(timer); }
      el.textContent = prefix + current + sfx;
    }, 28);
  });
}, { threshold: 0.6 });

document.querySelectorAll("[data-val]").forEach((el) => counterObserver.observe(el));

/* ══════════════════════════════════════════════════
   PROPERTIES RENDER
   ══════════════════════════════════════════════════ */

function tagClass(tag) {
  if (!tag) return "";
  const t = tag.toLowerCase();
  if (t === "featured" || t === "coming soon") return "exc";
  if (t === "sold") return "sold-tag";
  return "";
}

function renderPropertyCard(property, index) {
  const id    = property.id    || ("prop-" + index);
  const title = property.title || property.name || "Property";
  const cover = property.cover || (property.media && property.media[0] && (typeof property.media[0] === "string" ? property.media[0] : property.media[0].src)) || "";
  const status= property.status || property.tag || "Available";
  const loc   = property.location || "California";
  const beds  = property.beds  || 0;
  const baths = property.baths || 0;
  const area  = property.area  || property.sqft || "";
  const price = property.price || "";

  return `
    <div class="p-card ${index < 3 ? "on" : ""}">
      ${cover ? `<img src="${cover}" class="p-img" alt="${title}" loading="lazy">` : ""}
      <div class="p-ov">
        <span class="p-tag ${tagClass(status)}">${status}</span>
        <h3 class="p-name">${title}</h3>
        <p class="p-loc"><i class="fas fa-map-marker-alt me-1"></i>${loc}</p>
        <div class="p-det">
          <span><i class="fas fa-bed me-1"></i>${beds} Beds</span>
          <span><i class="fas fa-bath me-1"></i>${baths} Baths</span>
          ${area ? `<span><i class="fas fa-expand me-1"></i>${area}</span>` : ""}
        </div>
        <p class="p-price">${price}</p>
      </div>
      <div class="p-hov">
        <a href="property.html?id=${encodeURIComponent(id)}">View Details</a>
      </div>
    </div>
  `;
}

/* ── SOLD CARD con carrusel automático ─────────────────────── */
function renderSoldCard(property, index) {
  const title = property.title || property.name || "Property";
  const loc   = property.location || "California";
  const price = property.price || "";
  const year  = property.soldDate || property.soldYear || property.year || "";

  const VIDEO_EXTS = /\.(mp4|webm|ogg|mov)(\?.*)?$/i;
  let slides = [];

  if (property.media && property.media.length) {
    slides = property.media
      .map(m => (typeof m === "string" ? m : (m.src || "")))
      .filter(src => src && !VIDEO_EXTS.test(src));
  }
  if (!slides.length && property.cover) {
    slides = [property.cover];
  }

  const hasMultiple = slides.length > 1;
  const cardId = `sold-${property.id || index}`;

  const slidesHTML = slides.map(src => `
    <div class="sold-card-slide">
      <img src="${src}" alt="${title}" loading="lazy">
    </div>
  `).join("");

  const dotsHTML = hasMultiple ? `
    <div class="sold-card-dots" id="dots-${cardId}">
      ${slides.map((_, i) => `
        <span class="sold-card-dot ${i === 0 ? "active" : ""}" data-index="${i}"></span>
      `).join("")}
    </div>
  ` : "";

  return `
    <div class="sold-card on" data-sold-id="${cardId}">
      <div class="sold-card-inner">
        <div class="sold-card-track" id="track-${cardId}">
          ${slidesHTML}
        </div>
        ${dotsHTML}
        <div class="sold-card-ov">
          <span class="sold-badge">Sold</span>
          <h3 class="sold-name">${title}</h3>
          <p class="sold-loc"><i class="fas fa-map-marker-alt me-1"></i>${loc}</p>
          <p class="sold-price">${price}</p>
          ${year ? `<p class="sold-year">Closed ${year}</p>` : ""}
        </div>
      </div>
    </div>
  `;
}

/* ── Init carrusel automático en sold cards ─────────────────── */
function initSoldCarousels() {
  document.querySelectorAll(".sold-card[data-sold-id]").forEach((card) => {
    if (card.dataset.carouselInit) return;
    card.dataset.carouselInit = "1";

    const id      = card.dataset.soldId;
    const trackEl = document.getElementById(`track-${id}`);
    if (!trackEl) return;

    const slides = trackEl.querySelectorAll(".sold-card-slide");
    if (slides.length <= 1) return;

    const dotsEl = document.getElementById(`dots-${id}`);
    const dots   = dotsEl ? dotsEl.querySelectorAll(".sold-card-dot") : [];
    let current  = 0;

    function goTo(i) {
      current = (i + slides.length) % slides.length;
      trackEl.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, idx) => d.classList.toggle("active", idx === current));
    }

    const interval = 3000 + Math.floor(Math.random() * 1000);
    setInterval(() => goTo(current + 1), interval);

    dots.forEach((dot) => {
      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        goTo(parseInt(dot.dataset.index));
      });
    });
  });
}

/* ══════════════════════════════════════════════════
   PAGINACIÓN SOLD — 8 por página (2 filas de 4)
   ══════════════════════════════════════════════════ */
const SOLD_PER_PAGE = 8;
let soldCurrentPage = 1;
let soldAllProps    = [];

function renderSoldPage(page) {
  const soldGrid     = document.getElementById("soldGrid");
  const paginationEl = document.getElementById("soldPagination");
  if (!soldGrid) return;

  const total      = soldAllProps.length;
  const totalPages = Math.ceil(total / SOLD_PER_PAGE);
  const start      = (page - 1) * SOLD_PER_PAGE;
  const end        = Math.min(start + SOLD_PER_PAGE, total);
  const pageItems  = soldAllProps.slice(start, end);

  soldGrid.innerHTML = pageItems.map((p, i) => renderSoldCard(p, start + i)).join("");
  soldGrid.querySelectorAll(".sold-card").forEach(el => obs.observe(el));
  initSoldCarousels();

  if (!paginationEl) return;

  if (totalPages <= 1) {
    paginationEl.style.display = "none";
    return;
  }

  let html = "";

  html += `<button class="sold-page-btn sold-page-arrow" ${page === 1 ? "disabled" : ""} data-page="${page - 1}">
    <i class="fas fa-chevron-left"></i>
  </button>`;

  for (let i = 1; i <= totalPages; i++) {
    const isFirst = i === 1;
    const isLast  = i === totalPages;
    const isNear  = i >= page - 1 && i <= page + 1;

    if (isFirst || isLast || isNear) {
      html += `<button class="sold-page-btn sold-page-num ${i === page ? "active" : ""}" data-page="${i}">${i}</button>`;
    } else if (i === page - 2 || i === page + 2) {
      html += `<span class="sold-page-ellipsis">…</span>`;
    }
  }

  html += `<button class="sold-page-btn sold-page-arrow" ${page === totalPages ? "disabled" : ""} data-page="${page + 1}">
    <i class="fas fa-chevron-right"></i>
  </button>`;

  paginationEl.innerHTML = html;
  paginationEl.style.display = "flex";

  paginationEl.querySelectorAll(".sold-page-btn:not([disabled])").forEach(btn => {
    btn.addEventListener("click", () => {
      soldCurrentPage = parseInt(btn.dataset.page);
      renderSoldPage(soldCurrentPage);
      const soldSection = document.getElementById("sold");
      if (soldSection) {
        const offset = soldSection.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    });
  });
}

/* ── Carga y renderiza todas las propiedades ─────────────────── */
async function loadAllProperties() {
  const propertiesGrid = document.getElementById("propertiesGrid");
  const soldGrid       = document.getElementById("soldGrid");
  if (!propertiesGrid && !soldGrid) return;

  let allProps = [];

  if (typeof CV_DATA !== "undefined" && CV_DATA.properties && CV_DATA.properties.length) {
    allProps = CV_DATA.properties;
  } else {
    try {
      const stored = localStorage.getItem("cv_properties");
      if (stored) {
        allProps = JSON.parse(stored);
      } else {
        const res = await fetch("data/properties.json");
        allProps = await res.json();
      }
    } catch (err) {
      console.warn("Could not load properties:", err);
    }
  }

  const activeProps = allProps.filter(p => {
    const s = (p.status || p.tag || "").toLowerCase();
    return s !== "sold";
  });

  soldAllProps = allProps.filter(p => {
    const s = (p.status || p.tag || "").toLowerCase();
    return s === "sold";
  });

  if (propertiesGrid) {
    if (activeProps.length === 0) {
      propertiesGrid.innerHTML = `
        <div class="container text-center py-5">
          <p style="color:var(--wh2);font-size:.85rem;letter-spacing:.1em;">
            No active properties at this time. Check back soon or <a href="#contact" style="color:var(--gold);">contact Laura</a>.
          </p>
        </div>`;
    } else {
      propertiesGrid.innerHTML = activeProps.map(renderPropertyCard).join("");
      document.querySelectorAll(".p-card").forEach((el) => obs.observe(el));
    }
  }

  if (soldGrid) {
    if (soldAllProps.length === 0) {
      soldGrid.innerHTML = `
        <div class="text-center py-5 col-12">
          <p style="color:var(--wh2);font-size:.82rem;letter-spacing:.1em;">
            Sold listings will appear here.
          </p>
        </div>`;
    } else {
      soldCurrentPage = 1;
      renderSoldPage(soldCurrentPage);
    }
  }
}

loadAllProperties();

/* ── CONSENT MODAL ── */
const consentModal = document.getElementById("consentModal");
const openConsentModal = document.getElementById("openConsentModal");
const closeConsentModal = document.getElementById("closeConsentModal");
const consentBackdrop = document.getElementById("consentBackdrop");

function showConsentModal() {
  if (!consentModal) return;
  consentModal.classList.add("open");
  consentModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function hideConsentModal() {
  if (!consentModal) return;
  consentModal.classList.remove("open");
  consentModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

if (openConsentModal) {
  openConsentModal.addEventListener("click", function (e) {
    e.preventDefault();
    showConsentModal();
  });
}

if (closeConsentModal) {
  closeConsentModal.addEventListener("click", hideConsentModal);
}

if (consentBackdrop) {
  consentBackdrop.addEventListener("click", hideConsentModal);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    hideConsentModal();
  }
});