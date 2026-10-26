import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-5 py-24 sm:px-8">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">404</p>
      <h1 className="mt-3 font-display text-5xl">Halaman ini tidak ada.</h1>
      <p className="mt-4 text-lg text-muted">Kembali ke beranda Yudany Foundation.</p>
      <Link href="/" className="mt-6 w-fit rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white">
        Home
      </Link>
    </main>
  );
}
