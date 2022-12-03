import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
// import Login from "./Components/Login/Login.jsx";
import News from "./Components/News/News.jsx";
import Career from "./Components/Career/Career.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Login/> */}
      <News />
      <Career />
      <Footer />
    </div>
  );
};

export default App;
