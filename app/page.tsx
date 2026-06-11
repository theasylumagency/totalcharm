import {
  ClinicGallery,
  FinalCTA,
  Footer,
  Header,
  Hero,
  LeadDoctor,
  PatientPath,
  Reviews,
  SignatureServices,
  TeamSlider,
  TrustStrip,
  WhySection,
} from "@/components/home";
import { doctors, leadDoctor } from "@/data/doctors";
import { services } from "@/data/services";
import { translations } from "@/data/translations";

export default function Home() {
  const copy = translations.ka;

  return (
    <>
      <Header copy={copy} />
      <main>
        <Hero copy={copy} />
        <TrustStrip copy={copy} />
        <SignatureServices copy={copy} services={services} />
        <WhySection copy={copy} />
        <LeadDoctor copy={copy} doctor={leadDoctor} />
        <TeamSlider copy={copy} doctors={doctors} />
        <PatientPath copy={copy} />
        <ClinicGallery copy={copy} />
        <Reviews copy={copy} />
        <FinalCTA copy={copy} />
      </main>
      <Footer copy={copy} />
    </>
  );
}
