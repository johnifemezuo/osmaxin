import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import CertIcon from "@/components/Icons/CertIcon";
import CertifiedIcon from "@/components/Icons/CertifiedIcon";
import FoundedIcon from "@/components/Icons/FoundedIcon";
import GPLaunchIcon from "@/components/Icons/GPLaunchIcon";
import TeamIcon from "@/components/Icons/TeamIcon";
import TGIcon from "@/components/Icons/TGIcon";

export const AboutCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="rounded-lg bg-[#28315A] flex gap-4 flex-col lg:flex-row py-5 px-9">
      {icon}
      <div className="space-y-3">
        <h2 className="lg:text-xl font-semibold">{title}</h2>
        <p className="text-white/80 lg:text-lg">{description}</p>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="bg-[#0E1846] px-5 xl:px-0">
      <Container>
        <div className="border-t  py-12  border-white/20">
          <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>
            <div className=" ">
              <h1 className="text-white text-lg lg:text-3xl xl:text-4xl">
                At Osmaxin, we focus on building high quality, efficient and
                well documented applications that ranges from; static and
                dynamic websites, mobile phones applications. We also offer
                other services such as Linux server administration, wordpress
                management. Over the past 10 years, we’ve perfected our Design &
                Development game and are eager to help passionate Founders
                perfect theirs. Success is a team play, right? Let’s aim for the
                top together!
              </h1>
            </div>
          </ScrollReveal>

          <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }} delay={0.5}>
            <div className="lg:grid-cols-3 grid grid-cols-1 gap-5 mt-12 lg:mt-20">
              <AboutCard
                title="Founded in 2018"
                description="Yes, we have been in business for over 10 solid years."
                icon={<FoundedIcon />}
              />
              <AboutCard
                title="Team of 112"
                description="Full-time, and ready to help your business grow."
                icon={<TeamIcon />}
              />
              <AboutCard
                title="4.8/5 rating on Google"
                description="Based on over 90 reviews by clients and fans."
                icon={<TGIcon />}
              />
              <AboutCard
                title="Global Presence"
                description="Serving clients in over 20 countries worldwide."
                icon={<GPLaunchIcon />}
              />
              <AboutCard
                title="Certified Personnel"
                description="Work with marketers certified by Google, Hubspot and CIW."
                icon={<CertifiedIcon />}
              />
              <AboutCard
                title="Certified Personnel"
                description="Work with marketers certified by Google, Hubspot and CIW."
                icon={<CertIcon />}
              />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
