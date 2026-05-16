import Image from "next/image";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-12 md:pt-20 md:pb-0 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-1-bg.jpg"
          alt="Background Umroh"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-black/70 z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full">
        <div className="md:max-w-2xl">
          <span className="inline-block bg-amber-500/20 text-amber-300 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-sm font-semibold mb-4 sm:mb-6 border border-amber-500/30 whitespace-nowrap">
            Travel Umroh & Haji Terpercaya Lampung
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Wujudkan Rindu Suci ke
            <span className="text-amber-400">Baitullah</span> Bersama Kami
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10 max-w-xl mx-auto md:mx-0">
            Tifa Tour Lampung hadir menemani perjalanan ibadah Anda dengan
            layanan terbaik, fasilitas nyaman, dan bimbingan spiritual yang
            profesional.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a
              href="#layanan"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg transition transform hover:scale-105"
            >
              Lihat Paket Umroh
            </a>

            <a
              href="https://wa.me/6285273497925"
              target="_blank"
              className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg transition"
            >
              <Phone size={20} />
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
