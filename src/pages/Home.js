import { Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { FiArrowDown } from "react-icons/all";

const Home = () => {
  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Flex
        flex={1}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading size={"3xl"}>Hi, I'm Noah</Heading>
        <Heading marginTop={"15px"} color={"white.400"} size={"lg"}>
          I build software.
        </Heading>
      </Flex>
      <Flex direction={"column"} alignItems={"center"} paddingBottom={"30px"}>
        <Text>See my work</Text>
        <IconButton
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          aria-label={"See my work"}
          icon={<FiArrowDown />}
          isRound
          marginTop={"15px"}
        />
      </Flex>
    </Flex>
  );
};

export default Home;
