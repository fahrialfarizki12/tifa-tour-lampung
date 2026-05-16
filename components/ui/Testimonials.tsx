import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Bapak Ahmad & Ibu Siti",
    city: "Bandar Lampung",
    image: "/hero-1-bg.jpg",
    text: "Alhamdulillah perjalanan umroh sangat nyaman dan terorganisir. Hotel dekat Masjidil Haram, pembimbing sangat sabar, dan pelayanan Tifa Tour benar-benar amanah.",
  },
  {
    name: "Ibu Nurhayati",
    city: "Metro Lampung",
    image: "/hero-1-bg.jpg",
    text: "Awalnya ragu, tapi setelah berangkat semuanya sesuai janji. Mulai dari visa, tiket, hotel sampai bimbingan ibadah sangat profesional.",
  },
  {
    name: "Keluarga H. Ridwan",
    city: "Pringsewu",
    image: "/hero-1-bg.jpg",
    text: "MasyaAllah pengalaman luar biasa. Pendamping travel selalu sigap membantu jamaah lansia dan fasilitas sangat memuaskan.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimoni"
      className="relative py-24 bg-gradient-to-r from-emerald-950 via-emerald-900 to-black overflow-hidden"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-semibold border border-amber-500/30">
            Bukti Nyata Jamaah Kami
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            Mereka Sudah Sampai ke{" "}
            <span className="text-amber-400">Baitullah</span>
          </h2>

          <p className="mt-5 text-gray-300 max-w-3xl mx-auto text-lg">
            Ribuan jamaah telah mempercayakan perjalanan suci bersama Tifa Tour
            Lampung. Dokumentasi ini menjadi bukti bahwa kami nyata, terpercaya,
            dan amanah.
          </p>
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="group bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-amber-400/40 transition-all hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                <div className="absolute bottom-5 left-5">
                  <h3 className="text-white text-xl font-bold">{item.name}</h3>
                  <p className="text-amber-300">{item.city}</p>
                </div>
              </div>

              <div className="p-6">
                <Quote className="text-amber-400 mb-4" size={28} />

                <p className="text-gray-300 leading-relaxed mb-5">
                  {item.text}
                </p>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={18}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
