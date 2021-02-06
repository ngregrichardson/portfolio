import { Flex, Heading } from "@chakra-ui/react";

const Section = ({ title, titleRef, children, ...rest }) => (
  <Flex
    width={"100vw"}
    minHeight={"100vh"}
    direction={"column"}
    alignItems={"center"}
    position={"relative"}
    paddingY={"50px"}
    {...rest}
  >
    <Heading textAlign={"center"} ref={titleRef}>
      {title}
    </Heading>
    {children}
  </Flex>
);

export default Section;
