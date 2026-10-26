import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { rumahRoti, rumahRotiFeatured, rumahRotiPhotos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rumah Roti",
  description:
    "Rumah Roti di bawah naungan Yayasan Heesu merawat 85 orang tua terlantar dan orang dengan gangguan jiwa di Cileungsi.",
};

const rhythms = [
  {
    title: "Tinggal bersama",
    text: "Aula, koridor, dan halaman adalah ruang harian. Banyak warga bergerak dengan kursi roda, dan pengasuh ada di antara mereka.",
  },
  {
    title: "Makan bersama",
    text: "Nasi di piring yang sama, di lantai aula, di beranda, atau di bawah pohon. Makan adalah bagian dari cara rumah ini berkumpul.",
  },
  {
    title: "Pemeriksaan",
    text: "Tenaga kesehatan datang dengan obat dan meja periksa. Pendampingan kesehatan dilakukan di dalam rumah, bukan dengan mengirim warga pergi sendiri.",
  },
];

export default function RumahRotiPage() {
  const hero = rumahRotiPhotos[3];

  return (
    <main>
      <header className="mx-auto w-full max-w-6xl px-5 pb-6 pt-14 sm:px-8">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Sekarang</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] sm:text-6xl">
          Rumah Roti, di bawah naungan Yayasan Heesu.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          Delapan puluh lima jiwa tinggal di sini: orang tua terlantar dan orang dengan gangguan jiwa (ODGJ). Heesu yang mengurus rumah ini. Yudany berdiri di sampingnya.
        </p>
      </header>

      <section className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <dl className="grid grid-cols-3 gap-4 border-y border-line py-6">
          {[
            [String(rumahRoti.residents), "Jiwa dirawat"],
            ["Heesu", "Yang menaungi"],
            ["Bogor", "Cileungsi"],
          ].map(([value, label]) => (
            <div key={label} className="min-w-0">
              <dt className="font-display text-3xl text-navy sm:text-4xl">{value}</dt>
              <dd className="mt-1 text-xs uppercase leading-snug tracking-[0.14em] text-muted">{label}</dd>
            </div>
          ))}
        </dl>
        <div className="relative mt-8 h-[46vw] min-h-56 max-h-[520px] overflow-hidden rounded-[2rem]">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section id="hari" className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Siapa yang tinggal</p>
            <h2 className="mt-3 font-display text-4xl leading-tight">Orang tua terlantar dan ODGJ.</h2>
          </div>
          <div className="space-y-5 leading-8 text-ink/85 lg:col-span-8">
            <p>
              Rumah Roti bukan daftar nama yang dipajang. Warga tidak kami sebut satu per satu. Yang dicatat adalah jumlahnya: 85 jiwa, dan dua kelompok yang rumah ini rawat — orang tua yang terlantar, serta orang dengan gangguan jiwa.
            </p>
            <p>
              Foto di halaman ini adalah kehidupan yang sedang berjalan: berkumpul, makan, menyapu halaman, duduk di beranda, dan menerima pemeriksaan. Semua itu di bawah naungan {rumahRoti.under}.
            </p>
          </div>
        </div>
        <div id="kesehatan" className="mt-12 grid gap-4 md:grid-cols-3">
          {rhythms.map((item) => (
            <article key={item.title} className="rounded-[1.4rem] bg-sand p-6">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Foto baru</p>
              <h2 className="mt-3 font-display text-4xl">Delapan puluh lima jiwa, satu rumah.</h2>
            </div>
            <Link href="/gallery" className="text-sm font-semibold uppercase tracking-[0.16em] text-navy">
              All photos
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {rumahRotiFeatured.map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper-deep">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Cuplikan</p>
        <h2 className="mt-3 font-display text-4xl">Sebentar di Rumah Roti.</h2>
        <video
          controls
          playsInline
          preload="metadata"
          className="mt-8 w-full rounded-[1.6rem] bg-ink"
          src="/videos/rumah-roti.mp4"
        />
        <p className="mt-8 max-w-2xl leading-8 text-muted">
          Masa anak-anak yang dulu diasuh Heesu disimpan di{" "}
          <Link href="/children" className="font-semibold text-navy underline decoration-leaf decoration-2 underline-offset-4">
            arsip sejarah
          </Link>
          . Yang masih dapat ditemui tinggal Vina dan dua anak lain, dititipkan di Yayasan Sayap Ibu.
        </p>
      </section>
    </main>
  );
}
