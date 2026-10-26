import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who we are",
  description: "Sejarah, visi, misi, legalitas, dan lokasi Yayasan Yudany dan Yayasan Heesu.",
};

const missions = [
  "Mengantisipasi anak penyandang disabilitas ganda melalui pelayanan deteksi secara dini.",
  "Memberikan pelayanan rehabilitasi menyeluruh melalui program terapi fisik dan mental.",
  "Membimbing orang tua agar memiliki pengetahuan dan sikap yang tepat untuk merawat anak.",
  "Membimbing dan membina karyawan yayasan menjadi tenaga yang berdedikasi dan profesional.",
];

export default function WhoWeArePage() {
  return (
    <main>
      <header className="mx-auto w-full max-w-6xl px-5 pb-8 pt-14 sm:px-8">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Who we are</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] sm:text-6xl">
          Sebuah panti yang berdiri dari kepedulian.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          Yudany menaungi karya kasih ini. Heesu adalah rumah tempat karya itu dijalankan setiap hari.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
          <a href="#history" className="rounded-full bg-white px-4 py-2 ring-1 ring-line">History</a>
          <a href="#vision" className="rounded-full bg-white px-4 py-2 ring-1 ring-line">Vision</a>
          <a href="#legal" className="rounded-full bg-white px-4 py-2 ring-1 ring-line">Legalities</a>
          <a href="#visit" className="rounded-full bg-white px-4 py-2 ring-1 ring-line">Visit</a>
          <Link href="/care" className="rounded-full bg-navy px-4 py-2 text-white">Conditions we support</Link>
          <Link href="/people" className="rounded-full bg-navy px-4 py-2 text-white">Board & team</Link>
        </div>
      </header>

      <section id="history" className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-display text-6xl text-green">2008</p>
          <p className="mt-2 text-sm uppercase tracking-[0.16em] text-muted">11 November · Cileungsi</p>
        </div>
        <div className="space-y-5 leading-8 text-ink/85 lg:col-span-8">
          <h2 className="font-display text-4xl text-ink">History</h2>
          <p>
            Yayasan Heesu “Cahaya Cinta” didirikan pada 11 November 2008 oleh Poong Nam Choi, warga Korea Selatan, dan diresmikan Departemen Sosial Republik Indonesia pada 14 Maret 2009.
          </p>
          <p>
            Anak-anak di Heesu membutuhkan fisioterapi, terapi wicara, dan okupasi terapi. Mereka juga didampingi dokter anak, dokter neurologi, dokter ortopedi, dokter rehabilitasi medik, terapis, ahli gizi, psikolog, guru pendidikan luar biasa, dan tenaga medis lain.
          </p>
          <p>
            Saat awal berdiri, tim rehabilitasi hanya terdiri dari seorang fisioterapis, perawat, dan dokter umum. Novi, fisioterapis pertama, merangkap sebagai okupasi terapis dan terapi wicara demi memperbaiki kemampuan makan, gerak, dan bicara anak.
          </p>
          <p>
            Semua tenaga ahli sampai pengasuh diarahkan untuk menghidupkan suasana kekeluargaan. Heesu berdiri dari sekelompok profesional dan relawan yang peduli pada anak penyandang disabilitas ganda. Individu, perusahaan, komunitas, dan organisasi — dari dalam maupun luar negeri — datang membawa bakti sosial, donasi, atau sekadar kunjungan untuk menghibur anak-anak.
          </p>
        </div>
      </section>

      <section id="vision" className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Vision</p>
            <p className="mt-4 font-display text-3xl leading-snug">
              Menjadi panti perawatan anak penyandang disabilitas ganda yang terbaik dan terpercaya, agar pemberdayaan mereka seoptimal mungkin dan mereka lebih mandiri secara fisik dan sosial.
            </p>
          </div>
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Mission</p>
            <ol className="mt-4 space-y-4">
              {missions.map((item, index) => (
                <li key={item} className="flex gap-4 leading-7">
                  <span className="font-display text-xl text-green">0{index + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-2xl bg-paper p-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-navy">Objectives</p>
              <p className="mt-2 leading-7">
                Membantu anak penyandang disabilitas ganda yang terlantar, atau yang orang tuanya tidak mampu memberi perawatan. Melatih dan memberdayakan mereka agar potensi yang masih dimiliki dapat berkembang.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="legal" className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Legalities</p>
        <h2 className="mt-3 font-display text-4xl">Dua badan, satu karya.</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.6rem] bg-navy p-7 text-sand">
            <h3 className="font-display text-3xl text-white">Yayasan Kasih Karunia Yudany</h3>
            <dl className="mt-6 space-y-4 text-sm leading-6">
              <div>
                <dt className="uppercase tracking-[0.14em] text-leaf">Akta pendirian</dt>
                <dd className="mt-1">Notaris Meissie Pholuan, SH No. 02, 1 Agustus 2012. Plaza Bapindo, Menara Mandiri Lt. 15, Jl. Jend. Sudirman Kav. 54-55.</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.14em] text-leaf">SK Kemenkumham</dt>
                <dd className="mt-1">17 September 2012</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.14em] text-leaf">NPWP</dt>
                <dd className="mt-1">03.257.589.6-012.000</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.14em] text-leaf">Pengurus</dt>
                <dd className="mt-1">Pembina Reny Juniarti · Pengawas Yudha K. Tanos · Ketua Junita Setiawati · Sekretaris Susiani Nilawati · Bendahara Lilian Ariestya Ang</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.14em] text-leaf">Kekayaan awal</dt>
                <dd className="mt-1">Rp 500.000.000, berasal dari PT. JSKI yang dipisahkan.</dd>
              </div>
            </dl>
          </article>
          <article className="rounded-[1.6rem] bg-sand p-7 ring-1 ring-line">
            <h3 className="font-display text-3xl">Yayasan Heesu “Cahaya Cinta”</h3>
            <dl className="mt-6 space-y-4 text-sm leading-6">
              <div>
                <dt className="uppercase tracking-[0.14em] text-green">Akta pendirian</dt>
                <dd className="mt-1">No. 20, 29 April 2008, oleh H. Fedris, S.H. Berkantor di Kampung Tunggilis RT 02 RW 07, Desa Situsari, Cileungsi, Bogor.</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.14em] text-green">SK Kemenkumham</dt>
                <dd className="mt-1">23 Juni 2008</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.14em] text-green">NPWP</dt>
                <dd className="mt-1">02.728.794.5-436.000</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.14em] text-green">Pengurus</dt>
                <dd className="mt-1">Pembina Reny Juniarti dan Poong Nam Choi · Pengawas Yudha K. Tanos · Ketua Junita Setiawati · Sekretaris Novie Senja Irawanto · Bendahara Lilian Ariestya Ang dan Nowo Karyo Rahardjo</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.14em] text-green">Kekayaan awal</dt>
                <dd className="mt-1">Rp 500.000.000</dd>
              </div>
            </dl>
          </article>
        </div>
      </section>

      <section id="visit" className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[1.6rem] bg-paper-deep">
            <Image
              src="/images/map.jpg"
              alt="Peta lokasi Yayasan Heesu di Desa Situsari, Cileungsi"
              width={755}
              height={515}
              className="h-auto w-full"
            />
          </div>
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Location</p>
            <h2 className="mt-3 font-display text-4xl">{contact.homeName}</h2>
            <address className="mt-4 text-base leading-7 not-italic">
              {contact.address.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </address>
            <p className="mt-4">{contact.phones.join(" · ")}</p>
            <a className="mt-1 block text-navy underline underline-offset-4" href={`mailto:${contact.email}`}>{contact.email}</a>
            <a
              href={contact.maps}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white"
            >
              Open in maps
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
