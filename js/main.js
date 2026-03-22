/* ══════════════════════════════════════════════════
   CALIFORNIA VIAS — main.js
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
  if (hero) hero.classList.add("loaded");
}, 100);

const hBg = document.getElementById("hBg");
if (hBg) {
  window.addEventListener("scroll", () => {
    if (window.scrollY < window.innerHeight) {
      hBg.style.transform = `scale(1) translateY(${window.scrollY * 0.28}px)`;
    }
  }, { passive: true });
}

/* ── MOBILE MENU ── */
const mob         = document.getElementById("mob");
const openMenuBtn = document.getElementById("hbg-btn");
const closeMenuBtn= document.getElementById("mob-x");

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
const track      = document.getElementById("tTrack");
const dotsWrapper= document.getElementById("tDots");
const nextBtn    = document.getElementById("tNext");
const prevBtn    = document.getElementById("tPrev");

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

/* ── CONTACT FORM ── */
const form = document.getElementById("cForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let ok = true;
    const nm = document.getElementById("fName");
    const em = document.getElementById("fEmail");
    const en = document.getElementById("errName");
    const ee = document.getElementById("errEmail");

    if (!nm.value.trim()) { en.classList.add("show"); nm.style.borderColor = "#e07070"; ok = false; }
    else { en.classList.remove("show"); nm.style.borderColor = ""; }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value)) { ee.classList.add("show"); em.style.borderColor = "#e07070"; ok = false; }
    else { ee.classList.remove("show"); em.style.borderColor = ""; }

    if (!ok) return;

    const btn = document.getElementById("fBtn");
    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Sending...';
    btn.disabled = true;

    setTimeout(() => {
      this.style.display = "none";
      document.getElementById("success-msg").style.display = "block";
    }, 1200);
  });
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
   Reads from CV_DATA (properties-data.js)
   Falls back to data/properties.json if needed
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

function renderSoldCard(property, index) {
  const title = property.title || property.name || "Property";
  const cover = property.cover || (property.media && property.media[0] && (typeof property.media[0] === "string" ? property.media[0] : property.media[0].src)) || "";
  const loc   = property.location || "California";
  const price = property.price || "";
  const year  = property.soldYear || property.year || "";

  return `
    <div class="sold-card ${index < 3 ? "on" : ""}">
      ${cover ? `<img src="${cover}" alt="${title}" loading="lazy">` : ""}
      <div class="sold-card-ov">
        <span class="sold-badge">Sold</span>
        <h3 class="sold-name">${title}</h3>
        <p class="sold-loc"><i class="fas fa-map-marker-alt me-1"></i>${loc}</p>
        <p class="sold-price">${price}</p>
        ${year ? `<p class="sold-year">Closed ${year}</p>` : ""}
      </div>
    </div>
  `;
}

async function loadAllProperties() {
  const propertiesGrid = document.getElementById("propertiesGrid");
  const soldGrid       = document.getElementById("soldGrid");
  if (!propertiesGrid && !soldGrid) return;

  let allProps = [];

  /* 1. Try CV_DATA from properties-data.js */
  if (typeof CV_DATA !== "undefined" && CV_DATA.properties && CV_DATA.properties.length) {
    allProps = CV_DATA.properties;
  } else {
    /* 2. Fall back to localStorage or JSON */
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

  /* Separate active vs sold */
  const activeProps = allProps.filter(p => {
    const s = (p.status || p.tag || "").toLowerCase();
    return s !== "sold";
  });
  const soldProps = allProps.filter(p => {
    const s = (p.status || p.tag || "").toLowerCase();
    return s === "sold";
  });

  /* Render active properties */
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

  /* Render sold properties */
  if (soldGrid) {
    if (soldProps.length === 0) {
      soldGrid.innerHTML = `
        <div class="text-center py-5 col-12">
          <p style="color:var(--wh2);font-size:.82rem;letter-spacing:.1em;">
            Sold listings will appear here.
          </p>
        </div>`;
    } else {
      soldGrid.innerHTML = soldProps.map(renderSoldCard).join("");
      document.querySelectorAll(".sold-card").forEach((el) => obs.observe(el));
    }
  }
}

loadAllProperties();