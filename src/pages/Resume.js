import {
  Flex,
  Heading,
  IconButton,
  Link,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/all";
import { Document, Page } from "react-pdf";

const Resume = () => {
  const { colorMode } = useColorMode();
  const documentScale = useBreakpointValue({
    base: 0.3,
    xs: 0.5,
    sm: 0.7,
    md: 0.8,
    lg: 1,
  });

  return (
    <Flex
      width={"100%"}
      minHeight={{ base: undefined, md: "100vh" }}
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
          <Page pageNumber={1} scale={documentScale} />
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
