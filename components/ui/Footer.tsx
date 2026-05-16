import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold">
                T
              </div>
              <span className="text-xl font-bold text-white">
                Tifa <span className="text-amber-500">Tour Lampung</span>
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed">
              Biro perjalanan Umroh dan Haji terpercaya di Lampung. Amanah,
              Profesional, dan Khusyuk.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 text-sm hover:text-emerald-800 transition font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <a href="#tentang" className="hover:text-amber-400 transition">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-amber-400 transition">
                  Paket Umroh
                </a>
              </li>
              <li>
                <a
                  href="#keunggulan"
                  className="hover:text-amber-400 transition"
                >
                  Keunggulan
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-amber-400 transition">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Kontak Kami</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 Jl. Bridgen Katamso No.21 Ganjarasri Metro Barat</li>
              <li>📞 +62 852-7349-7925</li>
              <li>✉️ info@tifatourlampung.com</li>
              <li>🕐 Senin - Jumat: 08.00 - 16.00 WIB</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Tifa Tour Lampung. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
