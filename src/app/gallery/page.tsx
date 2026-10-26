import type { Metadata } from "next";
import { GalleryBrowser } from "@/components/GalleryBrowser";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Foto kehidupan di Rumah Roti, dan arsip fisioterapi, pendidikan, serta terapi dari masa Heesu mengasuh anak-anak.",
};

export default function GalleryPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Gallery</p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] sm:text-6xl">
        Hari-hari di Rumah Roti.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
        Album pertama adalah foto baru: 85 jiwa yang kini dirawat di Rumah Roti. Album bertanda arsip berasal dari masa Heesu mengasuh anak-anak.
      </p>
      <div className="mt-10">
        <GalleryBrowser />
      </div>
    </main>
  );
}
