import { Button, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { FiGithub, FiGlobe } from "react-icons/all";

const Project = ({ project }) => (
  <Stack as={Flex} direction={"column"} padding={"15px"}>
    <Stack
      as={Flex}
      spacing={"15px"}
      direction={{ base: "column", md: "row" }}
      alignItems={"center"}
    >
      <Heading size={"lg"}>{project?.name}</Heading>
      {project?.homepage ? (
        <Button
          as={Link}
          leftIcon={<FiGlobe />}
          href={project?.homepage}
          isExternal
          className={"button-link"}
        >
          Live Demo
        </Button>
      ) : null}
      {project?.html_url ? (
        <Button
          as={Link}
          leftIcon={<FiGithub />}
          href={project?.html_url}
          isExternal
          className={"button-link"}
        >
          Source Code
        </Button>
      ) : null}
    </Stack>
    <Text paddingTop={"10px"} textAlign={{ base: "center", md: "left" }}>
      {project?.description}
    </Text>
  </Stack>
);

export default Project;
