import type { Metadata } from "next";
import { Portrait } from "@/components/Portrait";
import { childImage, children } from "@/lib/site";

export const metadata: Metadata = {
  title: "Foster children",
  description: "Anak-anak yang diasuh dan diberdayakan di Yayasan Heesu, Cileungsi.",
};

export default function ChildrenPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Foster children</p>
      <div className="mt-3 grid gap-6 lg:grid-cols-12 lg:items-end">
        <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl lg:col-span-7">
          Mereka tinggal, belajar, dan bertumbuh di sini.
        </h1>
        <p className="text-lg leading-8 text-muted lg:col-span-5">
          Sembilan belas anak dari berbagai latar belakang medis dan sosial diasuh Yayasan Heesu. Nama di halaman ini adalah nama panggilan yang yayasan tayangkan untuk keluarga, donatur, dan tamu.
        </p>
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {children.map((name) => (
          <li key={name}>
            <Portrait src={childImage(name)} alt={`Potret ${name}, anak asuh Yayasan Heesu`} />
            <p className="mt-4 font-display text-2xl">{name}</p>
            <p className="text-sm text-muted">Anak asuh Heesu</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
