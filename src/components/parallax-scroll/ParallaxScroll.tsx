"use client";
import { SpaceComponent, TunnelAnimation } from "@/components";
import { Box } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { WindowsBg } from "./components";
gsap.registerPlugin(ScrollTrigger);

const ParallaxScroll = () => {
  // These logic are for tunnel opacity
  const [isVisible, setIsVisible] = useState(true); // Controls opacity
  const [scrollY, setScrollY] = useState(0); // Track scroll position

  // These logic are for parallax effect ============================================================================
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Helper function to set up parallax for a section
  const setupParallax = (section: HTMLElement, isFirstSection: boolean) => {
    // Helper function to calculate the ratio
    const getRatio = (el: HTMLElement) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    // Parallax effect for the section
    gsap.fromTo(
      section,
      {
        backgroundPosition: isFirstSection
          ? "50% 0px" // Start at the top for the first section
          : `50% ${-window.innerHeight * getRatio(section)}px`, // Start slightly offset for other sections
      },
      {
        backgroundPosition: `50% ${
          window.innerHeight * (1 - getRatio(section))
        }px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: isFirstSection ? "top top" : "top bottom", // Adjust start based on section
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true, // Make it responsive
        },
      }
    );
  };

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Get the sections
      const section1 = containerRef.current.querySelector(
        ".section-1"
      ) as HTMLElement;
      const section2 = containerRef.current.querySelector(
        ".section-2"
      ) as HTMLElement;
      // const section3 = containerRef.current.querySelector(
      //   ".section-3"
      // ) as HTMLElement;

      // Set up parallax for each section
      setupParallax(section1, true); // First section
      setupParallax(section2, false); // Second section
      // setupParallax(section3, false);  Third section
    },
    { scope: containerRef }
  );

  // These logic are for tunnel opacity ======================================================================
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update state with current scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Run once on mount

  useEffect(() => {
    setIsVisible(scrollY < 7200); // Update visibility based on scroll
  }, [scrollY]); //

  console.log("ScrollY", scrollY);

  return (
    <Box ref={containerRef}>
      <Box as={"section"} className={"section-1"}>
        <WindowsBg />
      </Box>

      <Box
        as="section"
        className="section-2"
        opacity={isVisible ? 1 : 0}
        transition={"opacity 1s ease-in-out"}
      >
        <TunnelAnimation />
      </Box>

      <Box
        as="section"
        opacity={{ base: scrollY < 6400 ? 0 : 1, md: scrollY < 7200 ? 0 : 1 }}
        transition={"opacity 1s ease-in-out"}
        position="fixed"
        top="0"
        left="0"
        zIndex={1000000}
        width="full"
        h="full"
        display={{
          base: scrollY < 6300 ? "none" : "block",
          md: scrollY < 7100 ? "none" : "block",
        }}
      >
        <SpaceComponent />
      </Box>
    </Box>
  );
};

export default ParallaxScroll;
