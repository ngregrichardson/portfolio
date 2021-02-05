import {
  Flex,
  Heading,
  IconButton,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/all";
import { Document, Page } from "react-pdf";

const Resume = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      width={"100vw"}
      minHeight={"100vh"}
      direction={"column"}
      alignItems={"center"}
      position={"relative"}
      paddingY={"50px"}
    >
      <Heading>My Resume</Heading>
      <Flex
        justifyContent={"center"}
        flex={1}
        marginTop={"50px"}
        position={"relative"}
      >
        <Document file={"/resume.pdf"}>
          <Page pageNumber={1} />
        </Document>
        <IconButton
          as={Link}
          isExternal
          href={"/resume.pdf"}
          aria-label={"Open resume in new tab"}
          icon={<FiExternalLink />}
          position={"absolute"}
          colorScheme={colorMode === "light" ? "black" : "white"}
          top={15}
          right={15}
        />
      </Flex>
    </Flex>
  );
};

export default Resume;
