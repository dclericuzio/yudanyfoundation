import type { Metadata } from "next";
import Link from "next/link";
import { Portrait } from "@/components/Portrait";
import { childImage, children } from "@/lib/site";

export const metadata: Metadata = {
  title: "Children we cared for",
  description:
    "Arsip anak-anak yang pernah diasuh Yayasan Heesu. Yang masih didampingi tinggal Vina dan dua anak lain, di Yayasan Sayap Ibu.",
};

export default function ChildrenPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">History</p>
      <div className="mt-3 grid gap-6 lg:grid-cols-12 lg:items-end">
        <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl lg:col-span-7">
          Anak-anak yang pernah kami asuh.
        </h1>
        <p className="text-lg leading-8 text-muted lg:col-span-5">
          Heesu dulu merawat anak penyandang disabilitas ganda. Nama dan potret di halaman ini adalah arsip masa itu, bukan daftar penghuni hari ini.
        </p>
      </div>

      <aside className="mt-10 rounded-[1.6rem] bg-navy p-7 text-sand sm:p-10">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-leaf">Yang masih kami dampingi</p>
        <p className="mt-3 max-w-2xl font-display text-3xl leading-snug text-white sm:text-4xl">
          Vina dan dua anak lain, dititipkan di Yayasan Sayap Ibu.
        </p>
        <p className="mt-4 max-w-2xl leading-7 text-sand/80">
          Tidak semua anak yang dulu tinggal di Heesu masih dapat ditemui. Yang masih dalam pendampingan tinggal tiga orang. Mereka tidak lagi berada di Cileungsi.
        </p>
      </aside>

      <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {children.map((name) => (
          <li key={name}>
            <Portrait src={childImage(name)} alt={`Potret ${name}, anak yang pernah diasuh Yayasan Heesu`} />
            <p className="mt-4 font-display text-2xl">{name}</p>
            <p className="text-sm text-muted">Pernah diasuh di Heesu</p>
          </li>
        ))}
      </ul>

      <p className="mt-12 max-w-2xl leading-8 text-muted">
        Rumah yang dijalankan sekarang adalah{" "}
        <Link href="/rumah-roti" className="font-semibold text-navy underline decoration-leaf decoration-2 underline-offset-4">
          Rumah Roti
        </Link>
        , bagi orang tua terlantar dan orang dengan gangguan jiwa.
      </p>
    </main>
  );
}
