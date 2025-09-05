import * as React from "react";
import { Box, Button, TextField, Typography, Divider } from "@mui/material";
import PageContainer from "../components/layout/PageContainer";
import authBg from "../components/assets/authBg.png";
import GoogleIcon from "../components/assets/icons/google-icon.svg";
import { Formik, Field, Form } from "formik";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";

const SignUp = () => {
  const ini = { fullName: "", email: "", password: "" };
  const FormFields = [
    { name: "fullName", type: "text", label: "Full Name" },
    { name: "email", type: "email", label: "Email" },
    { name: "password", type: "password", label: "Confirm Password" },
  ];
  const navigate = useNavigate();

  const handleFormData = (values, { resetForm }) => {
    console.log(values);
    alert("Registration SuccessFull !");
    navigate("/");
    resetForm();
  };

  return (
    <PageContainer>
      <Box className="min-h-screen flex justify-center items-center px-4 py-8">
        {/* Motion Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl p-5 lg:p-8 rounded-2xl flex flex-col lg:flex-row gap-10 border border-[#2c2c2c]"
        >
          {/* Left Side */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5 flex flex-col"
          >
            <Typography className="mb-4 !font-extrabold !text-[24px] lg:!text-[34px]">
              Register New User !
            </Typography>
            <Typography className="!text-gray-300 mb-4 !text-sm sm:text-base">
              Make your design look more beautiful with 3D abstract geometric
              digital art.
            </Typography>
            <Box className="flex justify-center lg:justify-start">
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                src={authBg}
                alt="authBg"
                className="h-[220px] sm:h-[380px] lg:h-[340px] w-full object-cover"
              />
            </Box>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-3/5"
          >
            {/* Header */}
            <Typography
              variant="h5"
              className="!text-white !mb-2 !font-extrabold text-center lg:text-left"
            >
              Create New Account
            </Typography>
            <Typography
              variant="subtitle1"
              className="!text-gray-400 !mb-6 text-center lg:text-left !text-sm"
            >
              Jaldi Se New Account Banale.. Tere Liye Ek Surprise he !!
            </Typography>

            {/* Google Login */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
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
            </motion.div>

            <Divider className="!my-6 !border-gray-700 text-[#FBD200]">
              OR
            </Divider>

            {/* Input Fields */}
            <Formik
              onSubmit={handleFormData}
              enableReinitialize
              initialValues={ini}
            >
              <Form className="space-y-5">
                {FormFields.map((el, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  >
                    <Field
                      as={TextField}
                      label={el.label}
                      variant="standard"
                      fullWidth
                      size="small"
                      name={el.name}
                      type={el.type}
                      InputLabelProps={{
                        style: { color: "#aaa", fontSize: "14px" },
                      }}
                      required
                    />
                  </motion.div>
                ))}

                {/* Submit Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className="!bg-[#FBD200] !text-black !rounded-xl !py-3 hover:!bg-[#e5c100]"
                  >
                    Register
                  </Button>
                </motion.div>
              </Form>
            </Formik>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="!mt-4 "
            >
              <Link to="/" className="!text-sm !text-gray-400 text-center">
                Already have an account?{" "}
                <span className="text-[#FBD200] hover:underline cursor-pointer">
                  Login
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </Box>
    </PageContainer>
  );
};

export default SignUp;
