import { Shield, Headphones, BadgeCheck, Wallet } from "lucide-react";

const reasons = [
  {
    icon: <BadgeCheck className="w-8 h-8" />,
    title: "Resmi & Amanah",
    desc: "Memiliki izin resmi dari Kementerian Agama RI, sehingga dana dan keberangkatan jamaah terjamin.",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Pendampingan 24 Jam",
    desc: "Tim pembimbing ibadah dan handling siap melayani Anda selama 24 jam penuh di Tanah Suci.",
  },
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "Cicilan Ringan",
    desc: "Tersedia program cicilan 0% dan potongan harga early bird untuk meringankan biaya ibadah Anda.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Jaminan Visa",
    desc: "Proses administrasi dan visa ditangani langsung oleh tim profesional kami hingga pasti berangkat.",
  },
];

export default function WhyUs() {
  return (
    <section id="keunggulan" className="py-20 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-lg">
            Kenapa Pilih Kami?
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            Keunggulan Tifa Tour Lampung
          </h2>
          <p className="text-emerald-200 max-w-2xl mx-auto">
            Kami memahami bahwa perjalanan ibadah adalah investasi akhirat. Oleh
            karena itu, kami berikan pelayanan terbaik.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="bg-emerald-800/50 border border-emerald-700 p-8 rounded-2xl text-center hover:bg-emerald-800 transition group"
            >
              <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-emerald-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
