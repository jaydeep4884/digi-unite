import React, { useEffect, useState } from "react";
import PageContainer from "../layout/PageContainer";
import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import avatar1 from "../assets/avatar/chatbox-avatar-01.png";
import avatar2 from "../assets/avatar/chatbox-avatar-02.png";
import avatar3 from "../assets/avatar/chatbox-avatar-03.png";
import avatar4 from "../assets/avatar/chatbox-avatar-04.png";

const ChatBot = () => {
  const [curruntRole, setRole] = useState(0);
  const roles = [
    "Open-Source",
    "Africa's Development",
    "Learning",
    "Education",
  ];

  const ChatBox = [
    {
      avatar: avatar2,
      msg: "I’m trying to get data on the last Kenyan election.",
    },
    {
      avatar: avatar3,
      msg: "I’m currently working on a platform that monitors how money is spent within the confines of election in Niger...",
    },
    {
      avatar: avatar4,
      msg: "The data on how the youth in Africa are dominating the tech scene is....",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRole((prevIdx) => (prevIdx + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <Box className="!my-10">
      <PageContainer>
        <Box className="flex flex-col lg:flex-row justify-between gap-10 items-center w-full p-5 ">
          {/* Left Side */}
          <Box className="w-full lg:w-[51%] md:w-[90%] text-center lg:text-left">
            <Typography
              variant="h3"
              className="!font-extrabold leading-tight !text-[30.4px] sm:!text-[48px] "
            >
              The African Charter Project is all about{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[curruntRole]}
                  className="text-[#FBD200] inline-block"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {roles[curruntRole]}
                </motion.span>
              </AnimatePresence>
            </Typography>
          </Box>

          {/* Right Side */}

          <Box className="relative w-full lg:w-2/5 md:w-[70%]  flex flex-col gap-5">
            {/* Yellow Pulsing Blob Background */}
            <motion.div
              className="absolute top-0 left-10 sm:left-16 w-48 sm:w-80 h-80 rounded-full bg-[#FBD200] opacity-5 blur-3xl z-0"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

         
            {/* Chat Messages */}
            <Box className="relative z-10 flex flex-col gap-5">
              {ChatBox.map((el, i) => (
                <Box key={i} className="flex gap-3 items-start">
                  <Box className="h-12 w-12 rounded-full overflow-hidden shrink-0">
                    <img
                      src={el.avatar}
                      alt="Chat Avatar"
                      className="w-full h-full object-cover"
                    />
                  </Box>
                  <Box className="p-4 border border-cyan-900 hover:border-white/60 transition-all duration-1000 rounded-2xl rounded-tl-none bg-black/5">
                    <Typography className="!text-sm md:text-base">
                      {el.msg}
                    </Typography>
                  </Box>
                </Box>
              ))}

              {/* Typing Indicator */}
              <Box className="flex gap-3 items-start justify-end">
                <Box className="p-4 border border-cyan-900 rounded-3xl rounded-tr-none bg-[#49B5E5]">
                  <motion.div
                    className="flex gap-2"
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      repeatType: "mirror",
                    }}
                  >
                    <motion.span
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                    />
                    <motion.span
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        delay: 0.2,
                      }}
                    />
                    <motion.span
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        delay: 0.4,
                      }}
                    />
                  </motion.div>
                </Box>
                <Box className="h-12 w-12 rounded-full overflow-hidden shrink-0">
                  <img
                    src={avatar1}
                    alt="Chat Avatar"
                    className="w-full h-full object-cover"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </PageContainer>
    </Box>
  );
};

export default ChatBot;
