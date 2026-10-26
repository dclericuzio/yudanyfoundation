"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { albums } from "@/lib/site";

export function GalleryBrowser() {
  const [album, setAlbum] = useState<string>("rumah-roti");
  const [active, setActive] = useState<number | null>(null);

  const photos = useMemo(() => {
    const source = album === "all" ? albums : albums.filter((item) => item.id === album);
    return source.flatMap((item) =>
      item.images.map((image) => ({ ...image, album: item.title })),
    );
  }, [album]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((index) => (index === null ? index : (index + 1) % photos.length));
      if (event.key === "ArrowLeft") {
        setActive((index) => (index === null ? index : (index - 1 + photos.length) % photos.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, photos.length]);

  const current = active === null ? null : photos[active];

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery albums">
        {[{ id: "all", title: "All" }, ...albums].map((item) => {
          const selected = album === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => {
                setAlbum(item.id);
                setActive(null);
              }}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                selected ? "bg-navy text-white" : "bg-white text-ink ring-1 ring-line hover:bg-paper-deep"
              }`}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper-deep text-left"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, 30vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-3 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white opacity-0 transition group-hover:opacity-100">
              {photo.album}
            </span>
          </button>
        ))}
      </div>

      {current ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={() => setActive(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black">
              <Image src={current.src} alt={current.alt} fill className="object-contain" sizes="90vw" />
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-white">
              <p>{current.album}</p>
              <div className="flex gap-2">
                <button type="button" className="rounded-full bg-white/10 px-3 py-1" onClick={() => setActive((index) => (index === null ? index : (index - 1 + photos.length) % photos.length))}>
                  Previous
                </button>
                <button type="button" className="rounded-full bg-white/10 px-3 py-1" onClick={() => setActive((index) => (index === null ? index : (index + 1) % photos.length))}>
                  Next
                </button>
                <button type="button" className="rounded-full bg-white px-3 py-1 text-ink" onClick={() => setActive(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
