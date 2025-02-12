// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Tiktok from "./Tiktok";
// import Contact from "./Contact";
// import Singleproduct from "./Singleproduct";
// import { GlobalStyle } from "./Globalstyle";
// import { ThemeProvider } from "styled-components";
// import Header from "./components/Header";
// import "./App.css";
// import Footer from "./components/Footer";
// import Otherservices from "./Otherservices";
// import Threads from "./Threads"; // Import the Threads component
// import BuyFollowers from "./Pages/BuyFollowers";
// import GetStarted from "./Pages/GetStarted";
// import ProfileDisplay from "./Pages/ProfileDisplay";

// const App = () => {
//   const theme = {
//     colors: {
//       text: "rgba(29,29,29,.8)",
//       white: "#fff",
//       black: "#8490ff",
//       bg: "#F6F8FA",
//       footer_bg: "#0a1435",
//       btn: "rgb(98 84 243)",
//       border: "rgba(98,84,243,0.5)",
//       hr: "#ffffff",
//       gradient:
//         "linear-gradient(0deg,rgb(132 144 255) 0% rgb(98 189 252) 100%)",
//       shadow:
//         "rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px",
//       shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
//     },
//     media: {
//       mobile: "786px",
//       tab: "998px",
//     },
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Router>
//         <GlobalStyle />
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/tiktok" element={<Tiktok />} />
//           <Route path="/threads" element={<Threads />} />
//           <Route path="/otherservices" element={<Otherservices />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/singleproduct/:id" element={<Singleproduct />} />
//           <Route path="/buy" element={<BuyFollowers />} />
//           <Route path="/getstarted" element={<GetStarted />} />
//           <Route path="/profile/:username" element={<ProfileDisplay />} />{" "}
//           {/* Add the new route */}
//         </Routes>
//         <Footer />
//       </Router>
//     </ThemeProvider>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Tiktok from "./Tiktok";
import Contact from "./Contact";
import Singleproduct from "./Singleproduct";
import { GlobalStyle } from "./Globalstyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Otherservices from "./Otherservices";
import Threads from "./Threads";
import BuyFollowers from "./Pages/BuyFollowers";
import GetStarted from "./Pages/GetStarted";
import ProfileDisplay from "./Pages/ProfileDisplay";
import { ServiceProvider } from "./ServiceContext";

const App = () => {
  const theme = {
    colors: {
      text: "rgba(29,29,29,.8)",
      white: "#fff",
      black: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98,84,243,0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg,rgb(132 144 255) 0% rgb(98 189 252) 100%)",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: {
      mobile: "786px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <ServiceProvider>
        <Router>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tiktok" element={<Tiktok />} />
            <Route path="/threads" element={<Threads />} />
            <Route path="/otherservices" element={<Otherservices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<Singleproduct />} />
            <Route path="/buy" element={<BuyFollowers />} />
            <Route path="/getstarted" element={<GetStarted />} />
            <Route path="/profile/:username" element={<ProfileDisplay />} />
          </Routes>
          <Footer />
        </Router>
      </ServiceProvider>
    </ThemeProvider>
  );
};

export default App;
