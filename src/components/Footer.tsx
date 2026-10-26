import Link from "next/link";
import { contact } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-navy-deep text-sand">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-3xl text-white">Yudany Foundation</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-sand/75">
            Yayasan Kasih Karunia Yudany, bersama {contact.homeName}, merawat dan memberdayakan anak penyandang disabilitas ganda di Cileungsi.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-leaf">Kunjungi</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-white" href="/who-we-are">Who we are</Link></li>
            <li><Link className="hover:text-white" href="/care">Conditions we support</Link></li>
            <li><Link className="hover:text-white" href="/people">Board & team</Link></li>
            <li><Link className="hover:text-white" href="/give">Ways to give</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-leaf">Heesu</p>
          <address className="mt-3 text-sm leading-6 not-italic text-sand/80">
            {contact.address.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
            <span className="mt-3 block">
              {contact.phones.join(" · ")}
            </span>
            <a className="mt-1 block text-white underline decoration-white/30 underline-offset-4" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-sand/60 sm:flex-row sm:justify-between sm:px-8">
          <p>Yudany Foundation</p>
          <p>Creating partnerships of purpose</p>
        </div>
      </div>
    </footer>
  );
}
