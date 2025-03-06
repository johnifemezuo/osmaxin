import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import SubTitle from "@/components/Elements/SubTitle";
import { ArrowRight } from "@/components/Icons/ArrowRight";
import ProjectCard from "@/components/UI/Cards/ProjectCard";
import Maquee from "@/components/UI/Maquee";
import { useEffect, useRef, useState } from "react";

const FeaturedProject = ({ projects }: { projects: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const maxIndex = Math.max(0, projects.length - 3); // Calculate maximum index considering 3 cards

  const autoScrollInterval = 5000;

  // Dragging state
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();

    // Only auto-scroll if not currently dragging
    if (!isDragging) {
      timeoutRef.current = window.setTimeout(() => {
        nextSlide();
      }, autoScrollInterval);
    }

    return () => {
      resetTimeout();
    };
  }, [currentIndex, autoScrollInterval, isDragging]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  // Handle drag start
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);

    // Get starting position for either mouse or touch event
    if ("clientX" in e) {
      setStartPos(e.clientX);
    } else if (e.touches[0]) {
      setStartPos(e.touches[0].clientX);
    }

    setPrevTranslate(-(currentIndex * (100 / 3)));
    setCurrentTranslate(-(currentIndex * (100 / 3)));
  };
  // Handle dragging
  const handleDragging = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return;

    let currentPosition = 0;
    // Get current position for either mouse or touch event
    if ("clientX" in e) {
      currentPosition = e.clientX;
    } else if (e.touches[0]) {
      currentPosition = e.touches[0].clientX;
    }

    // Calculate how far we've moved
    const diff =
      ((currentPosition - startPos) / (sliderRef.current?.offsetWidth || 1)) *
      100;

    // Update translate value
    setCurrentTranslate(prevTranslate + diff);
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);

    // Calculate the closest slide based on the current translate position
    const movePercentage = 15; // Threshold percentage to determine a swipe
    const diff = currentTranslate - prevTranslate;

    if (diff > movePercentage && currentIndex > 0) {
      // Swiped right - go to previous slide
      prevSlide();
    } else if (diff < -movePercentage && currentIndex < maxIndex) {
      // Swiped left - go to next slide
      nextSlide();
    } else {
      // Return to current slide if swipe wasn't significant
      setCurrentTranslate(-(currentIndex * (100 / 3)));
    }
  };

  return (
    <div className="h-auto  relative bg-gradient-to-b from-[#000000] overflow-hidden  to-[#00008B] to-purple-5000 pt-20 pb-44 lg:pt-32 lg:pb-48">
      <Container>
        <div>
          <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }} delay={1}>
            <div className="mt-8 lg:flex justify-between items-center px-5 xl:px-0">
              <div className="space-y-4">
                <SubTitle>Feature project</SubTitle>
                <h1 className="text-3xl lg:text-4xl max-w-2xl font-semibold">
                  Catch a Glimpse of Our Top Notch Portfolio Project
                </h1>
              </div>

              <div className="flex items-center space-x-4 mt-7 xl:mt-20">
                <div
                  onClick={prevSlide}
                  className="bg-white  place-content-center rounded-full w-12 h-12 grid place- text-white content-center"
                >
                  <ArrowRight className="text-primary rotate-180" />
                </div>
                <div
                  onClick={nextSlide}
                  className="bg-white  place-content-center rounded-full w-12 h-12 grid place- text-white content-center"
                >
                  <ArrowRight className="text-primary" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-6  xl:mt-12 relative px-5 xl:px-0">
          <div className="relative overflow-hidden  w-full">
            <div
              className={`space-x-6 flex cursor-grab active:cursor-grabbing select-none transition-transform h-auto duration-500 ease-out ,
          ${isDragging} ? "transition-none cursor-grabbing" : "cursor-grab"`}
              style={{
                transform: `translateX(${
                  isDragging ? currentTranslate : -(currentIndex * (100 / 1))
                }%)`,
              }}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragging}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragging}
              onTouchEnd={handleDragEnd}
            >
              {projects.map((project: any) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  image={project.coverimage.url}
                  projectType={project.industry}
                  slug={project.slug}
                />
              ))}
            </div>
          </div>

          <button className="bg-transparent mt-12 font-medium lg:text-lg  border-white text-white border-2 py-2 px-4 rounded-full h-12 ">
            Sell all services
          </button>

          {/* Indicators */}
          <div className="absolute bottom-2 right-5 flex space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-secondary w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0">
        <Maquee />
      </div>
    </div>
  );
};

export default FeaturedProject;
