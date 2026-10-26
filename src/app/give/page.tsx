import type { Metadata } from "next";
import { CopyButton } from "@/components/CopyButton";
import { contact, donors } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ways to give",
  description: "Rekening donasi Yayasan Heesu dan daftar para donatur.",
};

export default function GivePage() {
  return (
    <main>
      <header className="mx-auto w-full max-w-6xl px-5 pb-4 pt-14 sm:px-8">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Ways to give</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] sm:text-6xl">
          Donasi yang langsung sampai ke rumah perawatan.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          Donasi disalurkan ke rekening Yayasan Heesu, badan yang menaungi Rumah Roti. Setelah transfer, kirimkan bukti agar pencatatannya rapi.
        </p>
      </header>

      <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
        <div className="overflow-hidden rounded-[1.8rem] bg-navy-deep text-white">
          <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-2">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-leaf">Transfer</p>
              <h2 className="mt-3 font-display text-4xl">{contact.bank}</h2>
              <p className="mt-6 font-display text-4xl tracking-wide sm:text-5xl">{contact.account}</p>
              <div className="mt-3">
                <CopyButton value={contact.account} />
              </div>
              <p className="mt-6 text-sand/80">Atas nama {contact.accountName}</p>
            </div>
            <div className="rounded-[1.4rem] bg-white/10 p-6 ring-1 ring-white/15">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-leaf">Bukti transfer</p>
              <dl className="mt-4 space-y-4 text-sm leading-6">
                <div>
                  <dt className="text-sand/60">Email yang diminta yayasan</dt>
                  <dd>
                    <a className="text-lg text-white underline decoration-white/30 underline-offset-4" href={`mailto:${contact.transferEmail}`}>
                      {contact.transferEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sand/60">SMS saja</dt>
                  <dd className="text-lg">{contact.sms}</dd>
                  <dd className="text-sand/70">pukul {contact.smsHours}</dd>
                </div>
                <div>
                  <dt className="text-sand/60">Email umum yayasan</dt>
                  <dd>
                    <a className="underline decoration-white/30 underline-offset-4" href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Donors</p>
            <h2 className="mt-3 font-display text-4xl">Yang sudah berjalan bersama.</h2>
            <p className="mt-4 leading-7 text-muted">
              Laporan keuangan dapat diminta lewat email yayasan. Daftar ini mengikuti arsip donatur yang yayasan publikasikan.
            </p>
          </div>
          <ol className="lg:col-span-8">
            {donors.map((name, index) => (
              <li key={name} className="flex gap-4 border-t border-line py-3 text-sm sm:text-base">
                <span className="w-8 shrink-0 font-display text-green">{String(index + 1).padStart(2, "0")}</span>
                <span>{name}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
