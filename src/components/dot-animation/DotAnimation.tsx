"use client";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

const DotAnimation = () => {
  const { contextSafe } = useGSAP();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const randomValue = useBreakpointValue({
    base: () => Math.random() * 300,
    sm: () => Math.random() * 600,
    md: () => Math.random() * 800,
    lg: () => Math.random() * 1000,
    xl: () => Math.random() * 1200,
    "2xl": () => Math.random() * 1500,
  });

  const xPosition = useBreakpointValue({
    base: 240,
    sm: 384,
    md: 512,
    lg: 640,
    xl: 768,
    "2xl": 800,
  });

  useGSAP(
    contextSafe(() => {
      if (!containerRef.current || xPosition === undefined) return;
      const dots: HTMLDivElement[] = [];

      // Create 100 dots dynamically
      for (let i = 0; i < 100; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";
        containerRef.current.appendChild(dot);
        dots.push(dot);
      }

      // Set initial position
      gsap.set(dots, {
        backgroundColor: "random([#FFD93D,#31E1F7,#fb27e2,#00FF9C, #ff477e])",
        scale: "random(0.4, 1)",
        x: xPosition, // Start position based on breakpoint
        y: 750, // Start position at the bottom
      });

      // Animate dots
      dots.forEach((dot) => {
        const newX =
          typeof randomValue === "function"
            ? randomValue()
            : randomValue ?? xPosition; // Get random x target position
        const deltaX = xPosition - newX; // Difference in x position

        gsap.to(dot, {
          duration: 2,
          x: newX,
          y: Math.random() * 500, // Move randomly upward
          ease: "power2.inOut",
          delay: Math.random() * 2.5,

          onComplete: () => {
            // Move down while shifting x by double the original movement
            gsap.to(dot, {
              duration: 2,
              x: xPosition - 2 * deltaX, // Adjust x position
              y: 750, // Move to the bottom
              opacity: 1, // Fade out
              ease: "power2.in",
              onComplete: () => dot.remove(), // Remove the dot
            });
          },
        });
      });

      // Cleanup function
      return () => {
        dots.forEach((dot) => dot.remove());
      };
    }),
    { scope: containerRef }
  );
  return (
    <Box
      className="feature__background"
      ref={containerRef}
      position="absolute"
      width="full"
      height="full"
      overflow="hidden"
    ></Box>
  );
};

export default DotAnimation;
