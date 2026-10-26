import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs",
  description: "Rumah Roti yang dijalankan Yayasan Heesu hari ini, dan arsip terapi serta pendidikan dari masa perawatan anak.",
};

const therapies = [
  {
    title: "Fisioterapi",
    body: "Ilmu yang menstabilkan atau memperbaiki gangguan fungsi gerak, lalu dilanjutkan dengan terapi gerak. Menurut Keputusan Menteri Kesehatan No. 778 Tahun 2008, fisioterapi mengembangkan, memelihara, dan memulihkan gerak dan fungsi sepanjang daur kehidupan dengan modalitas fisik, mekanis, gerak, dan komunikasi. Latihannya bisa berupa olahraga khusus, penguluran, teknik tertentu, dan alat bantu ketika latihan biasa belum cukup.",
  },
  {
    title: "Okupasi terapi",
    body: "Layanan bagi gangguan fisik dan atau mental lewat aktivitas terpilih, agar seseorang lebih mandiri dalam kegiatan sehari-hari, produktivitas, dan waktu luang. Terapis bekerja bersama anak, keluarga, dan lingkungan: meningkatkan kemampuan, atau menyesuaikan aktivitas dan ruang agar keterlibatan itu mungkin.",
  },
  {
    title: "Terapi wicara",
    body: "Pendampingan agar komunikasi bicara lebih dikuasai. Diberikan antara lain pada keterlambatan bicara, pascaoperasi celah bibir dan langit-langit, hambatan tumbuh kembang seperti autisme, down syndrome, tunarungu, dan cerebral palsy, serta gagap, cadel, dan kehilangan kemampuan bicara setelah stroke. Sebabnya berbeda-beda, sehingga perlu penapisan sebelum jalan terapinya ditentukan.",
  },
];

const nursery = [
  ["Pemberian multivitamin", "Untuk semua anak, terutama yang kondisinya kurang fit."],
  ["Peningkatan gizi", "Program dan pemantauan bagi anak yang mengalami kekurangan gizi."],
  ["Terapi kejang", "Pengobatan rutin bagi anak yang mengalami kejang."],
  ["Penanganan penyakit", "Pengobatan untuk batuk, pilek, demam, dan sakit sehari-hari."],
];

const community = [
  {
    year: "2014",
    title: "Open house bersama Thomas Huis Steenwijk",
    body: "Thomas Huis adalah rumah perawatan penyandang disabilitas di Belanda. Lewat Diane White dari American Women Association, Yayasan Heesu diperkenalkan kepada Mrs. Henriette Koenen. Thomas Huis lalu memberi donasi bulanan untuk sebagian operasional, dan tertarik pada program tahunan bagi masyarakat sekitar. Open house 22 Februari 2014 mengundang warga Desa Situsari: jajanan dan sembako gratis, panggung anak-anak dan karyawan, serta penampilan artis cilik Sasha. Pengurus Thomas Huis datang dari Belanda, bersama pengurus dari PT. Jaya Samudera Karunia.",
  },
  {
    year: "2015",
    title: "Bagi sembako Thomas Huis",
    body: "Setelah menemani Heesu sejak 2013, Thomas Huis mengadakan pembagian sembako gratis bagi masyarakat sekitar dan karyawan. Sebuah penghargaan karena desa dan staf telah membantu merawat anak-anak.",
  },
  {
    year: "2013",
    title: "Seoul Chamber Society",
    body: "Grup orkestra klasik dari Korea Selatan ini datang dalam rangkaian Korea Festival oleh Korea Foundation. Heesu dipilih sebagai tempat pagelaran sederhana berbentuk social charity. Perwakilan PT. Jaya Samudera Karunia turut hadir.",
  },
  {
    year: "Tiap tahun",
    title: "Kurban Idul Adha",
    body: "Paket daging kurban dibagikan kepada masyarakat sekitar. Hewan kurban berasal dari donatur, dan pemotongan dilakukan pemuka agama serta tokoh masyarakat setempat.",
  },
  {
    year: "2013",
    title: "Pengobatan gratis bersama Hilal Ahmar",
    body: "Bersama Organisasi Hilal Ahmar Jakarta dan Baitul Maal Abdurrahman bin Auf Cabang Jakarta, Heesu membuka pengobatan gratis. Tim dokter bekerja dengan karyawan yayasan, termasuk perawat Heesu.",
  },
];

export default function ProgramsPage() {
  return (
    <main>
      <header className="mx-auto w-full max-w-6xl px-5 pb-6 pt-14 sm:px-8">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Programs</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] sm:text-6xl">
          Yang berjalan hari ini adalah Rumah Roti.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          Di bawah naungan Yayasan Heesu, rumah ini merawat 85 orang tua terlantar dan orang dengan gangguan jiwa. Terapi dan pendidikan di bagian bawah adalah arsip masa Heesu mengasuh anak-anak.
        </p>
      </header>

      <section id="rumah-roti" className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
        <div className="grid gap-6 rounded-[1.6rem] bg-navy p-7 text-sand sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-leaf">Rumah Roti</p>
            <h2 className="mt-3 font-display text-4xl text-white">85 jiwa, satu naungan.</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="leading-8">
              Warga tinggal, makan, dan berkumpul di rumah yang sama. Pengasuh menemani hari-hari itu, termasuk saat pemeriksaan kesehatan datang ke dalam rumah.
            </p>
            <Link href="/rumah-roti" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy">
              Lihat Rumah Roti
            </Link>
          </div>
        </div>
      </section>

      <section id="therapies" className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Arsip panti anak</p>
        <h2 className="mt-3 font-display text-4xl">Therapies</h2>
        <p className="mt-3 max-w-2xl leading-7 text-muted">
          Program di bawah ini dijalankan ketika Heesu merawat anak penyandang disabilitas ganda. Anak-anak itu tidak lagi tinggal di sini.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {therapies.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] bg-white p-6 ring-1 ring-line">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/80">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="bg-navy text-sand">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-leaf">Special education</p>
            <h2 className="mt-3 font-display text-4xl text-white">Pendidikan luar biasa</h2>
          </div>
          <div className="space-y-4 leading-8 lg:col-span-8">
            <p>
              Pembelajaran yang menjawab karakteristik unik, yang tidak tertampung kurikulum sekolah biasa. Di lapangan, pendidikan luar biasa berarti kelas khusus, program khusus, atau layanan khusus bagi anak luar biasa.
            </p>
            <p>
              Pada masa itu, jalur ini juga menjadi pengembangan kompetensi: anak dilatih sesuai potensi yang masih dimiliki, bukan dipaksa masuk cetakan yang sama.
            </p>
          </div>
        </div>
      </section>

      <section id="care" className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Daily care</p>
        <h2 className="mt-3 font-display text-4xl">Perawatan harian</h2>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          {nursery.map(([title, text]) => (
            <div key={title} className="rounded-2xl bg-sand p-6">
              <dt className="font-display text-2xl">{title}</dt>
              <dd className="mt-2 leading-7 text-muted">{text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="community" className="border-t border-line">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">With the village</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl">Masyarakat sekitar adalah keluarga besar Heesu.</h2>
          <ol className="mt-10 space-y-8">
            {community.map((item) => (
              <li key={item.title} className="grid gap-3 border-t border-line pt-8 md:grid-cols-12">
                <p className="font-display text-2xl text-navy md:col-span-3">{item.year}</p>
                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-3 leading-8 text-ink/80">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
