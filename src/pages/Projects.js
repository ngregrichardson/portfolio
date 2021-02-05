import {
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/all";
import Project from "../components/project";

const baseUrl = "https://api.github.com/";
const reposPerPage = 5;

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const getRepositories = () => {
    fetch(`${baseUrl}users/ngregrichardson/repos`)
      .then((result) => result.json())
      .then((result) =>
        setRepos(
          result.filter(
            (repo) => !repo.fork && !repo.archived && repo.description !== null
          )
        )
      )
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  const incrementPage = () => {
    setCurrentPage((curr) => {
      if (curr + 1 <= Math.ceil(repos.length / reposPerPage)) {
        return curr + 1;
      }
      return curr;
    });
  };

  const decrementPage = () => {
    setCurrentPage((curr) => {
      if (curr - 1 >= 1) {
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
    <Flex
      width={"100vw"}
      minHeight={"100vh"}
      direction={"column"}
      alignItems={"center"}
      position={"relative"}
      paddingY={"50px"}
    >
      <Heading>My Work</Heading>
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
            width={"50%"}
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
            width={"50%"}
            justifyContent={"center"}
          >
            <IconButton
              aria-label={"Go to previous page of projects"}
              icon={<FiChevronLeft />}
              isDisabled={currentPage <= 1}
              onClick={decrementPage}
              size={"sm"}
            />
            <Stack as={Flex} direction={"row"}>
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
    </Flex>
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
