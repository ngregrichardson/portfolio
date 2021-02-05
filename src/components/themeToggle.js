import { IconButton, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/all";

const ThemeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      position={"fixed"}
      bottom={30}
      right={30}
      zIndex={1}
      aria-label={`Turn on ${colorMode === "light" ? "dark" : "light"} mode`}
      icon={
        colorMode === "light" ? (
          <FiMoon size={"25px"} />
        ) : (
          <FiSun size={"25px"} />
        )
      }
      onClick={toggleColorMode}
      boxSize={"60px"}
    />
  );
};

export default ThemeToggle;
