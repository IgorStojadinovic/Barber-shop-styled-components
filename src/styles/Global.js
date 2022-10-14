import { createGlobalStyle } from "styled-components";
import SegoeUI from "../fonts/Segoe UI.ttf";
import bgTexture from "../images/Icons/lines-background-texture.svg";

const GlobalStyles = createGlobalStyle`



@font-face {
        font-family: 'Segoe UI';
        src: local('Segoe UI'), local('Segoe UI'),
        url(${SegoeUI}) format('ttf'),
    
        font-weight: 500;
        font-style: normal;
    }


   

*{margin: 0;
  padding: 0;
  box-sizing: border-box;

}

body{
  font-family: "Segoe UI";
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  background-color: #fefefe;

}
a{
  font-family: "Segoe UI";
  font-size: 15px;
  font-weight: 500;
}


h1{

  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 45px;
  font-style: italic;

}
h2{
  font-family: Georgia, 'Times New Roman', Times, serif;

  font-size: 35px;
  font-style: italic;

}

#root{
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${bgTexture});
  background-position: center;
  background-size:cover;

}
`;

export default GlobalStyles;
