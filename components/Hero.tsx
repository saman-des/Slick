import React from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const FEATURE_ITEMS = [
  "Risk-first analysis",
  "Plain-English summaries",
  "Hidden risk detection",
  "Section-level Q&A",
  "Response draft generation",
  "Private auto-delete sessions",
];

export const Hero: React.FC = () => {
  const [activeFeatureIndex, setActiveFeatureIndex] = React.useState(0);

  return (
    <section className="relative min-h-screen overflow-hidden border-b border-white/10 pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#060419]/30 via-[#090622]/35 to-[#07051a]/65" /> */}

      {/* Layout guide lines and intersection markers to match the reference style */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-[24%] top-0 h-full w-px bg-white/20" />
        <div className="absolute left-[75%] top-0 h-full w-px bg-white/20" />
        <div className="absolute left-0 right-0 top-[100px] h-px bg-white/20" />
        <div className="absolute bottom-[96px] left-0 right-0 h-px bg-white/20" />

        <div className="absolute left-[24%] top-[100px] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#5f5a7f]" />
        <div className="absolute left-[75%] top-[100px] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#5f5a7f]" />
        <div className="absolute bottom-[96px] left-[24%] h-3 w-3 -translate-x-1/2 translate-y-1/2 rotate-45 bg-[#C3A3DF]" />
        <div className="absolute bottom-[96px] left-[75%] h-3 w-3 -translate-x-1/2 translate-y-1/2 rotate-45 bg-[#5f5a7f]" />
      </div>

      <div className="relative z-20 mx-auto grid min-h-[calc(100vh-100px)] w-full max-w-[1760px] grid-cols-1 px-6 pb-16 pt-20 md:px-10 lg:grid-cols-[1.2fr_1.45fr_1.2fr] lg:items-center lg:gap-x-20 lg:px-16 xl:gap-x-28 xl:px-20">
        <motion.aside
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hidden lg:block lg:justify-self-start lg:-ml-8 xl:-ml-12"
        >
          <ul className="space-y-5 text-[20px] font-normal leading-[1.29] tracking-[-0.04em] text-white/65">
            {FEATURE_ITEMS.map((item, index) => (
              <li
                key={item}
                onMouseEnter={() => setActiveFeatureIndex(index)}
                className="relative cursor-pointer"
              >
                <div className="flex items-center">
                  {activeFeatureIndex === index ? (
                    <motion.span
                      layoutId="active-feature-arrow"
                      transition={{
                        type: "spring",
                        stiffness: 340,
                        damping: 24,
                        mass: 0.25,
                      }}
                      className="mr-2 inline-flex items-center"
                    >
                      <MoveRight
                        className="h-5 text-[#DDF041]"
                        strokeWidth={1.8}
                      />
                    </motion.span>
                  ) : null}
                  <motion.span
                    animate={{
                      opacity: activeFeatureIndex === index ? 1 : 0.65,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-white"
                  >
                    {item}
                  </motion.span>
                </div>
              </li>
            ))}
          </ul>
        </motion.aside>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="mx-auto max-w-[860px] text-center"
        >
          <h1 className="text-[clamp(2.8rem,5.2vw,4.75rem)] font-normal leading-[1.1] tracking-[-0.04em] text-white min-[1700px]:text-[5.625rem]">
            <span className="block lg:whitespace-nowrap">Understand</span>
            <span className="block lg:whitespace-nowrap">documents</span>
            <span className="block lg:whitespace-nowrap">
              instantly with AI.
            </span>
          </h1>

          <p className="mx-auto mt-[30px] w-full text-[18px] font-normal leading-[1.35] text-[#D8D8D8] min-[1700px]:text-[20px]">
            Upload NDAs, MSAs, or employment offers. SlickDoc
            highlights risky terms, explains legal language in plain English,
            and helps you draft confident responses in minutes.
          </p>

          <div className="mt-[30px] flex flex-col items-center justify-center gap-[15px] sm:flex-row">
            <button className="rounded-[12px] bg-primary-500 px-[30px] py-[20px] text-[18px] font-medium leading-[20px] tracking-[-0.3px] text-white transition-colors hover:bg-primary-600">
              Get Started
            </button>
            <button className="rounded-[12px] border border-[rgba(238,238,238,0.3)] bg-[#18181b] px-[30px] py-[20px] text-[18px] font-medium leading-[20px] tracking-[-0.3px] text-white transition-colors hover:bg-white/10">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-16 hidden text-left lg:mt-0 lg:block lg:justify-self-end lg:-mr-8 xl:-mr-12"
        >
          <p className="w-[242px] text-balance text-[24px] font-normal leading-[1.29] tracking-[-0.04em] text-white">
            Review faster, negotiate smarter, and sign with confidence.
          </p>
        </motion.aside>
      </div>
    </section>
  );
};
