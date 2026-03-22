/* ══════════════════════════════════════════════════
   CALIFORNIA VIAS — property.js
   Detail page for a single property
   ══════════════════════════════════════════════════ */

/* ── Mobile menu ── */
const mob          = document.getElementById("mob");
const openMenuBtn  = document.getElementById("hbg-btn");
const closeMenuBtn = document.getElementById("mob-x");

if (mob && openMenuBtn && closeMenuBtn) {
  openMenuBtn.addEventListener("click",  () => mob.classList.add("open"));
  closeMenuBtn.addEventListener("click", () => mob.classList.remove("open"));
  mob.querySelectorAll("a").forEach((l) => l.addEventListener("click", () => mob.classList.remove("open")));
}

/* ── Navbar scroll ── */
const navEl = document.getElementById("nav");
if (navEl) window.addEventListener("scroll", () => navEl.classList.toggle("scrolled", window.scrollY > 70));

/* ── Custom cursor ── */
const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;
if (!isTouchDevice) {
  const cur  = document.getElementById("cur");
  const cur2 = document.getElementById("cur2");
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    if (cur) { cur.style.left = mx + "px"; cur.style.top = my + "px"; }
  });
  (function loop() {
    rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
    if (cur2) { cur2.style.left = rx + "px"; cur2.style.top = ry + "px"; }
    requestAnimationFrame(loop);
  })();
}

/* ── Load property data ── */
async function loadProperty() {
  const params = new URLSearchParams(window.location.search);
  const id     = params.get("id");

  if (!id) { showError("No property ID specified."); return; }

  let properties = [];

  // 1. Try CV_DATA
  if (typeof CV_DATA !== "undefined" && CV_DATA.properties) {
    properties = CV_DATA.properties;
  } else {
    // 2. Try localStorage
    try {
      const stored = localStorage.getItem("cv_properties");
      if (stored) {
        properties = JSON.parse(stored);
      } else {
        const res = await fetch("data/properties.json");
        properties = await res.json();
      }
    } catch (err) {
      showError("Could not load property data.");
      return;
    }
  }

  const property = properties.find(p => p.id === decodeURIComponent(id));
  if (!property) { showError("Property not found."); return; }

  renderProperty(property);
}

