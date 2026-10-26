import type { Metadata } from "next";
import { GalleryBrowser } from "@/components/GalleryBrowser";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Foto fisioterapi, pendidikan khusus, Perkins, dan terapi wicara di Yayasan Heesu.",
};

export default function GalleryPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Gallery</p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] sm:text-6xl">
        Hari-hari di ruang terapi dan kelas.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
        Empat album dari arsip yayasan: fisioterapi, pendidikan khusus, kunjungan Perkins, dan terapi wicara.
      </p>
      <div className="mt-10">
        <GalleryBrowser />
      </div>
    </main>
  );
}
