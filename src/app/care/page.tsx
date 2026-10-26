import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Conditions we support",
  description:
    "Arsip materi Yayasan Heesu tentang cerebral palsy, autisme, disabilitas intelektual, tunawicara, dan tunanetra, dari masa perawatan anak.",
};

const sections = [
  { href: "#cerebral-palsy", label: "Cerebral palsy" },
  { href: "#autism", label: "Autisme" },
  { href: "#intellectual", label: "Disabilitas intelektual" },
  { href: "#speech-vision", label: "Wicara & penglihatan" },
];

export default function CarePage() {
  return (
    <main>
      <header className="mx-auto w-full max-w-6xl px-5 pb-4 pt-14 sm:px-8">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-green">Understanding</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] sm:text-6xl">
          Kondisi yang dulu dihadapi anak-anak Heesu.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          Halaman ini arsip dari masa perawatan anak. Penghuni Rumah Roti hari ini adalah orang tua terlantar dan orang dengan gangguan jiwa. Istilah klinis di bawah dipertahankan agar selaras dengan naskah asli, termasuk tunagrahita yang masih dipakai dalam pendidikan luar biasa di Indonesia.
        </p>
        <nav className="mt-8 flex flex-wrap gap-2" aria-label="Conditions">
          {sections.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full bg-white px-4 py-2 text-sm font-semibold ring-1 ring-line">
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="cerebral-palsy" className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="font-display text-4xl">Cerebral palsy</h2>
          <div className="relative mt-6 aspect-[565/366] overflow-hidden rounded-2xl bg-paper-deep">
            <Image
              src="/images/cerebral-palsy.jpg"
              alt="Ilustrasi materi cerebral palsy dari arsip Yayasan Heesu"
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
        </div>
        <div className="space-y-5 leading-8 text-ink/85 lg:col-span-8">
          <p>
            Cerebral palsy (CP) adalah terganggunya fungsi otak besar, kadang disebut kelumpuhan otak besar. Otak besar mengoordinasikan melihat, mendengar, berbicara, berpikir, dan belajar. Jika pusat itu terganggu, aktivitas harian ikut terganggu.
          </p>
          <p>
            Penyandang CP kesulitan mengontrol tubuh, dari motorik halus sampai kasar: mengunyah, menelan, memegang, berjalan. Otot sulit berkoordinasi dengan otak, sehingga sering terlihat keluar air liur dan kaku saat bergerak.
          </p>
          <div>
            <h3 className="font-display text-2xl text-ink">Faktor yang menaikkan risiko</h3>
            <ul className="mt-3 space-y-3">
              <li><strong>Prenatal.</strong> Obat berlebihan, infeksi kehamilan seperti rubella atau toksoplasma, serta benturan atau jatuh.</li>
              <li><strong>Saat lahir.</strong> Prematur, persalinan vakum, kekurangan oksigen, keracunan air ketuban.</li>
              <li><strong>Setelah lahir.</strong> Benturan, virus seperti meningitis, infeksi otak, kejang berulang.</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <article className="rounded-2xl bg-sand p-4">
              <h3 className="font-display text-xl">Spastik</h3>
              <p className="mt-2 text-sm leading-6">Hemiplegia melemahkan lengan dan tungkai satu sisi. Diplegia lebih mengenai tungkai. Quadriplegia melemahkan semua anggota gerak.</p>
            </article>
            <article className="rounded-2xl bg-sand p-4">
              <h3 className="font-display text-xl">Diskinetik</h3>
              <p className="mt-2 text-sm leading-6">Distonia lebih mengenai otot postur dan batang tubuh, dengan postur memutar. Athetoid menampilkan gerak tak terkendali, terutama lengan, tungkai, dan tangan.</p>
            </article>
            <article className="rounded-2xl bg-sand p-4">
              <h3 className="font-display text-xl">Ataksik</h3>
              <p className="mt-2 text-sm leading-6">Koordinasi, keseimbangan, dan postur menurun. Langkah melebar dan kadang tidak teratur. Kontrol mata dan persepsi kedalaman sering terganggu, begitu pula menulis.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="autism" className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-4xl">Autisme</h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 leading-8">
              <p>
                Autisme adalah kelainan perkembangan sistem saraf yang kebanyakan dikaitkan dengan faktor hereditas, dan kadang sudah dapat dideteksi sejak bayi berusia 6 bulan. Deteksi dan terapi sedini mungkin membantu penyesuaian.
              </p>
              <p>
                Gejala dapat muncul sejak usia 30 bulan hingga paling lambat 3 tahun. Seseorang disebut mengalami autisme bila menunjukkan satu atau lebih ciri berikut: kesulitan berhubungan dengan orang, benda, atau peristiwa; kesulitan komunikasi seperti bicara dan memahami bahasa; bermain dengan cara yang tidak lazim; sulit menerima perubahan rutinitas; gerakan atau pola perilaku berulang; serta perkembangan yang terlambat atau tidak biasa.
              </p>
            </div>
            <div className="space-y-4 leading-8">
              <p>
                Penyebab pastinya belum diketahui. Dua hal yang sering dihipotesiskan adalah genetik dan lingkungan. Pada kembar identik, kemungkinan keduanya mengalami autisme dilaporkan 60–95%, sementara pada saudara kandung 2,5–8%. Angka itu dibaca sebagai petunjuk peran gen, karena kembar identik berbagi gen yang sama.
              </p>
              <p>
                Ada dugaan lama bahwa vaksin MMR memicu autisme karena pengawet thimerosal yang mengandung merkuri. Tidak ada bukti kuat untuk dugaan itu. Thimerosal sudah tidak dipakai, sementara angka autisme pada anak terus naik.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-[1.4rem] bg-paper p-6">
            <h3 className="font-display text-2xl">Arah terapi yang yayasan catat</h3>
            <p className="mt-3 leading-7">
              Para ahli sepakat terapi sebaiknya mulai awal dan diarahkan pada hambatan yang umum: komunikasi dan perilaku. Penanganan yang utuh biasanya mencakup terapi wicara, okupasi terapi, dan Applied Behavior Analysis. Materi yayasan juga menyebut Floortime, TEACCH, diet dan obat untuk perilaku tertentu, PECS serta bahasa isyarat, layanan tim lintas disiplin, dan pendekatan sensoris seperti auditory integration training. Orang tua dianjurkan menanyakan langsung kepada profesional yang menangani anak.
            </p>
          </div>
        </div>
      </section>

      <section id="intellectual" className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-4xl">Disabilitas intelektual</h2>
        <p className="mt-4 max-w-3xl leading-8 text-muted">
          Naskah yayasan memakai istilah tunagrahita. Di bawah ini klasifikasi yang mereka kutip, termasuk skala lama, sebagai latar bagi keluarga — bukan diagnosis untuk seorang anak.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <article className="rounded-[1.4rem] bg-sand p-6">
            <h3 className="font-display text-2xl">Medis-biologis</h3>
            <p className="mt-3 text-sm leading-7">
              Dipandang sebagai akibat kondisi yang tidak sempurna. Daftar yang dikutip meliputi infeksi, sebab fisik, penyakit otak, gangguan metabolisme, penyakit prenatal yang tidak diketahui, kelainan kromosom, gangguan kehamilan, pengaruh lingkungan, dan kondisi lain.
            </p>
          </article>
          <article className="rounded-[1.4rem] bg-sand p-6">
            <h3 className="font-display text-2xl">Skala Wechsler</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6">
              <li>Ringan, IQ 55–69</li>
              <li>Sedang, IQ 40–54</li>
              <li>Berat, IQ 25–39</li>
              <li>Sangat berat, IQ 24 ke bawah</li>
            </ul>
          </article>
          <article className="rounded-[1.4rem] bg-sand p-6">
            <h3 className="font-display text-2xl">Untuk pembelajaran</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6">
              <li>Lamban belajar</li>
              <li>Mampu didik</li>
              <li>Mampu latih</li>
              <li>Mampu rawat, IQ 30 ke bawah</li>
            </ul>
          </article>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl">Penyebab yang dicatat</h3>
            <ul className="mt-3 space-y-2 leading-7">
              <li>Genetik: kerusakan biokimia dan abnormalitas kromosom.</li>
              <li>Prenatal: infeksi rubella dan faktor Rhesus.</li>
              <li>Saat lahir: sesak napas, luka, prematuritas, kekurangan oksigen.</li>
              <li>Setelah lahir: infeksi, masalah nutrisi, ensefalitis, meningitis.</li>
              <li>Sosiokultural.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl">Gambaran yang yayasan tuliskan</h3>
            <ul className="mt-3 space-y-2 leading-7">
              <li>Ringan: bicara lancar tetapi kosakata terbatas, sulit berpikir abstrak, masih dapat mengikuti akademik dalam batas tertentu.</li>
              <li>Sedang: hampir tidak mengikuti pelajaran akademik, dilatih merawat diri dan aktivitas harian.</li>
              <li>Berat dan sangat berat: sepanjang hidup membutuhkan bantuan orang lain untuk merawat diri dan mengenali bahaya.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="speech-vision" className="bg-navy text-sand">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-white">Tunawicara</h2>
            <div className="mt-4 space-y-4 leading-8 text-sand/85">
              <p>
                Ketidakmampuan bicara karena gangguan pada tenggorokan, pita suara, paru-paru, mulut, lidah, dan organ terkait. Sering berkaitan dengan tuli. Bisa hadir sejak lahir karena genetik, pendengaran yang tidak berfungsi, keterlambatan bahasa, kerusakan saraf dan otot, atau kontrol gerak. Penyebab lain yang dicatat meliputi disabilitas intelektual, autisme, serta cedera pada area Broca.
              </p>
              <p>
                Gejala yang yayasan sebutkan: bicara keras dan tidak jelas, memperhatikan gerak bibir, cairan dari telinga, alat bantu dengar, bibir sumbing, banyak gerak tubuh, cenderung pendiam, suara sengau, dan cadel. WHO, dalam materi ini, disebut mencatat satu dari seribu bayi lahir tuli dan bisu, dan hampir setengahnya terkait keturunan.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-4xl text-white">Tunanetra</h2>
            <div className="mt-4 space-y-4 leading-8 text-sand/85">
              <p>
                Hambatan indra penglihatan, dibagi menjadi buta total dan low vision. Mobilitas sering ditopang tongkat putih bergaris merah. Indra peraba, penciuman, dan pendengaran biasanya dimaksimalkan.
              </p>
              <p>
                Secara fisik, tubuh sebaya bisa sama; yang berbeda ada pada mata: juling, sering berkedip, menyipitkan mata, kelopak merah, gerak mata tak beraturan, mata berair. Perilaku dini meliputi mengeluh gatal, panas, pusing, kabur, atau penglihatan ganda. Low vision tampak saat menulis dan membaca dari jarak sangat dekat, hanya huruf besar yang terbaca, atau mata dicemong di cahaya terang.
              </p>
              <p>
                Penyebab prenatal terkait keturunan dan pertumbuhan dalam kandungan. Setelah lahir: kerusakan mata atau saraf saat persalinan, penyakit mata seperti trakoma, dan kecelakaan. Materi yayasan juga menyebut pembaca layar dan pemindai sebagai teknologi yang membuka buku dan komputer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
