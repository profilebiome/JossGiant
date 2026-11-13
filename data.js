/* ===========================================================
   JOSS GIANT — datos compartidos
   Fuente: youtube.com/@jossgiant (Videos + Collaborations)
   =========================================================== */

const ARTIST = {
  name: "Joss Giant",
  alias: "LVDI",
  handle: "@jossgiant",
  channelUrl: "https://www.youtube.com/@jossgiant",
  videosUrl: "https://www.youtube.com/@jossgiant/videos",
  country: "Colombia",
  joined: "2017",
  subscribers: "1.99K",
  totalViews: "407K",
  videoCount: "15",
  tagline: "Trap, dembow y calle. Voz propia desde Colombia.",
  city: "Colombia",
};

const VIDEOS = [
  {
    id: "DP9Xo9iVnXY",
    title: "Enferma del Sex",
    raw: "Joss Giant - Enferma Del SEX (Video Oficial)",
    duration: "3:18",
    views: 5700,
    year: 2026,
    type: "Video Oficial",
    note: "Último estreno",
    featured: true,
  },
  {
    id: "F2Nf7Qh3psg",
    title: "Flow de Malandro",
    raw: "Joss Giant - FLOW DE MALANDRO (Video Oficial)",
    duration: "2:34",
    views: 22000,
    year: 2026,
    type: "Video Oficial",
    featured: true,
  },
  {
    id: "-aeNkB3-USg",
    title: "Pelky Walk (Remix)",
    raw: "@uzziel_official, @sombrapr-official, @jossgiant, @branleepr - Pelky Walk (Remix)",
    duration: "4:36",
    views: 33000,
    year: 2026,
    type: "Colaboración",
    note: "Uzziel · Sombra PR · Branlee PR",
  },
  {
    id: "wIZEXdKTtKc",
    title: "Pin Pan Pin Piru",
    raw: "Joss Giant, White Bear, Conep, Chal 777 - Pin Pan Pin Piru (Video Oficial)",
    duration: "4:53",
    views: 140000,
    year: 2025,
    type: "Colaboración",
    note: "White Bear · Conep · Chal 777",
    featured: true,
  },
  {
    id: "4GpkXth2EaI",
    title: "Lero Lero",
    raw: "Joss Giant - Lero Lero (VIDEO OFICIAL)",
    duration: "2:38",
    views: 38000,
    year: 2025,
    type: "Video Oficial",
  },
  {
    id: "dthJY1ZOCPk",
    title: "La Independiente",
    raw: "Joss Giant - La Independiente (VIDEO OFICIAL)",
    duration: "2:15",
    views: 35000,
    year: 2025,
    type: "Video Oficial",
  },
  {
    id: "5YvyiDbPvc8",
    title: "Rafael Leão",
    raw: "Joss Giant - Rafael Leão (VIDEO OFICIAL)",
    duration: "2:32",
    views: 66000,
    year: 2025,
    type: "Video Oficial",
  },
  {
    id: "M1I2wOCNZiE",
    title: "Toy Fugao",
    raw: "Joss Giant - TOY FUGAO (VIDEO OFICIAL)",
    duration: "2:51",
    views: 50000,
    year: 2025,
    type: "Video Oficial",
  },
  {
    id: "pcT3dmjePIE",
    title: "Nike Blanco",
    raw: "Joss Giant - NIKE BLANCO (VIDEO LYRIC)",
    duration: "2:24",
    views: 32000,
    year: 2025,
    type: "Lyric Video",
  },
  {
    id: "1_HL3PJx0so",
    title: "Peste a Pólvora",
    raw: "Joss Giant Feat Perla - PESTE A POLVORA (VIDEO NO OFICIAL)",
    duration: "3:17",
    views: 33000,
    year: 2024,
    type: "Feat. Perla",
  },
  {
    id: "glxAJd5d-gk",
    title: "602 Endo",
    raw: "Joss Giant - 602 ENDO (VIDEO OFICIAL)",
    duration: "2:10",
    views: 43000,
    year: 2024,
    type: "Video Oficial",
  },
  {
    id: "xI1Hq8Cl4p0",
    title: "27R",
    raw: "27R - JOSS GIANT [ Video Lyrics ]",
    duration: "2:18",
    views: 32000,
    year: 2024,
    type: "Lyric Video",
  },
];

const SHORTS = [
  { id: "pYwiPa71ZU4", title: "Toy Fugao", views: 1800 },
  { id: "6CghYY_g4w0", title: "Pin Pan Pin Piru", views: 1700 },
  { id: "VdLgzcdaLO8", title: "Salimos ya", views: 1000 },
  { id: "WlslSOI7zqs", title: "Roon", views: 767 },
  { id: "A1jNVLyYRp8", title: "Rafael Leão", views: 645 },
];

/* ---------- helpers compartidos ---------- */
const thumb = (id, big) =>
  `https://i.ytimg.com/vi/${id}/${big ? "maxresdefault" : "hqdefault"}.jpg`;

const fmtViews = (n) =>
  n >= 1000 ? (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1).replace(".0", "") + "K" : String(n);

const watchUrl = (id) => `https://www.youtube.com/watch?v=${id}`;
