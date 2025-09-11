import { Link } from "react-router";
import PageContainer from "../layout/PageContainer";
import footerLogo from "../assets/WebLogo/footerLogo.svg";
import { AiFillPrinter } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaGooglePlusG,
  FaPinterest,
  FaRss,
  FaPhoneAlt,
  FaLocationArrow,
} from "react-icons/fa";
import { Box } from "@mui/material";

function Footer() {
  const navLinks = [
    "About us",
    "Contact us",
    "Help",
    "Privacy Policy",
    "Disclaimer",
  ];
  const socialIcons = [
    FaFacebookSquare,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaInstagram,
    FaGooglePlusG,
    FaPinterest,
    FaRss,
  ];

  return (
    <footer className="relative bg-transparent text-white overflow-hidden">
      {/* Gradient Overlays */}
      <Box className="absolute top-0 left-20 sm:left-48  w-72 h-72 bg-blue-500/10 blur-3xl rounded-full -translate-x-1/3 -translate-y-1/3" />
      <Box className="absolute bottom-0 right-0 w-72 h-72 bg-fuchsia-500/10 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

      <PageContainer>
        {/* Top Section */}
        <Box className="relative z-10 px-6 py-5 md:py-12 border-t-2 border-gray-600 flex flex-col md:flex-row justify-between gap-6 sm:gap-10">
          <img
            src={footerLogo}
            alt="Logo"
            className="h-14 sm:h-16 object-contain"
          />

          <Box className="lg:w-[40%] space-y-4">
            <Box className="flex items-center gap-4">
              <FaLocationArrow />
              <p className="font-extralight text-sm">
                123, Bourdillon Avenue, Ikoyi, Lagos
              </p>
            </Box>
            <Box className="flex justify-between items-center">
              <Box className="flex items-center gap-4">
                <FaPhoneAlt />
                <p className="font-extralight text-sm">(123) 456-7890</p>
              </Box>
              <Box className="flex items-center gap-4">
                <AiFillPrinter />
                <p className="font-extralight text-sm">(123) 456-7890</p>
              </Box>
            </Box>
            <Box className="flex flex-col sm:flex-row items-center gap-4 pt-6">
              <p className="text-sm sm:text-base ">Follow :</p>
              <Box className="flex gap-4">
                {socialIcons.map((Icon, i) => (
                  <Link
                    key={i}
                    to="/"
                    className="hover:text-gray-400 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom Bar */}
        <Box className="relative z-10 border-t border-gray-800/70 p-6 flex flex-col sm:flex-row justify-between items-center gap-5 text-xs text-gray-500">
          <Box className="flex flex-col sm:flex-row items-center  gap-5 font-sans">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to="/"
                className="text-sm text-white uppercase hover:text-gray-400 transition"
              >
                {link}
              </Link>
            ))}
          </Box>
          <Box>
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-300 font-medium">Digi Unite</span>. All
            rights reserved.
          </Box>
        </Box>
      </PageContainer>
    </footer>
  );
}

export default Footer;
