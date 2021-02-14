import {
  Button,
  Divider,
  Flex,
  IconButton,
  Spinner,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/all";
import Project from "../components/project";
import Section from "../components/section";

const baseUrl = "https://api.github.com/";
const reposPerPage = 5;

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const shouldScrollToList = useBreakpointValue({ base: true, md: false });
  const titleRef = useRef();

  const getRepositories = () => {
    fetch(`${baseUrl}users/ngregrichardson/repos`)
      .then((result) => result.json())
      .then((result) =>
        setRepos(
          result
            .filter((repo) => !repo.fork && repo.description !== null)
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
            .sort((a, b) =>
              a.archived === b.archived ? 0 : b.archived ? -1 : 1
            )
        )
      )
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  const incrementPage = () => {
    setCurrentPage((curr) => {
      if (curr + 1 <= Math.ceil(repos.length / reposPerPage)) {
        if (shouldScrollToList) {
          titleRef.current?.scrollIntoView({ behavior: "smooth" });
        }
        return curr + 1;
      }
      return curr;
    });
  };

  const decrementPage = () => {
    setCurrentPage((curr) => {
      if (curr - 1 >= 1) {
        if (shouldScrollToList) {
          titleRef.current?.scrollIntoView({ behavior: "smooth" });
        }
        return curr - 1;
      }
      return curr;
    });
  };

  const handlePageChange = (e) => {
    if (e.keyCode === 39) {
      incrementPage();
    } else if (e.keyCode === 37) {
      decrementPage();
    }
  };

  useEffect(() => {
    getRepositories();
    document.addEventListener("keydown", handlePageChange);
    return () => document.removeEventListener("keydown", handlePageChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section titleRef={titleRef} title={"My Work"}>
      {loading ? (
        <Flex alignItems={"center"} justifyContent={"center"} flex={1}>
          <Spinner boxSize={"75px"} />
        </Flex>
      ) : (
        <>
          <Stack
            as={Flex}
            flex={1}
            direction={"column"}
            width={{ base: "95%", md: "75%", lg: "65%", xl: "50%" }}
            divider={<Divider borderColor={"black.500"} />}
            marginY={"50px"}
          >
            {repos
              .slice(
                (currentPage - 1) * reposPerPage,
                currentPage * reposPerPage
              )
              .map((repo) => (
                <Project project={repo} />
              ))}
          </Stack>
          <Stack
            as={Flex}
            direction={"row"}
            width={{ base: "95%", md: "75%", lg: "65%", xl: "50%" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <IconButton
              aria-label={"Go to previous page of projects"}
              icon={<FiChevronLeft />}
              isDisabled={currentPage <= 1}
              onClick={decrementPage}
              size={"sm"}
            />
            <Stack
              as={Flex}
              direction={"row"}
              wrap={"wrap"}
              justifyContent={"center"}
            >
              {generatePaginationArray(
                Math.ceil(repos.length / reposPerPage)
              ).map((ignored, i) => (
                <Button
                  isDisabled={currentPage === i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  size={"sm"}
                >
                  {i + 1}
                </Button>
              ))}
            </Stack>
            <IconButton
              aria-label={"Go to next page of projects"}
              icon={<FiChevronRight />}
              isDisabled={
                currentPage + 1 > Math.ceil(repos.length / reposPerPage)
              }
              size={"sm"}
              onClick={incrementPage}
            />
          </Stack>
        </>
      )}
    </Section>
  );
};

const generatePaginationArray = (numberOfPages) => {
  let arr = [];
  for (let i = 1; i <= numberOfPages; i++) {
    arr.push(null);
  }
  return arr;
};

export default Projects;
