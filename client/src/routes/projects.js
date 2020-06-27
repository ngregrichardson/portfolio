import React, { useEffect, useRef, useState } from "react";
import {
  Panel,
  PanelGroup,
  Pagination,
  Icon,
  IconButton,
  Loader,
} from "rsuite";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive/src";
import classNames from "classnames";
import { Scrollbars } from "react-custom-scrollbars";
const baseUrl = "https://api.github.com/";
const reposPerPage = 7;

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const reposRef = useRef(repos);
  const currentPageRef = useRef(currentPage);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    reposRef.current = repos;
    currentPageRef.current = currentPage;
  });

  let getRepositories = () => {
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

  let _handlePageChange = (e) => {
    if (e.keyCode === 39) {
      if (
        currentPageRef.current + 1 <=
        Math.ceil(reposRef.current.length / reposPerPage)
      ) {
        setCurrentPage(currentPageRef.current + 1);
      }
    } else if (e.keyCode === 37) {
      if (currentPageRef.current - 1 >= 1) {
        setCurrentPage(currentPageRef.current - 1);
      }
    }
  };

  useEffect(() => {
    getRepositories();
    document.addEventListener("keydown", _handlePageChange, false);
    return () =>
      document.removeEventListener("keydown", _handlePageChange, false);
  }, []);

  if (loading) {
    return <Loader size={"lg"} className={"loader"} />;
  }

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  if (currentRepos.length <= 0) {
    return (
      <PanelGroup
        className={classNames(
          "flex h-100 w-100 d-flex flex-column align-items-center justify-content-center"
        )}
      >
        <h2 className="mx-3 text-center">
          There was a problem loading the projects
        </h2>
        <IconButton
          appearance={"subtle"}
          href={`https://github.com/ngregrichardson`}
          target={"_blank"}
          rel="noreferrer noopener"
          style={{ marginTop: 15 }}
          icon={<Icon icon="github" size="lg" />}
        >
          View My GitHub
        </IconButton>
      </PanelGroup>
    );
  }

  return (
    <AnimatePresence>
      <PanelGroup className={classNames("flex h-100 w-100")}>
        <Scrollbars
          renderView={(props) => <div {...props} className="" />}
          style={{
            width: "100%",
            height: "100%",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2 className="mt-2 text-center">My Projects</h2>
          {currentRepos.map((repo) => (
            <Panel
              key={Math.random() * 5}
              className={classNames("my-0 mx-auto align-self-center", {
                "w-50": !isTabletOrMobile,
                "w-100": isTabletOrMobile,
              })}
            >
              <motion.div
                key={Math.random() * 5}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div
                  className={
                    isTabletOrMobile
                      ? "d-flex flex-column mb-2 align-items-start"
                      : "d-flex flex-row mb-2 align-items-center"
                  }
                >
                  <p className="h3">{repo.name.replace(/-/g, " ")}</p>
                  {repo.homepage && repo.homepage.trim() !== "" && (
                    <IconButton
                      appearance={"subtle"}
                      href={repo.homepage}
                      target={"_blank"}
                      rel="noreferrer noopener"
                      style={
                        isTabletOrMobile
                          ? {}
                          : { marginLeft: 10, marginRight: 10 }
                      }
                      icon={<Icon icon="globe2" size="lg" />}
                    >
                      Live Demo
                    </IconButton>
                  )}
                  <IconButton
                    appearance={"subtle"}
                    href={`https://github.com/ngregrichardson/${repo.name}`}
                    target={"_blank"}
                    rel="noreferrer noopener"
                    style={
                      isTabletOrMobile
                        ? {}
                        : { marginLeft: 10, marginRight: 10 }
                    }
                    icon={<Icon icon="github" size="lg" />}
                  >
                    Source Code
                  </IconButton>
                </div>
                <p>{repo.description}</p>
              </motion.div>
            </Panel>
          ))}
        </Scrollbars>
      </PanelGroup>
      <div
        className={
          isTabletOrMobile
            ? "w-100 d-flex align-items-end mb-1 justify-content-center"
            : "w-100 d-flex align-items-end mb-5 justify-content-center"
        }
      >
        <Pagination
          pages={Math.ceil(repos.length / reposPerPage)}
          activePage={currentPage}
          onSelect={setCurrentPage}
          next
          prev
          size={"lg"}
        />
      </div>
    </AnimatePresence>
  );
}

export default Projects;
