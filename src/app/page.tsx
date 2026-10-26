import Image from "next/image";
import Link from "next/link";
import { Portrait } from "@/components/Portrait";
import { childImage, children } from "@/lib/site";

const pillars = [
  {
    index: "01",
    title: "Dukungan psikologis",
    text: "Suasana kekeluargaan, pendampingan, dan rasa aman bagi anak yang kehilangan jalan.",
  },
  {
    index: "02",
    title: "Edukasi",
    text: "Pendidikan luar biasa yang mengikuti ritme dan kemampuan masing-masing anak.",
  },
  {
    index: "03",
    title: "Fisioterapi",
    text: "Terapi gerak, okupasi, dan wicara agar tubuh dan kemandirian terus bertumbuh.",
  },
];

const paths = [
  { href: "/programs#therapies", title: "Terapi", text: "Fisioterapi, okupasi, dan terapi wicara setiap hari." },
  { href: "/programs#education", title: "Belajar", text: "Kelas dan layanan khusus di luar kurikulum sekolah biasa." },
  { href: "/programs#care", title: "Perawatan", text: "Gizi, kejang, dan pengobatan harian yang dijaga rutin." },
  { href: "/programs#community", title: "Sekitar", text: "Open house, kurban, dan pengobatan gratis bagi desa." },
];

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto w-full max-w-6xl px-5 pb-8 pt-12 sm:px-8 sm:pt-16">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">
              Creating partnerships of purpose
            </p>
            <h1 className="mt-4 max-w-full font-display text-[2.7rem] leading-[0.95] text-balance text-ink sm:text-6xl lg:text-7xl">
              Kasih yang <span className="italic text-navy">menjadi pelita.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Yudany hadir bagi anak-anak yang membutuhkan perhatian khusus — lewat dukungan psikologis, edukasi, dan fisioterapi — bersama Yayasan Heesu di Cileungsi, Bogor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/give" className="rounded-full bg-green px-5 py-3 text-sm font-semibold text-white hover:bg-navy">
                Ways to give
              </Link>
              <Link href="/children" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink ring-1 ring-line hover:bg-paper-deep">
                Meet the children
              </Link>
            </div>
          </div>
          <dl className="grid min-w-0 grid-cols-3 gap-4 lg:col-span-5">
            {[
              ["2008", "Heesu berdiri"],
              ["19", "Anak diasuh"],
              ["Bogor", "Desa Situsari"],
            ].map(([value, label]) => (
              <div key={label} className="border-t border-ink/15 pt-3">
                <dt className="font-display text-3xl text-navy sm:text-4xl">{value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="relative h-[46vw] min-h-56 max-h-[460px] overflow-hidden rounded-[2rem]">
          <Image
            src="/images/hero-hands.jpg"
            alt="Dua pengasuh bertepuk tangan bersama seorang anak di kursi roda di beranda Yayasan Heesu"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_40%]"
          />
          <p className="absolute bottom-4 left-4 rounded-full bg-paper/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink sm:bottom-6 sm:left-6">
            Yayasan Heesu · Cileungsi
          </p>
        </div>
      </section>

      <section className="mt-16 bg-navy-deep text-sand">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-20">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-leaf lg:col-span-3">
            Keyakinan kami
          </p>
          <blockquote className="font-display text-3xl leading-snug text-white sm:text-4xl lg:col-span-9">
            “Selama kasih itu ada, semangat untuk menjadi saluran kasih karunia bagi anak-anak berkebutuhan khusus akan terus menyala.”
          </blockquote>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Yudany</p>
            <h2 className="mt-3 font-display text-4xl leading-tight">Anak adalah buah kasih karunia.</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-ink/85 lg:col-span-8">
            <p>
              Yayasan Kasih Karunia Yudany adalah organisasi nirlaba yang lahir dari kasih dan kepedulian terhadap anak-anak yang membutuhkan perhatian khusus karena persoalan ekonomi, psikososial, maupun fisiobiologis.
            </p>
            <p>
              Di tengah dunia yang semakin egosentris, Yudany ingin menjadi pelita dan harapan. Senyum mereka adalah cerminan mentari. Di tangan anak-anak inilah masa depan dipertaruhkan.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-[1.6rem] bg-line sm:grid-cols-3">
          {pillars.map((item) => (
            <article key={item.index} className="bg-sand p-7">
              <p className="font-display text-3xl text-green">{item.index}</p>
              <h3 className="mt-4 font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div className="relative h-80 overflow-hidden rounded-[1.8rem] sm:h-[28rem]">
            <Image
              src="/images/hero-care.jpg"
              alt="Seorang pengasuh tersenyum di samping anak yang berbaring di ranjang"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_30%]"
            />
          </div>
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Sejak 2008</p>
            <h2 className="mt-3 font-display text-4xl leading-tight">Heesu, rumah perawatan yang menjadi keluarga.</h2>
            <p className="mt-5 leading-8 text-ink/85">
              Yayasan Heesu “Cahaya Cinta” didirikan pada 11 November 2008 oleh Poong Nam Choi dan diresmikan Departemen Sosial pada 14 Maret 2009. Fokusnya merawat dan memberdayakan anak penyandang disabilitas ganda agar lebih mandiri, secara fisik maupun sosial.
            </p>
            <p className="mt-4 leading-8 text-ink/85">
              Dari seorang fisioterapis, perawat, dan dokter umum, Heesu tumbuh bersama tenaga profesional dan relawan. Kini 19 anak dari berbagai latar medis dan sosial diasuh di sini — saluran berkat bagi mereka, keluarga, dan desa di sekitarnya.
            </p>
            <Link href="/who-we-are" className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-navy underline decoration-leaf decoration-2 underline-offset-4">
              History, vision, and legalities
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Programs</p>
            <h2 className="mt-3 font-display text-4xl">Empat jalur pendampingan.</h2>
          </div>
          <Link href="/programs" className="hidden text-sm font-semibold uppercase tracking-[0.16em] text-navy sm:inline">
            See all
          </Link>
        </div>
        <ol className="mt-8 divide-y divide-line border-y border-line">
          {paths.map((item, index) => (
            <li key={item.href}>
              <Link href={item.href} className="group grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline">
                <span className="font-display text-2xl text-green sm:col-span-1">0{index + 1}</span>
                <span className="font-display text-3xl group-hover:text-navy sm:col-span-3">{item.title}</span>
                <span className="text-muted sm:col-span-7">{item.text}</span>
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-navy sm:col-span-1 sm:text-right">→</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-sand">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Foster children</p>
              <h2 className="mt-3 font-display text-4xl">Sembilan belas nama, satu rumah.</h2>
            </div>
            <Link href="/children" className="text-sm font-semibold uppercase tracking-[0.16em] text-navy">
              All children
            </Link>
          </div>
          <div className="mt-8 flex w-full gap-5 overflow-x-auto pb-2">
            {children.slice(0, 8).map((name) => (
              <Link key={name} href="/children" className="w-28 shrink-0 text-center sm:w-32">
                <Portrait src={childImage(name)} alt={`Potret ${name}, anak asuh Yayasan Heesu`} />
                <p className="mt-3 text-sm font-semibold">{name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="relative min-h-64 overflow-hidden rounded-[1.8rem] lg:col-span-7">
          <Image
            src="/images/hero-play.jpg"
            alt="Seorang anak memegang kertas di ruang terapi berwarna"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center rounded-[1.8rem] bg-green px-8 py-10 text-white lg:col-span-5">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-leaf">Ways to give</p>
          <h2 className="mt-3 font-display text-4xl leading-tight">Jadilah bagian dari pelita ini.</h2>
          <p className="mt-4 leading-7 text-white/85">
            Donasi disalurkan ke rekening Yayasan Heesu. Setelah transfer, kirimkan bukti agar administrasi tetap rapi.
          </p>
          <Link href="/give" className="mt-6 inline-flex w-fit rounded-full bg-white px-5 py-3 text-sm font-semibold text-green">
            Donation details
          </Link>
        </div>
      </section>
    </main>
  );
}
