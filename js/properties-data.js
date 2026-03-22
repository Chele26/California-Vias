/* ══════════════════════════════════════════════════
   properties-data.js
   Define CV_DATA global — leído por main.js y property.js
   NO usar export/import: este archivo va con <script src>
   ══════════════════════════════════════════════════ */

var CV_DATA = {
  properties: [

  // ─── 1 ──────────────────────────────────────────────────
  {
    id: "propiedad-1",
    status: "Sold",
    title: "Casa Unifamiliar en Montebello",
    location: "237 N Montebello Blvd, Montebello, CA 90640",
    beds: 3, baths: 1, area: "1,323 sqft", price: "$465,000",
    soldDate: "01/31/2019",
    cover: "https://maps.googleapis.com/maps/api/streetview?location=237+N+Montebello+Blvd%2C+Montebello%2C+CA+90640&size=576x432&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&&signature=1qCFNFuhQIg6h_V7xTlUFXniF9A=",
    description: "Casa unifamiliar de 1,323 sqft con 3 recámaras y 1 baño, construida en 1936. Terreno de 3,920 sqft en Montebello. Nivel único.",
    features: ["3 Recámaras", "1 Baño", "Nivel único", "Terreno 3,920 sqft", "Construida 1936"],
    photos: 0,
    media: [
      "https://maps.googleapis.com/maps/api/streetview?location=237+N+Montebello+Blvd%2C+Montebello%2C+CA+90640&size=576x432&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&&signature=1qCFNFuhQIg6h_V7xTlUFXniF9A="
    ]
  },

  // ─── 2 ──────────────────────────────────────────────────
  {
    id: "propiedad-2",
    status: "Sold",
    title: "Casa Familiar en Compton",
    location: "1824 E Kay St, Compton, CA 90221",
    beds: 3, baths: 2, area: "1,400 sqft", price: "$405,000",
    soldDate: "01/10/2019",
    cover: "assets/propiedades/propiedad-2/slide-1.jpg",
    description: "Casa unifamiliar de 1,400 sqft con 3 recámaras y 2 baños, construida en 1948. Lote de 6,534 sqft con patio trasero y 4 espacios de estacionamiento.",
    features: ["3 Recámaras", "2 Baños", "Patio Trasero", "4 Estacionamientos", "Terreno 6,534 sqft"],
    photos: 1,
    media: [
      "assets/propiedades/propiedad-2/slide-1.jpg"
    ]
  },

  // ─── 3 ──────────────────────────────────────────────────
  {
    id: "propiedad-3",
    status: "Sold",
    title: "Dúplex de Inversión en San Bernardino",
    location: "1496 N Belle St, San Bernardino, CA 92404",
    beds: 4, baths: 2, area: "1,440 sqft", price: "$235,000",
    soldDate: "06/01/2018",
    cover: "assets/propiedades/propiedad-3/slide-1.jpg",
    description: "Dúplex con 2 unidades independientes, 4 recámaras en total. Construido en 1948 en lote de 5,100 sqft. Gran oportunidad de inversión en San Bernardino.",
    features: ["Dúplex", "2 Unidades", "4 Recámaras", "Inversión", "Terreno 5,100 sqft"],
    photos: 6,
    media: [
      "assets/propiedades/propiedad-3/slide-1.jpg",
      "assets/propiedades/propiedad-3/slide-2.jpg",
      "assets/propiedades/propiedad-3/slide-3.jpg",
      "assets/propiedades/propiedad-3/slide-4.jpg",
      "assets/propiedades/propiedad-3/slide-5.jpg",
      "assets/propiedades/propiedad-3/slide-6.jpg"
    ]
  },

  // ─── 4 ──────────────────────────────────────────────────
  {
    id: "propiedad-4",
    status: "Sold",
    title: "Comunidad de Bungalows en Los Angeles",
    location: "5111 Ascot Ave, Los Angeles, CA 90011",
    beds: 5, baths: 6, area: "2,745 sqft", price: "$700,000",
    soldDate: "04/16/2018",
    cover: "assets/propiedades/propiedad-4/slide-1.jpg",
    description: "Propiedad multifamiliar única: 6 bungalows independientes sobre lote de 7,501 sqft. Construida en 1924, incluye 1 ADU nuevo. Alto potencial de renta en el sur de Los Angeles.",
    features: ["6 Bungalows", "Multi-Familiar", "ADU Incluido", "6 Estacionamientos", "Lote 7,501 sqft"],
    photos: 8,
    media: [
      "assets/propiedades/propiedad-4/slide-1.jpg",
      "assets/propiedades/propiedad-4/slide-2.jpg",
      "assets/propiedades/propiedad-4/slide-3.jpg",
      "assets/propiedades/propiedad-4/slide-4.jpg",
      "assets/propiedades/propiedad-4/slide-5.jpg",
      "assets/propiedades/propiedad-4/slide-6.jpg",
    ]
  },

  // ─── 5 ──────────────────────────────────────────────────
  {
    id: "propiedad-5",
    status: "Sold",
    title: "Casa Remodelada en Colton",
    location: "2277 E Mountain Woods St, Colton, CA 92324",
    beds: 3, baths: 2, area: "1,276 sqft", price: "$305,000",
    soldDate: "01/11/2018",
    cover: "https://maps.googleapis.com/maps/api/streetview?location=2277+E+Mountain+Woods+St%2C+Colton%2C+CA+92324&size=576x432&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&&signature=g-Zt5pQYqirR_XmAjYGawxYg174=",
    description: "Hermosa casa remodelada de 3 recámaras y 2 baños con pisos de madera laminada. Recámara principal con baño privado, chimenea y vistas al agua. Garage para 2 autos. Ideal para compradores primerizos.",
    features: ["3 Recámaras", "2 Baños", "Garage 2 Autos", "Piso Laminado", "Chimenea", "Vista al Agua"],
    photos: 0,
    media: [
      "https://maps.googleapis.com/maps/api/streetview?location=2277+E+Mountain+Woods+St%2C+Colton%2C+CA+92324&size=576x432&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&&signature=g-Zt5pQYqirR_XmAjYGawxYg174="
    ]
  },

  /* ─── 6 ──────────────────────────────────────────────────
  {
    id: "propiedad-6",
    status: "Sold",
    title: "Casa en South Los Angeles",
    location: "923 E 106th St, Los Angeles, CA 90002",
    beds: 3, baths: 1, area: "1,107 sqft", price: "$337,000",
    soldDate: "12/27/2017",
    cover: "assets/propiedades/propiedad-6/slide-1.jpg",
    description: "Casa unifamiliar de 1,107 sqft con 3 recámaras y 1 baño, construida en 1952. Lote de 5,409 sqft en el sureste de Los Angeles.",
    features: ["3 Recámaras", "1 Baño", "Terreno 5,409 sqft", "Construida 1952", "Zona Urbana"],
    photos: 1,
    media: [
      "assets/propiedades/propiedad-6/slide-1.jpg"
    ]
  },
*/
  // ─── 7 ──────────────────────────────────────────────────
  {
    id: "propiedad-7",
    status: "Sold",
    title: "Casa en Lote Esquinero — Long Beach",
    location: "5690 Orizaba Ave, Long Beach, CA 90805",
    beds: 3, baths: 1, area: "1,160 sqft", price: "$450,000",
    soldDate: "10/28/2016",
    cover: "assets/propiedades/propiedad-7/slide-1.jpg",
    description: "Hermosa casa lista para mudarse en Long Beach, ubicada en amplio lote esquinero de 5,227 sqft. 3 recámaras, 1 baño, aire central. Construida en 1964.",
    features: ["3 Recámaras", "1 Baño", "Lote Esquinero", "Aire Central", "Lote 5,227 sqft"],
    photos: 14,
    media: [
      "assets/propiedades/propiedad-7/slide-1.jpg",
      "assets/propiedades/propiedad-7/slide-2.jpg",
      "assets/propiedades/propiedad-7/slide-3.jpg",
      "assets/propiedades/propiedad-7/slide-4.jpg",
      "assets/propiedades/propiedad-7/slide-5.jpg",
      "assets/propiedades/propiedad-7/slide-6.jpg",
      "assets/propiedades/propiedad-7/slide-7.jpg",
      "assets/propiedades/propiedad-7/slide-8.jpg",
      "assets/propiedades/propiedad-7/slide-9.jpg",
    ]
  },

  // ─── 8 ──────────────────────────────────────────────────
  {
    id: "propiedad-8",
    status: "Sold",
    title: "Casa Multifamiliar Remodelada — Los Angeles",
    location: "207 E 74th St, Los Angeles, CA 90003",
    beds: 9, baths: 5, area: "4,016 sqft", price: "$630,000",
    soldDate: "10/25/2016",
    cover: "assets/propiedades/propiedad-8/slide-1.jpg",
    description: "Impresionante propiedad multifamiliar de 4,016 sqft con 9 recámaras y 5 baños. Construida en 2011, completamente remodelada con A/C central, electrodomésticos nuevos y pisos de madera. Garage independiente.",
    features: ["9 Recámaras", "5 Baños", "A/C Central", "Remodelada", "Garage Independiente", "Multi-Familiar"],
    photos: 10,
    media: [
      "assets/propiedades/propiedad-8/slide-1.jpg",
      "assets/propiedades/propiedad-8/slide-2.jpg",
      "assets/propiedades/propiedad-8/slide-3.jpg",
      "assets/propiedades/propiedad-8/slide-4.jpg",
      "assets/propiedades/propiedad-8/slide-5.jpg",
      "assets/propiedades/propiedad-8/slide-6.jpg",
      "assets/propiedades/propiedad-8/slide-7.jpg",
      "assets/propiedades/propiedad-8/slide-8.jpg",
      "assets/propiedades/propiedad-8/slide-9.jpg",
    ]
  },

  // ─── 9 ──────────────────────────────────────────────────
  {
    id: "propiedad-9",
    status: "Sold",
    title: "Casa Unifamiliar en South Gate",
    location: "9305 Elizabeth Ave, South Gate, CA 90280",
    beds: 2, baths: 1, area: "960 sqft", price: "$329,000",
    soldDate: "11/04/2014",
    cover: "https://maps.googleapis.com/maps/api/streetview?location=9305+Elizabeth+Ave%2C+South+Gate%2C+CA+90280&size=576x432&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&&signature=rqQ6C-1GKSmpKPDk3aDUWsXFL8w=",
    description: "Casa unifamiliar de 960 sqft con 2 recámaras y 1 baño, construida en 1934. Amplio terreno de 6,969 sqft en South Gate.",
    features: ["2 Recámaras", "1 Baño", "Terreno 6,969 sqft", "2 Estacionamientos", "Construida 1934"],
    photos: 0,
    media: [
      "https://maps.googleapis.com/maps/api/streetview?location=9305+Elizabeth+Ave%2C+South+Gate%2C+CA+90280&size=576x432&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&&signature=rqQ6C-1GKSmpKPDk3aDUWsXFL8w="
    ]
  },

  // ─── 10 ─────────────────────────────────────────────────
  {
    id: "propiedad-10",
    status: "Sold",
    title: "Casa de Entrada en Compton",
    location: "400 S Bullis Rd, Compton, CA 90221",
    beds: 3, baths: 1, area: "965 sqft", price: "$197,000",
    soldDate: "10/23/2014",
    cover: "https://maps.googleapis.com/maps/api/streetview?location=400+S+Bullis+Rd%2C+Compton%2C+CA+90221&size=576x432&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&&signature=8j2knBnPnlEMvrD7ajwK_gT7vSE=",
    description: "Casa unifamiliar de 965 sqft con 3 recámaras y 1 baño, construida en 1944 en lote de 6,141 sqft en Compton.",
    features: ["3 Recámaras", "1 Baño", "Terreno 6,141 sqft", "Construida 1944"],
    photos: 0,
    media: [
      "https://maps.googleapis.com/maps/api/streetview?location=400+S+Bullis+Rd%2C+Compton%2C+CA+90221&size=576x432&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&&signature=8j2knBnPnlEMvrD7ajwK_gT7vSE ="
    ]
  },

  // ─── 11 ─────────────────────────────────────────────────
  {
    id: "propiedad-11",
    status: "Sold",
    title: "Casa con Planta Abierta en Compton",
    location: "1300 N Tamarind Ave, Compton, CA 90222",
    beds: 3, baths: 2, area: "1,520 sqft", price: "$385,000",
    soldDate: "01/22/2018",
    cover: "assets/propiedades/propiedad-11/slide-1.jpg",
    description: "Bella casa de 3 recámaras y 2 baños con planta abierta y garage para 2 autos. A/C central, fácil acceso a autopistas. Construida en 1985 en lote de 4,965 sqft.",
    features: ["3 Recámaras", "2 Baños", "Planta Abierta", "Garage 2 Autos", "A/C Central"],
    photos: 1,
    media: [
      "assets/propiedades/propiedad-11/slide-1.jpg"
    ]
  },

  // ─── 12 ─────────────────────────────────────────────────
  {
    id: "propiedad-12",
    status: "Pending",
    title: "Casa con Sala Familiar y Chimenea — Compton",
    location: "2717 W Tichenor St, Compton, CA 90220",
    beds: 4, baths: 2, area: "1,764 sqft", price: "$665,000",
    soldDate: "03/16/2026",
    cover: "assets/propiedades/propiedad-12/slide-1.jpg",
    description: "Atractiva propiedad de 4 recámaras y 2 baños en lote de 5,248 sqft. Sala familiar con chimenea, piso de madera y ventana panorámica. Garage para 2 autos. Potencial ADU.",
    features: ["4 Recámaras", "2 Baños", "Chimenea", "Garage 2 Autos", "Patio Trasero", "Potencial ADU", "Piso de Madera"],
    photos: 35,
    media: [
      "assets/propiedades/propiedad-12/slide-1.jpg",
      "assets/propiedades/propiedad-12/slide-2.jpg",
      "assets/propiedades/propiedad-12/slide-3.jpg",
      "assets/propiedades/propiedad-12/slide-4.jpg",
      "assets/propiedades/propiedad-12/slide-5.jpg",
      "assets/propiedades/propiedad-12/slide-6.jpg",
      "assets/propiedades/propiedad-12/slide-7.jpg",
      "assets/propiedades/propiedad-12/slide-8.jpg",
      "assets/propiedades/propiedad-12/slide-9.jpg",
      "assets/propiedades/propiedad-12/slide-10.jpg",
      "assets/propiedades/propiedad-12/slide-11.jpg",
      "assets/propiedades/propiedad-12/slide-12.jpg",
      "assets/propiedades/propiedad-12/slide-13.jpg",
      "assets/propiedades/propiedad-12/slide-14.jpg",
      "assets/propiedades/propiedad-12/slide-15.jpg",
    ]
  },

  // ─── 13 ─────────────────────────────────────────────────
  {
    id: "propiedad-13",
    status: "Sold",
    title: "Casa Familiar en Compton — McKinley",
    location: "15508 S McKinley Ave, Compton, CA 90220",
    beds: 3, baths: 2, area: "1,422 sqft", price: "$275,000",
    soldDate: "09/26/2013",
    cover: "assets/propiedades/propiedad-13/slide-1.jpg",
    description: "Casa unifamiliar de 3 recámaras y 2 baños, construida en 1965 en lote de 6,272 sqft. Tramitada por la agente Laura D'Hernandez de RE/MAX College Park Realty.",
    features: ["3 Recámaras", "2 Baños", "Terreno 6,272 sqft", "2 Estacionamientos", "Construida 1965"],
    photos: 2,
    media: [
      "assets/propiedades/propiedad-13/slide-1.jpg",
      "assets/propiedades/propiedad-13/slide-2.jpg"
    ]
  },

  // ─── 14 ─────────────────────────────────────────────────
  {
    id: "propiedad-14",
    status: "Sold",
    title: "Dúplex en Wilmington",
    location: "1320 E Colon St, Wilmington, CA 90744",
    beds: 4, baths: 2, area: "1,522 sqft", price: "$305,000",
    soldDate: "08/28/2019",
    cover: "https://maps.googleapis.com/maps/api/streetview?location=1320+E+Colon+St%2C+Wilmington%2C+CA+90744&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=ZVIY1ku3JooCMv5qnVf8vU7C5V0=",
    description: "Dúplex con 2 unidades de 2 recámaras y 1 baño cada una. Construido en 1938 en lote de 5,000 sqft en Wilmington.",
    features: ["Dúplex", "2 Unidades", "4 Recámaras Total", "2 Estacionamientos", "Construido 1938"],
    photos: 0,
    media: [
      "https://maps.googleapis.com/maps/api/streetview?location=1320+E+Colon+St%2C+Wilmington%2C+CA+90744&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=ZVIY1ku3JooCMv5qnVf8vU7C5V0="
    ]
  },

  // ─── 15 ─────────────────────────────────────────────────
  {
    id: "propiedad-15",
    status: "Sold",
    title: "Casa Acogedora en Carson",
    location: "335 W 235th St, Carson, CA 90745",
    beds: 3, baths: 1, area: "968 sqft", price: "$255,000",
    soldDate: "09/13/2012",
    cover: "https://maps.googleapis.com/maps/api/streetview?location=335+W+235th+St%2C+Carson%2C+CA+90745&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=XJpa-FUUc-6SiH2OQ6EGAS7ahzg=",
    description: "Hermosa casa de 3 recámaras y 1 baño en Carson, construida en 1952. Terreno de 5,333 sqft, cerca de escuelas y con fácil acceso a autopistas.",
    features: ["3 Recámaras", "1 Baño", "Terreno 5,333 sqft", "Construida 1952"],
    photos: 0,
    media: [
      "https://maps.googleapis.com/maps/api/streetview?location=335+W+235th+St%2C+Carson%2C+CA+90745&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=XJpa-FUUc-6SiH2OQ6EGAS7ahzg="
    ]
  },

  // ─── 16 ─────────────────────────────────────────────────
  {
    id: "propiedad-16",
    status: "Sold",
    title: "Casa para Primer Comprador — Colton",
    location: "1330 Rialto Ave, Colton, CA 92324",
    beds: 4, baths: 2, area: "1,390 sqft", price: "$120,000",
    soldDate: "07/26/2012",
    cover: "https://maps.googleapis.com/maps/api/streetview?location=1330+Rialto+Ave%2C+Colton%2C+CA+92324&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=JR0ZRM3pndzMFi3QYVjUIozleyk=",
    description: "Gran oportunidad para compradores primerizos: 4 recámaras, 2 baños en lote de 6,969 sqft con garage independiente. Construida en 1937 en Colton.",
    features: ["4 Recámaras", "2 Baños", "Terreno 6,969 sqft", "Garage Independiente", "Primer Comprador"],
    photos: 0,
    media: [
      "https://maps.googleapis.com/maps/api/streetview?location=1330+Rialto+Ave%2C+Colton%2C+CA+92324&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=JR0ZRM3pndzMFi3QYVjUIozleyk="
    ]
  },

  // ─── 17 ─────────────────────────────────────────────────
  {
    id: "propiedad-17",
    status: "Sold",
    title: "Casa en Paramount",
    location: "15132 Castana Ave, Paramount, CA 90723",
    beds: 3, baths: 1, area: "880 sqft", price: "$175,000",
    soldDate: "11/07/2011",
    cover: "https://maps.googleapis.com/maps/api/streetview?location=15132+Castana+Ave%2C+Paramount%2C+CA+90723&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=DBk5KcX_x4cZiykbIHP5a6R7mtU=",
    description: "Casa de 3 recámaras y 1 baño con ubicación conveniente en Paramount, construida en 1940 en lote de 3,049 sqft. Cerca de escuelas y Paramount High School.",
    features: ["3 Recámaras", "1 Baño", "Lote 3,049 sqft", "Construida 1940"],
    photos: 0,
    media: [
      "https://maps.googleapis.com/maps/api/streetview?location=15132+Castana+Ave%2C+Paramount%2C+CA+90723&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=DBk5KcX_x4cZiykbIHP5a6R7mtU="
    ]
  },

  // ─── 18 ─────────────────────────────────────────────────
  {
    id: "propiedad-18",
    status: "Sold",
    title: "Propiedad Multifamiliar en Signal Hill",
    location: "967 E Vernon St, Signal Hill, CA 90755",
    beds: 4, baths: 2, area: "2,060 sqft", price: "$499,000",
    soldDate: "N/A",
    cover: "https://maps.googleapis.com/maps/api/streetview?location=967+E+Vernon+St%2C+Signal+Hill%2C+CA+90755&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=iLHAiMhZuSI4rFE7QjxDEuwUbDk=",
    description: "Propiedad multifamiliar de 2,060 sqft construida en 1948. Lote de 6,499 sqft con 3 espacios de estacionamiento en Signal Hill, cerca de Long Beach.",
    features: ["Multi-Familiar", "2,060 sqft", "3 Estacionamientos", "Lote 6,499 sqft", "Construida 1948"],
    photos: 0,
    media: [
      "https://maps.googleapis.com/maps/api/streetview?location=967+E+Vernon+St%2C+Signal+Hill%2C+CA+90755&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=iLHAiMhZuSI4rFE7QjxDEuwUbDk="
    ]
  },

  // ─── 19 ─────────────────────────────────────────────────
  {
    id: "propiedad-19",
    status: "Sold",
    title: "Casa Encantadora en Wilmington",
    location: "837 E 246th St, Wilmington, CA 90744",
    beds: 4, baths: 2, area: "1,528 sqft", price: "$250,000",
    soldDate: "04/06/2012",
    cover: "assets/propiedades/propiedad-19/slide-1.jpg",
    description: "Casa encantadora de 4 recámaras en zona muy deseada de Wilmington. Cocina actualizada con granito, A/C central en lote de 6,969 sqft. Construida en 1944.",
    features: ["4 Recámaras", "2 Baños", "Cocina con Granito", "A/C Central", "Lote 6,969 sqft"],
    photos: 2,
    media: [
      "assets/propiedades/propiedad-19/slide-1.jpg",
      "assets/propiedades/propiedad-19/slide-2.jpg"
    ]
  },

  // ─── 20 ─────────────────────────────────────────────────
  {
    id: "propiedad-20",
    status: "Sold",
    title: "Casa Familiar con Chimenea en Ontario",
    location: "2540 S Mildred Pl, Ontario, CA 91761",
    beds: 5, baths: 2, area: "2,402 sqft", price: "$270,000",
    soldDate: "11/29/2011",
    cover: "https://maps.googleapis.com/maps/api/streetview?location=2540+S+Mildred+Pl%2C+Ontario%2C+CA+91761&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=dF65KH0rZgdp3tbyjCdBrN4zv_E=",
    description: "Amplia casa familiar de 5 recámaras, 2 baños y 2,402 sqft en vecindario bien mantenido de Ontario. Chimenea, A/C central, garage para 4 autos. Lote de 7,405 sqft.",
    features: ["5 Recámaras", "2 Baños", "Chimenea", "A/C Central", "Garage 4 Autos", "Lote 7,405 sqft"],
    photos: 0,
    media: [
      "https://maps.googleapis.com/maps/api/streetview?location=2540+S+Mildred+Pl%2C+Ontario%2C+CA+91761&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=dF65KH0rZgdp3tbyjCdBrN4zv_E="
    ]
  },

  // ─── 21 ─────────────────────────────────────────────────
  {
    id: "propiedad-21",
    status: "Sold",
    title: "Casa para Primer Comprador — Hesperia",
    location: "15795 Dalscote St, Hesperia, CA 92345",
    beds: 2, baths: 1, area: "972 sqft", price: "$74,000",
    soldDate: "09/29/2011",
    cover: "https://maps.googleapis.com/maps/api/streetview?location=15795+Dalscote+St%2C+Hesperia%2C+CA+92345&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=EgZC1na0ExrVEv75_qGmY6x7VuE=",
    description: "Excelente oportunidad para compradores primerizos en Hesperia. 2 recámaras, 1 baño, A/C central. Amplio lote de 0.46 acres con vista territorial. Construida en 1995.",
    features: ["2 Recámaras", "1 Baño", "A/C Central", "Lote 0.46 Acres", "Vista Territorial"],
    photos: 0,
    media: [
      "https://maps.googleapis.com/maps/api/streetview?location=15795+Dalscote+St%2C+Hesperia%2C+CA+92345&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=EgZC1na0ExrVEv75_qGmY6x7VuE="
    ]
  },

  // ─── 22 ─────────────────────────────────────────────────
  {
    id: "propiedad-22",
    status: "Sold",
    title: "Casa en Vecindario Tranquilo — Lakewood",
    location: "4375 Levelside Ave, Lakewood, CA 90712",
    beds: 2, baths: 1, area: "966 sqft", price: "$326,000",
    soldDate: "04/20/2011",
    cover: "https://maps.googleapis.com/maps/api/streetview?location=4375+Levelside+Ave%2C+Lakewood%2C+CA+90712&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=pETFoX8vjASmg3dHYzMq_6AkdI8=",
    description: "Casa de 2 recámaras y 1 baño en vecindario tranquilo de Lakewood. Construida en 1952 con A/C central en lote de 5,662 sqft. Ideal para compradores primerizos.",
    features: ["2 Recámaras", "1 Baño", "A/C Central", "Lote 5,662 sqft", "Construida 1952"],
    photos: 0,
    media: [
      "https://maps.googleapis.com/maps/api/streetview?location=4375+Levelside+Ave%2C+Lakewood%2C+CA+90712&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=pETFoX8vjASmg3dHYzMq_6AkdI8="
    ]
  },

  // ─── 23 ─────────────────────────────────────────────────
  {
    id: "propiedad-23",
    status: "Sold",
    title: "Casa As-Is en San Bernardino",
    location: "1172 W 15th St, San Bernardino, CA 92411",
    beds: 3, baths: 1, area: "1,149 sqft", price: "$87,500",
    soldDate: "12/08/2010",
    cover: "https://maps.googleapis.com/maps/api/streetview?location=1172+W+15th+St%2C+San+Bernardino%2C+CA+92411&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=56_7xv2TgCxPw6t6YPUEJFyLRzs=",
    description: "Casa unifamiliar de nivel único con 3 recámaras y 1 baño en San Bernardino. Vendida en condición 'as-is'. Lote de 6,534 sqft con garage independiente. Construida en 1943.",
    features: ["3 Recámaras", "1 Baño", "Garage Independiente", "Terreno 6,534 sqft", "As-Is"],
    photos: 0,
    media: [
      "https://maps.googleapis.com/maps/api/streetview?location=1172+W+15th+St%2C+San+Bernardino%2C+CA+92411&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=56_7xv2TgCxPw6t6YPUEJFyLRzs="
    ]
  },

  // ─── 24 ─────────────────────────────────────────────────
  {
    id: "propiedad-24",
    status: "Sold",
    title: "Casa As-Is en Highland",
    location: "6983 Olive St, Highland, CA 92346",
    beds: 3, baths: 1, area: "1,188 sqft", price: "$83,000",
    soldDate: "07/22/2010",
    cover: "https://maps.googleapis.com/maps/api/streetview?location=6983+Olive+St%2C+Highland%2C+CA+92346&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=gDW1VD2xHYALaGzPgfxqGde_jlM=",
    description: "Casa unifamiliar de 3 recámaras y 1.5 baños en Highland, construida en 1958. Lote de 7,405 sqft con garage independiente. Vendida en condición 'as-is'.",
    features: ["3 Recámaras", "1.5 Baños", "Terreno 7,405 sqft", "Garage Independiente", "As-Is"],
    photos: 0,
    media: [
      "https://maps.googleapis.com/maps/api/streetview?location=6983+Olive+St%2C+Highland%2C+CA+92346&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=gDW1VD2xHYALaGzPgfxqGde_jlM="
    ]
  },

  // ─── 25 ─────────────────────────────────────────────────
  {
    id: "propiedad-25",
    status: "Sold",
    title: "Venta Corta Familiar — Ontario",
    location: "2540 S Mildred Pl, Ontario, CA 91761",
    beds: 5, baths: 2, area: "2,402 sqft", price: "$170,000",
    soldDate: "04/07/2016",
    cover: "https://maps.googleapis.com/maps/api/streetview?location=2540+S+Mildred+Pl%2C+Ontario%2C+CA+91761&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=dF65KH0rZgdp3tbyjCdBrN4zv_E=",
    description: "Venta corta aprobada. Gran casa familiar de 5 recámaras en vecindario bien mantenido de Ontario. Chimenea, A/C central, garage para 4 autos en lote de 7,405 sqft.",
    features: ["5 Recámaras", "2 Baños", "Venta Corta", "Chimenea", "A/C Central", "Garage 4 Autos"],
    photos: 0,
    media: [
      "https://maps.googleapis.com/maps/api/streetview?location=2540+S+Mildred+Pl%2C+Ontario%2C+CA+91761&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=dF65KH0rZgdp3tbyjCdBrN4zv_E="
    ]
  },

  // ─── 26 ─────────────────────────────────────────────────
  {
    id: "propiedad-26",
    status: "Sold",
    title: "Casa As-Is en Highland — 2015",
    location: "6983 Olive St, Highland, CA 92346",
    beds: 3, baths: 1, area: "1,188 sqft", price: "$100,000",
    soldDate: "04/10/2015",
    cover: "https://maps.googleapis.com/maps/api/streetview?location=6983+Olive+St%2C+Highland%2C+CA+92346&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=gDW1VD2xHYALaGzPgfxqGde_jlM=",
    description: "Casa unifamiliar de 3 recámaras y 1.5 baños en Highland. Vendida en condición 'as-is' sin garantías ni reparaciones. Lote de 7,405 sqft con garage independiente.",
    features: ["3 Recámaras", "1.5 Baños", "Terreno 7,405 sqft", "Garage Independiente", "As-Is"],
    photos: 0,
    media: [
      "https://maps.googleapis.com/maps/api/streetview?location=6983+Olive+St%2C+Highland%2C+CA+92346&size=960x720&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&signature=gDW1VD2xHYALaGzPgfxqGde_jlM="
    ]
  }

]
};