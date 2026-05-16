import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="tentang" className="py-20 bg-islamic-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-72 h-72 bg-emerald-100 rounded-3xl z-0"></div>

            <div className="relative z-10 h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1974&auto=format&fit=crop"
                alt="Tim Tifa Tour Lampung mendampingi jamaah"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-emerald-700 font-semibold text-lg mb-3">
              Tentang Kami
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Pendamping Perjalanan Ibadah yang Amanah & Profesional
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              <strong>Tifa Tour Lampung</strong> merupakan biro perjalanan Umroh
              dan Haji resmi yang terdaftar di Kementerian Agama Republik
              Indonesia. Kami hadir untuk memberikan pelayanan terbaik dengan
              mengutamakan kenyamanan, keamanan, serta kekhusyukan ibadah bagi
              seluruh jamaah dari Lampung dan sekitarnya.
            </p>

            <div className="space-y-5">
              {[
                "Resmi & terpercaya terdaftar di Kemenag RI",
                "Didampingi pembimbing ibadah bersertifikat",
                "Hotel nyaman berbintang 4",
                "Penerbangan langsung dari Lampung",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 w-6 h-6 mt-0.5 flex-shrink-0" />

                  <span className="text-gray-700 text-base font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
