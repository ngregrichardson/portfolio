import { useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ThemeToggle from "./components/themeToggle";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const App = () => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    document.body.style.backgroundColor =
      colorMode === "light" ? "#ffffff" : "#000000";
  }, [colorMode]);

  return (
    <>
      <Navbar />
      <ThemeToggle />
      <Home />
      <Projects />
      <Resume />
      <Footer />
    </>
  );
};

export default App;
