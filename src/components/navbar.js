import { Flex, IconButton, Link, useColorMode } from "@chakra-ui/react";
import { FiGithub, FiLinkedin } from "react-icons/all";

const Navbar = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      direction={"row"}
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex={1}
      justifyContent={"flex-end"}
      backgroundColor={{
        base: colorMode === "light" ? "white.500" : "black.500",
        md: "transparent",
      }}
    >
      <IconButton
        as={Link}
        isExternal
        href={"https://www.github.com/ngregrichardson/"}
        aria-label={"GitHub"}
        icon={<FiGithub size={"30px"} />}
        borderRadius={0}
        boxSize={"75px"}
        variant={"ghost"}
      />
      <IconButton
        as={Link}
        isExternal
        href={"https://www.linkedin.com/in/ngregrichardson/"}
        aria-label={"LinkedIn"}
        icon={<FiLinkedin size={"30px"} />}
        borderRadius={0}
        boxSize={"75px"}
        variant={"ghost"}
      />
    </Flex>
  );
};

export default Navbar;
