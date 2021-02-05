import { Flex, IconButton, Link } from "@chakra-ui/react";
import { FiGithub, FiLinkedin } from "react-icons/all";

const Navbar = () => (
  <Flex
    direction={"row"}
    position={"fixed"}
    top={0}
    left={0}
    right={0}
    zIndex={1}
    justifyContent={"flex-end"}
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

export default Navbar;
