import About from "@/components/ui/About";
import CTA from "@/components/ui/Cta";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import Services from "@/components/ui/Services";
import Testimonials from "@/components/ui/Testimonials";
import WhyUs from "@/components/ui/WhyUs";

export default function HomePage() {
  return (
    <>
      <section>
        <div className="mb-10">
          <Hero />
        </div>

        <div className="mb-10">
          <Services />
        </div>

        <div className="mb-10">
          <WhyUs />
        </div>

        <div className="mb-10">
          <About />
        </div>

        <div className="mb-10">
          <CTA />
        </div>

        <div>
          <Testimonials />
        </div>
      </section>
    </>
  );
}
