import * as React from "react";
import { Box, Button, TextField, Typography, Divider } from "@mui/material";
import PageContainer from "../components/layout/PageContainer";
import GoogleIcon from "../assets/icons/google-icon.svg";

const Login = () => {
  return (
    <PageContainer>
      <Box className="h-screen flex justify-center items-center bg-[#121212] ">
        <Box className="p-8  rounded-2xl  bg-[#1e1e1e] border border-[#2c2c2c]">
          {/* Header */}
          <Typography variant="h4" className="!text-white !mb-2 font-bold">
            Create Account
          </Typography>
          <Typography variant="subtitle1" className="!text-gray-400 !mb-6">
            Login to Kar Mere Bhai...!!
          </Typography>

          {/* Google Login */}
          <Button
            variant="outlined"
            fullWidth
            className="!normal-case !font-medium !rounded-xl !border !text-white !py-2 hover:!bg-[#2c2c2c] flex gap-2"
          >
            <img
              src={GoogleIcon}
              alt="Google Icon"
              className="w-5 h-5 object-contain"
            />
            Continue with Google
          </Button>

          <Divider className="!my-6 !border-gray-700 text-[#FBD200]">
            OR
          </Divider>

          {/* Input Fields */}
          <Box className="space-y-5 !mb-6">
            <TextField
              label="Email Address"
              variant="standard"
              fullWidth
              size="small"
              InputLabelProps={{ style: { color: "#aaa", fontSize: "14px" } }}
            />
            <TextField
              label="Password"
              variant="standard"
              type="password"
              fullWidth
              size="small"
              InputLabelProps={{ style: { color: "#aaa", fontSize: "14px" } }}
            />
            <TextField
              label="Confirm Password"
              variant="standard"
              type="password"
              fullWidth
              size="small"
              InputLabelProps={{ style: { color: "#aaa", fontSize: "14px" } }}
            />
          </Box>

          {/* Submit Button */}
          <Button
            fullWidth
            variant="contained"
            className="!bg-[#FBD200] !text-black  !rounded-xl !py-3 hover:!bg-[#e5c100] "
          >
            Create Account
          </Button>

          {/* Footer */}
          <Typography className="!mt-4 !text-sm !text-gray-400 text-center">
            Already have an account?{" "}
            <span className="text-[#FBD200] hover:underline cursor-pointer">
              Sign In
            </span>
          </Typography>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default Login;
