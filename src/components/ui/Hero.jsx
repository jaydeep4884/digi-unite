import { AnimatePresence, motion } from "framer-motion";
import PageContainer from "../layout/PageContainer";
import { Box } from "@mui/material";
import heroImg1 from "../assets/heroImg/hero-img-01.png";
import heroImg2 from "../assets/heroImg/hero-img-02.png";
import heroImg3 from "../assets/heroImg/hero-img-03.png";
import heroImg4 from "../assets/heroImg/hero-img-04.png";
import heroBg from "../assets/heroImg/hero-bg.png";
import { useEffect, useState } from "react";

export default function Hero() {
  const [index, setIndex] = useState(0);

  const texts = [
    { yellow: "Digital democracy", white: "tools" },
    { yellow: "Education", white: "platforms" },
    { yellow: "Open data", white: "initiatives" },
    { yellow: "Innovation", white: "leaders" },
  ];
  const aiFeatures = [
    { image: heroImg1 },
    { image: heroImg2 },
    { image: heroImg3 },
    { image: heroImg4 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);
  return (
    <section className=" text-white flex flex-col items-center py-10 relative overflow-hidden">
      <motion.img
        src={heroBg}
        alt="background blob"
        className="absolute top-0 left-0 !right-0 w-full h-[700px] opacity-[1.7] pointer-events-none "
        animate={{ x: ["-10%", "10%", "-10%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <PageContainer>
        <Box className="relative z-10 text-center">
          {/* Headline */}
          <motion.h1
            className="text-3xl lg:text-7xl md:text-5xl font-extrabold my-2 lg:my-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Find Africa’s best{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={texts[index].yellow + texts[index].white}
                className="block bg-clip-text text-[#FBD200]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {texts[index].yellow}{" "}
                <span className="text-white">{texts[index].white}</span>
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-sm md:text-lg mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Open-source resources to strengthen the implementation of the
            African Charter for Democracy, Elections & Governance (ACDEG) across
            the continent
          </motion.p>

          {/* Feature Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={motion.container}
            initial="hidden"
            animate="visible"
          >
            {aiFeatures.map((el, index) => (
              <motion.div
                key={index}
                variants={motion.item}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <Box className="text-center overflow-hidden bg-[#111111] rounded-xl lg:rounded-3xl shadow-2xl transition-all duration-300  hover:shadow-[0_0_25px_rgba(0,255,255,0.15)]">
                  <img
                    src={el.image}
                    className="w-full object-contain h-auto"
                    alt="HeroImage"
                  />
                </Box>
              </motion.div>
            ))}
          </motion.div>
        </Box>
      </PageContainer>
    </section>
  );
}
