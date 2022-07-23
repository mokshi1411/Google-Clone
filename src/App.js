import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoutes from "./components/PrivateRoutes";
function App() {
  const [darktheme, setdarktheme] = useState(false);

  return (
    <div className={darktheme ? "dark" : " "}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darktheme} setDarkTheme={setdarktheme} />
        <PrivateRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
