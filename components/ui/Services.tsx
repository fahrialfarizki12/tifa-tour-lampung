import { Plane, Hotel, BookOpen } from "lucide-react";

const packages = [
  {
    icon: <Plane className="w-10 h-10 text-amber-500" />,
    title: "Umroh Hemat",
    duration: "10 Hari",
    price: "Rp 28,9 Jt",
    departure: "10 Agustus 2026",
    airline: "IndiGo",
    description:
      "Paket umroh hemat dengan fasilitas lengkap dan pelayanan profesional untuk ibadah yang nyaman.",
    hotels: {
      madinah: "Tara Ajyad / Setaraf",
      mekkah: "Zowar Alalamin / Setaraf",
    },
    features: [
      "Tiket pesawat CGK–JED–CGK",
      "Visa Umroh",
      "Asuransi perjalanan",
      "Hotel bintang 4",
      "Makan 3x menu Indonesia",
      "Bus executive",
      "Muthawif profesional",
      "City tour (bila diizinkan)",
      "Handling Saudi",
      "Air Zam-Zam",
      "Bagasi 23 kg",
      "Perlengkapan umroh",
      "Pengajian & manasik",
      "Sertifikat umroh",
    ],
    exclude: ["Paspor", "Vaksin meningitis"],
  },

  {
    icon: <Hotel className="w-10 h-10 text-amber-500" />,
    title: "Umroh Ekonomis",
    duration: "10 Hari",
    price: "Rp 31,5 Jt",
    departure: "23 Agustus 2026",
    airline: "Lion Air",
    description:
      "Paket umroh ekonomis dengan fasilitas nyaman, hotel bintang 4, serta pendamping ibadah profesional.",
    hotels: {
      mekkah: ["Grand Al Massa", "Fajar Badie 2"],
      madinah: ["Durrat Al Eiman", "ODST Al Madinah"],
    },
    highlight: true,
    features: [
      "Tiket pesawat CGK–JED–CGK",
      "Visa umroh",
      "Asuransi",
      "Hotel bintang 4",
      "Makan 3x menu Indonesia",
      "Bus executive",
      "Muthawif profesional",
      "City tour (bila diizinkan)",
      "Handling Saudi",
      "Air Zam-Zam",
      "Bagasi 23 kg",
      "Pakaian umroh / mukena / kopiah & jaket",
      "Perlengkapan umroh",
      "Pengajian & manasik",
      "Sertifikat umroh",
    ],
    exclude: ["Paspor", "Vaksin meningitis"],
  },

  {
    icon: <BookOpen className="w-10 h-10 text-amber-500" />,
    title: "Umroh VIP",
    duration: "10 Hari",
    price: "Rp 34 Juta",
    departure: "28 Juli 2026",
    airline: "Saudia Airlines",
    description:
      "Paket umroh VIP dengan pelayanan eksklusif, hotel pilihan, dan penerbangan nyaman.",
    hotels: {
      mekkah: ["Grand Al Massa", "Fajar Badie 2"],
      madinah: ["Durrat Al Eiman", "ODST Al Madinah"],
    },
    features: [
      "Tiket pesawat CGK–JED–CGK",
      "Visa umroh",
      "Asuransi perjalanan",
      "Hotel bintang 4",
      "Makan 3x menu Indonesia",
      "Bus executive",
      "Muthawif profesional",
      "City tour (bila diizinkan)",
      "Handling Saudi",
      "Air Zam-Zam",
      "Bagasi 23 kg",
      "Pakaian umroh / mukena / kopiah & jaket",
      "Perlengkapan umroh",
      "Pengajian & manasik",
      "Sertifikat umroh",
    ],
    exclude: ["Paspor", "Vaksin meningitis"],
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-emerald-700 font-semibold text-lg">
          Layanan Kami
        </span>

        <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Pilih Paket Ibadah Terbaik Anda
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Kami menyediakan berbagai pilihan paket umroh dan haji yang dapat
          disesuaikan dengan kebutuhan dan budget Anda.
        </p>

        <div className="grid  md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-3xl shadow-lg overflow-hidden h-full flex flex-col transition hover:-translate-y-2 hover:shadow-2xl ${
                pkg.highlight
                  ? "border-2 border-emerald-600"
                  : "border border-gray-100"
              }`}
            >
              {/* Badge */}
              {pkg.highlight && (
                <div className="absolute top-0 right-0 bg-amber-500 text-white px-4 py-1 rounded-bl-xl rounded-tr-3xl text-sm font-bold z-10">
                  Best Seller
                </div>
              )}

              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 p-6 text-white text-left">
                <div className="flex items-center justify-between mb-5">
                  <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                    {pkg.icon}
                  </div>

                  <div className="bg-white/10 px-4 py-2 rounded-full text-sm font-semibold">
                    {pkg.airline}
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-2">{pkg.title}</h3>

                <p className="text-emerald-100 text-sm leading-relaxed mb-5 min-h-[48px]">
                  {pkg.description}
                </p>

                <div className="flex items-end gap-2">
                  <span className="text-4xl font-extrabold text-amber-300">
                    {pkg.price}
                  </span>

                  <span className="text-sm text-emerald-100 mb-1">
                    / Jamaah
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 text-left">
                {/* Info */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <p className="text-xs text-gray-500 mb-1">Durasi</p>
                    <p className="font-bold text-emerald-700">{pkg.duration}</p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4">
                    <p className="text-xs text-gray-500 mb-1">Keberangkatan</p>

                    <p className="font-bold text-emerald-700 text-sm">
                      {pkg.departure}
                    </p>
                  </div>
                </div>

                {/* Hotel */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Hotel</h4>

                  <div className="space-y-3">
                    <div className="bg-emerald-50 rounded-xl p-3">
                      <p className="text-xs text-emerald-700 font-semibold mb-1">
                        Mekkah
                      </p>

                      {Array.isArray(pkg.hotels.mekkah) ? (
                        pkg.hotels.mekkah.map((hotel, idx) => (
                          <p key={idx} className="text-sm text-gray-700">
                            {hotel}
                          </p>
                        ))
                      ) : (
                        <p className="text-sm text-gray-700">
                          {pkg.hotels.mekkah}
                        </p>
                      )}
                    </div>

                    <div className="bg-emerald-50 rounded-xl p-3">
                      <p className="text-xs text-emerald-700 font-semibold mb-1">
                        Madinah
                      </p>

                      {Array.isArray(pkg.hotels.madinah) ? (
                        pkg.hotels.madinah.map((hotel, idx) => (
                          <p key={idx} className="text-sm text-gray-700">
                            {hotel}
                          </p>
                        ))
                      ) : (
                        <p className="text-sm text-gray-700">
                          {pkg.hotels.madinah}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Fasilitas Include
                  </h4>

                  <ul className="space-y-2">
                    {pkg.features.map((feat, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="text-emerald-500 mt-0.5">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclude */}
                <div className="bg-red-50 border border-red-100 rounded-2xl p-4 mb-6">
                  <h4 className="font-bold text-red-600 mb-2">
                    Tidak Termasuk
                  </h4>

                  <ul className="space-y-1">
                    {pkg.exclude.map((item, idx) => (
                      <li key={idx} className="text-sm text-red-500">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <a
                  href="https://wa.me/6285273497925"
                  target="_blank"
                  className={`mt-auto block text-center w-full py-4 rounded-2xl font-bold transition ${
                    pkg.highlight
                      ? "bg-emerald-700 hover:bg-emerald-800 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-emerald-800"
                  }`}
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
