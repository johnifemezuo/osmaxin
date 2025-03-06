import { Container } from "@/components/Container/Container";
import { ClientType } from "../ProjectPage/OurClientTypeSection";
import { ScrollReveal } from "@/components/Animations/ScrollReveal";

const AboutDevHubPage = () => {
  return (
    <div className="bg-gradient-to-b overflow-hidden from-[#0E1846] to-[#00008B] to-purple-5000">
      <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>

      <Container>
        <div>
          <div className="flex space-x-12 w-full lg:space-x-20">
            <h1 className="text-2xl lg:text-3xl font-semibold ">
              What Is Osmaxin Dev Hub?
            </h1>

            <p className="text-lg lg:text-xl max-w-4xl">
              Dev Hub is Osmaxin&apos;s initiative to mentor and train future
              developers. Whether you&apos;re a beginner or looking to advance
              your skills, our courses and mentorship programs are tailored to
              help you succeed in the tech industry. Learn from industry experts
              and work on real-world projects to build your portfolio.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <h3 className="text-2xl">Why Choose</h3>

            <div className="border-t border-white/30 py-12 gap-5 flex flex-wrap">
              <ClientType title="Industry-experienced mentors." />
              <ClientType title="Real-world projects for practical experience." />
              <ClientType title="Access to a supportive community of learners and developers." />
              <ClientType title="Career guidance and job placement support." />
            </div>
          </div>
        </div>
      </Container>
      </ScrollReveal>
    </div>
  );
};

export default AboutDevHubPage;
