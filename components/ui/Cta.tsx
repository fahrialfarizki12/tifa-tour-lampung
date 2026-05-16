import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="kontak" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-emerald-50 to-white p-12 rounded-3xl shadow-xl border border-emerald-100">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Siap Memulai Perjalanan Suci Anda?
        </h2>
        <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
          Jangan tunda lagi! Konsultasikan rencana ibadah Umroh atau Haji Anda
          bersama tim Tifa Tour Lampung. Gratis tanpa biaya.
        </p>
        <a
          href="https://wa.me/6285273497925?text=Halo%20Tifa%20Tour,%20saya%20ingin%20konsultasi%20paket%20umroh/haji"
          target="_blank"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full font-bold text-xl transition transform hover:scale-105 shadow-lg"
        >
          <MessageCircle size={28} /> Chat via WhatsApp
        </a>
        <p className="mt-6 text-sm text-gray-500">
          Atau kunjungi kantor kami di Jl. Bridgen Katamso No.21 Ganjarasri
          Metro Barat
        </p>
      </div>
    </section>
  );
}
