import { gsap } from "gsap";

export const animateCarousel = (
  imageRefs: (HTMLDivElement | null)[],
  visibleIndices: number[]
) => {
  imageRefs.forEach((ref, index) => {
    if (ref && visibleIndices.includes(index)) {
      const position = visibleIndices.indexOf(index) - 1;
      gsap.to(ref, {
        x: position * 300, // Adjust this value to center the images
        zIndex: position === 0 ? 10 : 1,
        opacity: position === 0 ? 1 : 0.6,
        duration: 0.75,
        display: "block",
        rotationY: position === -1 ? 40 : position === 1 ? -40 : 0,
      });
    } else if (ref) {
      gsap.to(ref, {
        display: "none",
        opacity: 0,
        duration: 0.75,
      });
    }
  });
};

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
        rotationY: 0,
      });
    }
  });
};
