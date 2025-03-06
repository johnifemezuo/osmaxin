import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import ProcessCard from "@/components/UI/Cards/ProcessCard";

const DevHubCourses = () => {
  return (
    <div className="bg-[#E7EBF1] py-20 lg:py-44 px-5 xl:px-0">
      <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>

      <Container>
        <div className="space-y-8">
          <h1 className="text-zinc-800 text-2xl lg:text-4xl font-semibold">Courses We Offer</h1>

          <div className="lg:grid-cols-2 xl:grid-cols-3 grid grid-cols-2 gap-4 lg:gap-12 xl:gap-14">
            <ProcessCard
              title="Web Development"
              description="Master front-end and back-end technologies, including HTML, CSS, JavaScript, React.js, and Node.js."
              iconImg="/images/logo-tab.png"
              step="4 - 6 Months"
              stepColor="text-[#F1606F]"
            />
            <ProcessCard
              title="Web Development"
              description="Master front-end and back-end technologies, including HTML, CSS, JavaScript, React.js, and Node.js."
              iconImg="/images/logo-tab.png"
              step="4 - 6 Months"
              stepColor="text-[#F1606F]"
            />
            <ProcessCard
              title="Web Development"
              description="Master front-end and back-end technologies, including HTML, CSS, JavaScript, React.js, and Node.js."
              iconImg="/images/logo-tab.png"
              step="4 - 6 Months"
              stepColor="text-[#F1606F]"
            />
            <ProcessCard
              title="Web Development"
              description="Master front-end and back-end technologies, including HTML, CSS, JavaScript, React.js, and Node.js."
              iconImg="/images/logo-tab.png"
              step="4 - 6 Months"
              stepColor="text-[#F1606F]"
            />

            <ProcessCard
              title="Web Development"
              description="Master front-end and back-end technologies, including HTML, CSS, JavaScript, React.js, and Node.js."
              iconImg="/images/logo-tab.png"
              step="4 - 6 Months"
              stepColor="text-[#F1606F]"
            />
            <ProcessCard
              title="Web Development"
              description="Master front-end and back-end technologies, including HTML, CSS, JavaScript, React.js, and Node.js."
              iconImg="/images/logo-tab.png"
              step="4 - 6 Months"
              stepColor="text-[#F1606F]"
            />
          </div>
        </div>
      </Container>
      </ScrollReveal>
    </div>
  );
};

export default DevHubCourses;
