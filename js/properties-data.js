/**
 * CALIFORNIA VIAS — properties-data.js
 * ─────────────────────────────────────
 * STATUS:  "Available" | "Featured" | "Coming Soon" | "Lease" | "New" | "Sold"
 * Sold properties go to the Sold section automatically.
 * soldYear: "2025"  →  shows "Closed 2025"
 *
 * MEDIA PATHS: all lowercase, match exact filenames on disk.
 * cover  → shown in the grid card (must be an image, not a video)
 * media  → gallery array for the detail page (images and/or .mp4)
 */

const CV_DATA = {

  properties: [

    /* ── 1 ─────────────────────────────────────────────── */
    {
      id: "propiedad-1",
      status: "Sold",
      soldYear: "2025",
      title: "Spanish Style Single Family Residence",
      location: "5922 7th Ave, Los Angeles, CA 90043",
      beds: 2,
      baths: 1,
      area: "1,079 sqft",
      price: "$713,000",
      cover: "assets/propiedades/propiedad-1/slide-1.jpg",
      description: "Charming single family residence built in 1923, situated on a 4,801 sq ft lot in Los Angeles. This classic Spanish-style home combines timeless character with a prime location.",
      features: ["Single Family Residence", "4,801 sqft Lot", "Built in 1923", "Estimated Rent $2,941/mo", "Zestimate $729,900", "$661/sqft"],
      media: [
        "assets/propiedades/propiedad-1/portada.mp4",
        "assets/propiedades/propiedad-1/slide-1.jpg",
        "assets/propiedades/propiedad-1/slide-2.jpg",
        "assets/propiedades/propiedad-1/slide-3.jpg",
        "assets/propiedades/propiedad-1/slide-4.jpg",
        "assets/propiedades/propiedad-1/slide-5.jpg"
      ]
    },

    /* ── 2 ─────────────────────────────────────────────── */
    {
      id: "propiedad-2",
      status: "Featured",
      title: "Oceanview Signature Home",
      location: "California",
      beds: 5,
      baths: 5,
      area: "6,200 sqft",
      price: "$18,900,000",
      cover: "assets/propiedades/propiedad-2/slide-1.jpg",
      description: "An iconic oceanfront residence where the horizon becomes part of the living experience. Designed for those who demand the very best — in space, light and setting.",
      features: ["Ocean Views", "Private Beach Access", "Chef's Kitchen", "Rooftop Terrace", "Home Office", "Spa & Gym"],
      media: [
        "assets/propiedades/propiedad-2/slide-1.jpg",
        "assets/propiedades/propiedad-2/slide-2.jpg",
        "assets/propiedades/propiedad-2/slide-3.jpg",
        "assets/propiedades/propiedad-2/slide-4.jpg",
        "assets/propiedades/propiedad-2/slide-5.jpg"
      ]
    },

    /* ── 3 ─────────────────────────────────────────────── */
    {
      id: "propiedad-3",
      status: "Available",
      title: "Private View Retreat",
      location: "California",
      beds: 4,
      baths: 4,
      area: "4,800 sqft",
      price: "$7,200,000",
      cover: "assets/propiedades/propiedad-3/slide-1.jpg",
      description: "A serene retreat designed for privacy and natural beauty. Set within a lush landscape, this home blends indoor and outdoor living in a way that feels effortless.",
      features: ["Mountain Views", "Private Garden", "Outdoor Kitchen", "Pool", "Meditation Space", "3-Car Garage"],
      media: [
        "assets/propiedades/propiedad-3/slide-1.jpg",
        "assets/propiedades/propiedad-3/slide-2.jpg",
        "assets/propiedades/propiedad-3/slide-3.jpg",
        "assets/propiedades/propiedad-3/slide-4.jpg",
        "assets/propiedades/propiedad-3/slide-5.jpg"
      ]
    },

    /* ── 4 ─────────────────────────────────────────────── */
    {
      id: "propiedad-4",
      status: "Lease",
      title: "Grand Manor Collection",
      location: "California",
      beds: 7,
      baths: 9,
      area: "12,000 sqft",
      price: "$95,000/mo",
      cover: "assets/propiedades/propiedad-4/slide-1.jpg",
      description: "One of California's most distinguished addresses, available for lease to those seeking grandeur and comfort. A statement of taste and elegance at every turn.",
      features: ["Ballroom", "Wine Room", "Tennis Court", "Pool & Spa", "Staff Quarters", "6-Car Garage"],
      media: [
        "assets/propiedades/propiedad-4/slide-1.jpg",
        "assets/propiedades/propiedad-4/slide-2.jpg",
        "assets/propiedades/propiedad-4/slide-3.jpg",
        "assets/propiedades/propiedad-4/slide-4.jpg",
        "assets/propiedades/propiedad-4/slide-5.jpg"
      ]
    },

    /* ── 5 ─────────────────────────────────────────────── */
    {
      id: "propiedad-5",
      status: "New",
      title: "Modern Canyon Villa",
      location: "California",
      beds: 5,
      baths: 6,
      area: "7,100 sqft",
      price: "$14,750,000",
      cover: "assets/propiedades/propiedad-5/slide-1.jpg",
      description: "A striking new construction perched above canyon walls. Designed by an award-winning architecture firm, this villa redefines modern California living.",
      features: ["Canyon Views", "Glass Walls", "Designer Kitchen", "Home Theater", "Yoga Studio", "EV Charging"],
      media: [
        "assets/propiedades/propiedad-5/slide-1.jpg",
        "assets/propiedades/propiedad-5/slide-2.jpg",
        "assets/propiedades/propiedad-5/slide-3.jpg",
        "assets/propiedades/propiedad-5/slide-4.jpg",
        "assets/propiedades/propiedad-5/slide-5.jpg"
      ]
    },

    /* ── 6 ─────────────────────────────────────────────── */
    {
      id: "propiedad-6",
      status: "Coming Soon",
      title: "Estate With Classic Character",
      location: "California",
      beds: 6,
      baths: 7,
      area: "9,500 sqft",
      price: "$22,000,000",
      cover: "assets/propiedades/propiedad-6/slide-1.jpg",
      description: "An estate of timeless character and singular presence. Arriving soon — register your interest early to receive first access and private preview information.",
      features: ["Historic Architecture", "Period Details", "Formal Gardens", "Carriage House", "Library", "Wine Cave"],
      media: [
        "assets/propiedades/propiedad-6/slide-1.jpg",
        "assets/propiedades/propiedad-6/slide-2.jpg",
        "assets/propiedades/propiedad-6/slide-3.jpg",
        "assets/propiedades/propiedad-6/slide-4.jpg",
        "assets/propiedades/propiedad-6/slide-5.jpg"
      ]
    }

  ],

  /* ── SERVICES ──────────────────────────────────────── */
  services: [
    { icon: "fas fa-home",         title: "Property Sales",       text: "We present and market distinctive homes with a polished strategy designed to connect the right buyers with the right spaces." },
    { icon: "fas fa-search-dollar",title: "Buyer Guidance",       text: "From first search to final decision, we help clients navigate every stage of the process with clarity and confidence." },
    { icon: "fas fa-key",          title: "Premium Leasing",      text: "We assist in securing refined rental opportunities for clients seeking flexibility, comfort and strong location value." },
    { icon: "fas fa-chart-line",   title: "Market Insight",       text: "Our recommendations are supported by local knowledge, pricing awareness and a practical understanding of property value." },
    { icon: "fas fa-camera",       title: "Presentation & Media", text: "We use strong visuals and clear presentation to help each listing communicate quality, atmosphere and identity." },
    { icon: "fas fa-handshake",    title: "Personalized Support", text: "Every client receives direct guidance, responsive communication and a more personal experience from beginning to end." }
  ],

  /* ── TESTIMONIALS ──────────────────────────────────── */
  testimonials: [
    { text: "Working with Laura felt organized, personal and honest from the beginning. She understood exactly what we needed and guided us through every step with confidence.", author: "Daniel & Rebecca M.", role: "Home Buyers" },
    { text: "The presentation of our property was elegant and professional. We received serious attention quickly, and the entire process felt well managed.", author: "Sophia R.", role: "Property Seller" },
    { text: "Laura brought a calm and knowledgeable approach that made the experience feel much easier. Communication was always clear and timely.", author: "Alejandro V.", role: "Investor Client" },
    { text: "We appreciated the level of care, taste and patience throughout the process. It never felt rushed, and that made all the difference.", author: "The Parker Family", role: "Residential Purchase" }
  ]

};

/* ── Persist admin overrides from localStorage ── */
(function () {
  try {
    const saved = localStorage.getItem("cv_data");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.properties)   CV_DATA.properties   = parsed.properties;
      if (parsed.services)     CV_DATA.services      = parsed.services;
      if (parsed.testimonials) CV_DATA.testimonials  = parsed.testimonials;
    }
  } catch (e) { /* ignore */ }
})();