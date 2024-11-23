import { useState } from "react";
import Header from "./components/header/Header";
import ProductList from "./components/productList/ProductList";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
