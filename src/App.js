import Navigation from "./components/Navigation";
import GlobalStyles from "./styles/Global";
import Theme from "./styles/Theme";
import { Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      {" "}
      <GlobalStyles />
      <Theme>
        <Navigation/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Theme>
     
    </>
  );
};

export default App;
