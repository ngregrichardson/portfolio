import {
  Flex,
  Heading,
  Link,
  Stack,
  Button,
  Text,
  List,
  ListItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  useTheme,
} from "@chakra-ui/core";
import React from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import ShadersBackground from "../components/shadersBackground";

const fastSpeaker = (
  <>
    <Flex align={"baseline"}>
      <Heading as={"h6"}>fast</Heading>
      <Text color={"white"} opacity={0.5} ml={2}>
        \ fast \
      </Text>
    </Flex>
    <Text color={"white"} opacity={0.5} ml={1}>
      adjective
    </Text>
    <List pl={3} styleType={"disc"}>
      <ListItem>accomplished quickly</ListItem>
      <ListItem>taking a comparatively short time</ListItem>
      <ListItem>agile of mind</ListItem>
    </List>
  </>
);

const comprehensiveSpeaker = (
  <>
    <Flex align={"baseline"}>
      <Heading as={"h6"}>comprehensive</Heading>
      <Text color={"white"} opacity={0.5} ml={2}>
        \ kom-pri-hen-siv \
      </Text>
    </Flex>
    <Text color={"white"} opacity={0.5} ml={1}>
      adjective
    </Text>
    <List pl={3} styleType={"disc"}>
      <ListItem>of large scope</ListItem>
      <ListItem>thoroughly understanding with one's mind</ListItem>
      <ListItem>complete</ListItem>
    </List>
  </>
);

const accessibleSpeaker = (
  <>
    <Flex align={"baseline"}>
      <Heading as={"h6"}>accessible</Heading>
      <Text color={"white"} opacity={0.5} ml={2}>
        \ ak-ses-uh-buh l \
      </Text>
    </Flex>
    <Text color={"white"} opacity={0.5} ml={1}>
      adjective
    </Text>
    <List pl={3} styleType={"disc"}>
      <ListItem>easy to use</ListItem>
      <ListItem>available to everyone</ListItem>
      <ListItem>obtainable</ListItem>
    </List>
  </>
);
function Home() {
  const history = useHistory();
  const theme = useTheme();
  return (
    <>
      <ShadersBackground />
      <Flex
        w={"100%"}
        flex={1}
        flexDir={"column"}
        align={"center"}
        justify={"center"}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: -25 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Heading as={"h1"} textAlign={"center"} mb={15}>
            Hi, I'm Noah.
          </Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: -25 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Flex
            flex={1}
            align={"center"}
            justify={"center"}
            flexWrap={"wrap"}
            mx={3}
            cursor={"text"}
          >
            <Heading as={"h2"}>I develop&nbsp;</Heading>
            <Popover placement={"top"} trigger={"hover"}>
              <PopoverTrigger>
                <Heading as={"h2"}>fast</Heading>
              </PopoverTrigger>
              <PopoverContent zIndex={4} bg={theme.colors.black["500"]}>
                <PopoverArrow />
                <PopoverBody>{fastSpeaker}</PopoverBody>
              </PopoverContent>
            </Popover>
            <Heading as={"h2"}>,&nbsp;</Heading>
            <Popover placement={"top"} trigger={"hover"}>
              <PopoverTrigger>
                <Heading as={"h2"}>comprehensive</Heading>
              </PopoverTrigger>
              <PopoverContent zIndex={4} bg={theme.colors.black["500"]}>
                <PopoverArrow />
                <PopoverBody>{comprehensiveSpeaker}</PopoverBody>
              </PopoverContent>
            </Popover>
            <Heading as={"h2"}>,&nbsp;and&nbsp;</Heading>
            <Popover placement={"top"} trigger={"hover"}>
              <PopoverTrigger>
                <Heading as={"h2"}>accessible</Heading>
              </PopoverTrigger>
              <PopoverContent zIndex={4} bg={theme.colors.black["500"]}>
                <PopoverArrow />
                <PopoverBody>{accessibleSpeaker}</PopoverBody>
              </PopoverContent>
            </Popover>
            <Heading as={"h2"}>&nbsp;software.</Heading>
          </Flex>
        </motion.div>
        <motion.div
          style={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          <Stack isInline spacing={5}>
            <Button
              variantColor={"black"}
              onClick={() => history.push("/projects")}
              textDecoration={"none"}
            >
              See my work
            </Button>
            <Button
              as={Link}
              isExternal
              variantColor={"black"}
              href={"/resume.pdf"}
              target={"_blank"}
              style={{ textDecoration: "none", color: "white" }}
            >
              See my resume
            </Button>
          </Stack>
        </motion.div>
      </Flex>
    </>
  );
}

export default Home;
