
import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./components/Routes";
function App() {
  const [darktheme,setdarktheme]=useState(false);
  return (
    
    <div className={darktheme ? "dark":" "}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen" >
      MOMO
      </div> 
    </div>
  );
}

export default App;
