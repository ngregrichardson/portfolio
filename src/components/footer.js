import { Flex, Text } from "@chakra-ui/react";

const Footer = () => (
  <Flex
    width={"100%"}
    paddingY={"30px"}
    alignItems={"center"}
    justifyContent={"center"}
  >
    <Text>&copy; Noah Richardson {new Date().getFullYear()}</Text>
  </Flex>
);

export default Footer;