function renderProperty(p) {
  document.title = (p.title || p.name || "Property") + " | California Vias";

  // Gather media
  const VIDEO_EXTS = /\.(mp4|webm|ogg|mov)(\?.*)?$/i;

  let mediaItems = [];
  if (p.media && p.media.length) {
    mediaItems = p.media.map(m => {
      if (typeof m === "string") {
        return { type: VIDEO_EXTS.test(m) ? "video" : "image", src: m, caption: "" };
      }
      // object with explicit type — respect it, but also auto-detect if missing
      if (!m.type) m.type = VIDEO_EXTS.test(m.src) ? "video" : "image";
      return m;
    });
  } else if (p.cover) {
    mediaItems = [{ type: VIDEO_EXTS.test(p.cover) ? "video" : "image", src: p.cover, caption: "" }];
  }

  const status = p.status || p.tag || "Available";
  const isExc  = status === "Featured" || status === "Coming Soon";

  const html = `
    <div class="prop-back">
      <a href="index.html#properties" class="back-link">
        <i class="fas fa-arrow-left me-2"></i>Back to Properties
      </a>
    </div>

    <div class="prop-detail">
      <div class="row g-5 align-items-start">

        <!-- GALLERY -->
        <div class="col-lg-7">
          <div class="carousel-wrap" id="carouselWrap">
            <div class="carousel-track" id="carTrack">
              ${mediaItems.map((m, i) => `
                <div class="carousel-slide" data-index="${i}">
                  ${m.type === "video"
                    ? `<video src="${m.src}" muted playsinline loop autoplay></video>`
                    : `<img src="${m.src}" alt="${m.caption || p.title || ''}" loading="${i === 0 ? 'eager' : 'lazy'}">`
                  }
                  ${m.caption ? `<div class="car-caption">${m.caption}</div>` : ""}
                </div>
              `).join("")}
            </div>

            ${mediaItems.length > 1 ? `
              <button class="car-arrow car-prev" id="carPrev" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>
              <button class="car-arrow car-next" id="carNext" aria-label="Next"><i class="fas fa-chevron-right"></i></button>
            ` : ""}

            <div class="car-counter" id="carCounter">1 / ${mediaItems.length}</div>
          </div>

          <!-- Thumbnails -->
          ${mediaItems.length > 1 ? `
            <div class="car-thumbs" id="carThumbs">
              ${mediaItems.map((m, i) => `
                <div class="car-thumb ${i === 0 ? "active" : ""}" data-index="${i}">
                  ${m.type === "video"
                    ? `<video src="${m.src}" muted playsinline></video><div class="car-thumb-video-icon"><i class="fas fa-play"></i></div>`
                    : `<img src="${m.src}" alt="Slide ${i+1}" loading="lazy">`
                  }
                </div>
              `).join("")}
            </div>
          ` : ""}
        </div>

        <!-- INFO -->
        <div class="col-lg-5">
          <div class="prop-info">
            <div class="prop-tag-row">
              <span class="prop-tag ${isExc ? "exc" : ""}">${status}</span>
              <span class="prop-loc-tag"><i class="fas fa-map-marker-alt"></i>${p.location || "California"}</span>
            </div>

            <h1 class="prop-title">${p.title || p.name || ""}</h1>

            <div class="prop-price-line">
              ${p.price || ""}
              ${p.priceNote ? `<span class="prop-price-note">${p.priceNote}</span>` : ""}
            </div>

            <div class="prop-specs">
              ${p.beds  ? `<div class="prop-spec"><i class="fas fa-bed"></i><strong>${p.beds}</strong> Beds</div>`  : ""}
              ${p.baths ? `<div class="prop-spec"><i class="fas fa-bath"></i><strong>${p.baths}</strong> Baths</div>` : ""}
              ${(p.area || p.sqft) ? `<div class="prop-spec"><i class="fas fa-expand"></i><strong>${p.area || p.sqft}</strong></div>` : ""}
            </div>

            ${p.description ? `<p class="prop-description">${p.description}</p>` : ""}

            ${(p.features && p.features.length) ? `
              <p class="prop-features-title">✦ &nbsp; Highlights</p>
              <div class="prop-features">
                ${p.features.map(f => `<span class="prop-feature"><i class="fas fa-check"></i>${f}</span>`).join("")}
              </div>
            ` : ""}

            <div class="prop-actions">
              <a href="tel:+15628621902" class="btn-g"><i class="fas fa-phone me-2"></i>Call Laura</a>
              <a href="index.html#contact" class="btn-o"><i class="fas fa-envelope me-2"></i>Inquiry</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  document.getElementById("propRoot").innerHTML = html;
  initCarousel(mediaItems.length);
}

function initCarousel(total) {
  if (total <= 1) return;

  const track  = document.getElementById("carTrack");
  const prev   = document.getElementById("carPrev");
  const next   = document.getElementById("carNext");
  const counter= document.getElementById("carCounter");
  const thumbs = document.querySelectorAll(".car-thumb");
  let current  = 0;

  function goTo(i) {
    current = (i + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    if (counter) counter.textContent = `${current + 1} / ${total}`;
    thumbs.forEach((t, idx) => t.classList.toggle("active", idx === current));

    // Pause/play videos
    document.querySelectorAll(".carousel-slide video").forEach((v, idx) => {
      if (idx === current) v.play().catch(()=>{});
      else { v.pause(); v.currentTime = 0; }
    });
  }

  // Auto-play first video — use IntersectionObserver so browser allows it
  const firstVideo = track.querySelector(".carousel-slide:first-child video");
  if (firstVideo) {
    firstVideo.muted = true;
    const autoObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          firstVideo.play().catch(() => {});
        } else {
          firstVideo.pause();
        }
      });
    }, { threshold: 0.3 });
    autoObs.observe(firstVideo);
  }

  if (prev) prev.addEventListener("click", () => goTo(current - 1));
  if (next) next.addEventListener("click", () => goTo(current + 1));

  thumbs.forEach((t) => {
    t.addEventListener("click", () => goTo(parseInt(t.dataset.index)));
  });

  // Touch/swipe
  let startX = 0;
  const wrap = document.getElementById("carouselWrap");
  if (wrap) {
    wrap.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
    wrap.addEventListener("touchend",   (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 45) goTo(dx < 0 ? current + 1 : current - 1);
    });
  }

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft")  goTo(current - 1);
    if (e.key === "ArrowRight") goTo(current + 1);
  });
}

function showError(msg) {
  const root = document.getElementById("propRoot");
  if (root) root.innerHTML = `
    <div style="min-height:60vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1.5rem;padding:2rem;">
      <p style="color:var(--wh2);font-size:.9rem;letter-spacing:.1em;">${msg}</p>
      <a href="index.html#properties" class="btn-o">← Back to Properties</a>
    </div>
  `;
}

loadProperty();