import { useState } from "react";
import Header from "./components/header/Header";
import ProductList from "./components/productList/ProductList";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((darkMode) => {
      if (!darkMode) {
        document.documentElement.classList.add("dark-mode");
      } else {
        document.documentElement.classList.remove("dark-mode");
      }
      return !darkMode;
    });
  };

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <ProductList />
      <Footer />
    </>
  );
}

export default App;
