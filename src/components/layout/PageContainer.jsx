import { Container, ThemeProvider } from "@mui/material";
import React from "react";
import darkTheme from "./Theme";

const PageContainer = ({ children }) => {
  return (
    <>
      <Container className="" maxWidth="lg">
        <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
      </Container>
    </>
  );
};

export default PageContainer;
