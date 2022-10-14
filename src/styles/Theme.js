import React from "react";
import { ThemeProvider } from "styled-components";


 const theme = {
  colors: {
    textSelection: "#EA714C",
    baseText:"#484B4D",
    textWhite:"#ffffff",
    subheading:"#EA714C",
    link:"#EA714C",
    linkHover:"#d65730",
    headingColor:"#1A1E21",
    borderColorLight:"#ece8e3",
    borderColorDark:"#1A1E21",
    btnBgHover: "#EA714C",
    websiteColor:"#fefefe",
    btnTextDark:"#1A1E21",
    btnTextWhite:"white",
    btnbgDark:"#1a1e21",
    btnbgLight: "#fefefe",
    subheadingWhite:"#d8d2cb",

    
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);


export default Theme;