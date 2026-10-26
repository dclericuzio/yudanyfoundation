import type { Metadata } from "next";
import Image from "next/image";
import { Portrait } from "@/components/Portrait";
import { board, professionalImage, professionals } from "@/lib/site";

export const metadata: Metadata = {
  title: "Board and team",
  description: "Pembina, pengurus, dan tenaga profesional Yayasan Heesu.",
};

export default function PeoplePage() {
  return (
    <main>
      <header className="mx-auto w-full max-w-6xl px-5 pb-4 pt-14 sm:px-8">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Board and professional</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] sm:text-6xl">
          Orang-orang yang menjaga rumah ini.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          Pengurus menjalankan yayasan. Di dalam panti, terapis, perawat, guru, dan pengasuh bekerja dengan semangat kekeluargaan.
        </p>
      </header>

      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8">
        <h2 className="font-display text-3xl">Board</h2>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {board.map((person) => (
            <li key={person.name}>
              <Portrait tight src={person.image} alt={`Potret ${person.name}`} />
              <p className="mt-4 font-display text-2xl leading-tight">{person.name}</p>
              <p className="text-sm uppercase tracking-[0.14em] text-green">{person.role}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">Professionals</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Tenaga yang mendampingi terapi, perawatan, dan kegiatan harian anak.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
            {professionals.map((name) => (
              <li key={name}>
                <Portrait tight src={professionalImage(name)} alt={`Potret ${name}, tenaga Yayasan Heesu`} />
                <p className="mt-3 font-semibold">{name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-3xl">Organization</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Bagan yayasan: dari pembina dan pengawas, ketua, sampai koordinator terapi, perawat, pengasuh, dan keamanan.
        </p>
        <div className="mt-8 overflow-hidden rounded-[1.6rem] bg-white p-4 ring-1 ring-line sm:p-8">
          <Image
            src="/images/organization.jpg"
            alt="Bagan organisasi Yayasan Heesu, dari pembina hingga pengasuh dan satpam"
            width={606}
            height={448}
            className="mx-auto h-auto w-full max-w-3xl"
          />
        </div>
      </section>
    </main>
  );
}
