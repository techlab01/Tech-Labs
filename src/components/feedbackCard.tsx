// "use client";
// import React, { useRef, useEffect } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { feedbackDetails } from "../constants";
// import { quotesIcon } from "../utils";

// type FeedbackCardType = {
//   className?: string;
// };

// const FeedbackCard: React.FC<FeedbackCardType> = ({ className }) => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const container = containerRef.current;

//     if (container) {
//       gsap.set(".boxes", {
//         x: (i) => i * 100,
//       });
//       gsap.to(".boxes", {
//         duration: 10,
//         ease: "none",
//         x: "+=3800",
//         modifiers: {
//           x: gsap.utils.unitize((x) => parseFloat(x) % 3800),
//         },
//         repeat: -1,
//       });
//     }
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className={`${className} wrapper h-full relative overflow-hidden`}
//     >
//       <div
//         ref={containerRef}
//         className="h-full grid w-full grid-cols-3 gap-y-10"
//       >
//         {feedbackDetails.map((feedback, index) => (
//           <div key={index} className="boxes h-full w-full">
//             <div className="flex gap-6 relative w-full h-72">
//               {/* text */}
//               <div className="flex flex-col justify-around gap-4 items-start z-0 p-6 rounded-xl border border-blue px-14 w-full">
//                 <p className="text-left text-base line-clamp-5">
//                   {feedback.description}
//                 </p>
//                 <div className="flex items-end justify-center gap-4 text-blue">
//                   <p className="text-3xl">{feedback.name}</p>
//                   <p className="text-base">{feedback.school}</p>
//                 </div>
//               </div>

//               <Image
//                 src={quotesIcon}
//                 alt="quotes-icon"
//                 width={20}
//                 height={20}
//                 className="h-20 w-20 absolute z-10 transform -translate-x-1/2 translate-y-16"
//               />
//               <div className="flex items-center">
//                 <Image
//                   src={feedback.image}
//                   alt={feedback.name}
//                   width={100}
//                   height={100}
//                   className="rounded-xl object-cover h-full w-full"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeedbackCard;

"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { feedcard } from "../constants";

const FeedCardSection = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateRow = (rowRef: React.RefObject<HTMLDivElement>) => {
      const row = rowRef.current;
      if (row) {
        gsap.to(row, {
          xPercent: -100, // Move by 100% of the container width
          duration: 20, // Duration of the animation
          ease: "none", // Smooth movement
          repeat: -1, // Infinite loop
        });
      }
    };

    animateRow(row1Ref);
    animateRow(row2Ref);
  }, []);

  return (
    <div className="relative flex flex-col overflow-hidden pt-20 w-full h-full">
      <div className="overflow-hidden">
        <div ref={row1Ref} className="flex gap-5">
          {feedcard.slice(0, 3).map((item, index) => (
            <div key={index} className="box h-[30%] w-[60%] flex-shrink-0">
              <Image
                src={item}
                alt={`image-${index}`}
                width={150}
                height={150}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden mt-4">
        <div ref={row2Ref} className="flex gap-5">
          {feedcard.slice(3, 6).map((item, index) => (
            <div key={index} className="box h-[30%] w-[60%] flex-shrink-0">
              <Image
                src={item}
                alt={`image-${index}`}
                width={150}
                height={150}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedCardSection;
