import React from "react";
import PageContainer from "../layout/PageContainer";
import { Box } from "@mui/material";

const ChatBot = () => {
  return (
    <>
      <Box className="!my-10">
        <PageContainer>
          <Box className="flex justify-between gap-5 w-full items-center p-5">
            <Box className="w-[50%]">
              <p className="text-white font-extrabold text-5xl">
                The African Charter Project is all about{" "}
                <span className="text-[#FBD200]">Open-Source</span>
              </p>
            </Box>
            <Box className="w-[50%]"></Box>
          </Box>
        </PageContainer>
      </Box>
    </>
  );
};

export default ChatBot;
