export const contact = {
  homeName: 'Yayasan Heesu "Cahaya Cinta"',
  address: [
    "Desa Situsari Kampung Tunggilis",
    "No. 150 RT 02/07",
    "Kecamatan Cileungsi",
    "Kabupaten Bogor, 16280",
  ],
  phones: ["+62 21 527 5556", "+62 21 899 411 92"],
  email: "admin@yudanyfoundation.org",
  transferEmail: "admin@yudanifoundation.org",
  sms: "0813 1889 9232",
  smsHours: "08.00–17.00",
  bank: "Bank Mandiri Cabang KC. JKT. Sudirman",
  account: "1020006198110",
  accountName: "Yayasan Heesu",
  maps: "https://www.google.com/maps/search/?api=1&query=Kampung+Tunggilis+Desa+Situsari+Cileungsi+Bogor",
};

export const nav = [
  { href: "/who-we-are", label: "Who we are" },
  { href: "/children", label: "Children" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/give", label: "Ways to give" },
] as const;

export const children = [
  "Anis",
  "Bilal",
  "Cheryl",
  "Delvina",
  "Elfrida",
  "Elsa",
  "Esa",
  "Fauzia",
  "Johana",
  "Kharul",
  "Luqman",
  "Muhammad",
  "Rafli",
  "Ratna",
  "Rizal",
  "Siti",
  "Tharu",
  "Zahra",
] as const;

export const board = [
  {
    name: "Reny Juniarti",
    role: "Pembina",
    image: "/images/portraits/board/reny.jpg",
  },
  {
    name: "Yudha K. Tanos",
    role: "Pengawas",
    image: "/images/portraits/board/yudha.jpg",
  },
  {
    name: "Junita Setiawati",
    role: "Ketua Pengurus",
    image: "/images/portraits/board/junita.jpg",
  },
  {
    name: "Lilian Ariestya Ang",
    role: "Bendahara",
    image: "/images/portraits/board/lilian.jpg",
  },
] as const;

export const professionals = [
  "Iwan",
  "Handry",
  "Eka",
  "Tedi",
  "Diah",
  "Aurum",
  "Rio",
  "Nio",
  "Evi",
  "Alfian",
  "Hari",
  "Devi",
] as const;

export const donors = [
  "PT. Jaya Samudera Karunia Group",
  "BADA Group",
  "Thomas Huis Steenwijk",
  "Australian and New Zealand Association (ANZA)",
  "American Women Association (AWA)",
  "PT. Digitraffic Indonesia",
  "Yayasan Sekasa Mulia",
  "Bpk. Irawan Atmosudiro, PT. Tip Top Supermarket",
  "PT. Citra Abadi Sejati",
  "UCP Roda untuk Kemanusiaan Indonesia Yogyakarta",
  "Jakarta School of Prosthetic and Orthotic",
  "PT. Samick Indonesia",
  "Ibu Evy Juliana Sidy",
  "Ibu Marlin Tetty Damanik",
  "PT. Sayap Mas Utama",
  "PT. Sumber Alfaria Trijaya",
  "Ibu Christie dan rekan",
  "GKI Kayu Putih Jakarta",
  "Orangtua anak dan donatur pribadi lainnya",
] as const;

export type GalleryAlbum = {
  id: string;
  title: string;
  images: { src: string; alt: string }[];
};

export const albums: GalleryAlbum[] = [
  {
    id: "physiotherapy",
    title: "Fisioterapi",
    images: ["", "1", "2", "3", "4"].map((n) => ({
      src: `/images/gallery/physiotherapy/terapi${n}.jpg`,
      alt: "Sesi fisioterapi di Yayasan Heesu",
    })),
  },
  {
    id: "education",
    title: "Pendidikan khusus",
    images: ["0", "1", "2", "3", "4"].map((n) => ({
      src: `/images/gallery/education/pensus${n}.jpg`,
      alt: "Kegiatan pendidikan luar biasa di Yayasan Heesu",
    })),
  },
  {
    id: "perkins",
    title: "Perkins",
    images: ["", "1", "2", "3", "4"].map((n) => ({
      src: `/images/gallery/perkins/perkins${n}.jpg`,
      alt: "Kegiatan bersama Perkins di Yayasan Heesu",
    })),
  },
  {
    id: "speech",
    title: "Terapi wicara",
    images: ["", "1", "2"].map((n) => ({
      src: `/images/gallery/speech/wicara${n}.jpg`,
      alt: "Sesi terapi wicara di Yayasan Heesu",
    })),
  },
];

export function childImage(name: string) {
  return `/images/portraits/children/${name.toLowerCase()}.jpg`;
}

export function professionalImage(name: string) {
  return `/images/portraits/team/${name.toLowerCase()}.jpg`;
}
