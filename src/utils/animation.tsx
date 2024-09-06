import { gsap } from "gsap";

export const animateSingleCard = (
  imageRefs: (HTMLDivElement | null)[],
  currentIndex: number
) => {
  imageRefs.forEach((ref, index) => {
    if (ref) {
      const isVisible = index === currentIndex;
      gsap.to(ref, {
        x: 0,
        zIndex: isVisible ? 10 : 1,
        opacity: isVisible ? 1 : 0,
        duration: 0.75,
        display: isVisible ? "block" : "none",
        rotationY: isVisible ? 0 : 90,
        ease: "power2.out",
      });
    }
  });
};
