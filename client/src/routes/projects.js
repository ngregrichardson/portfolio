import React, { useEffect, useRef, useState } from "react";
import { Panel, PanelGroup, Pagination, Icon, Button } from "rsuite";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive/src";
import classNames from "classnames";
import { Scrollbars } from "react-custom-scrollbars";
const baseUrl = "https://api.github.com/";
const reposPerPage = 7;

function Projects() {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reposRef = useRef(repos);
  const currentPageRef = useRef(currentPage);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    reposRef.current = repos;
    currentPageRef.current = currentPage;
  });

  let getRepositories = (page = 1) => {
    fetch(`${baseUrl}users/ngregrichardson/repos`)
      .then((result) => result.json())
      .then((result) =>
        setRepos(
          result.filter(
            (repo) => !repo.fork && !repo.archived && repo.description !== null
          )
        )
      )
      .catch((e) => console.log(e));
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

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

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
                {repo.homepage && repo.homepage.trim() !== "" ? (
                  <div className="d-flex flex-row align-items-center mb-1">
                    <a
                      href={repo.homepage}
                      target={"_blank"}
                      rel="noreferrer noopener"
                      className="h3 text-white text-decoration-underline mr-3"
                    >
                      {repo.name}
                    </a>
                    <Button
                      size="lg"
                      appearance={"subtle"}
                      href={`https://github.com/ngregrichardson/${repo.name}`}
                      target={"_blank"}
                      rel="noreferrer noopener"
                    >
                      <Icon icon="github" size="lg" />
                    </Button>
                  </div>
                ) : (
                  <div className="d-flex flex-row align-items-center">
                    <p className={"h3"}>{repo.name}</p>
                    <Button
                      size="lg"
                      appearance={"subtle"}
                      href={`https://github.com/ngregrichardson/${repo.name}`}
                      target={"_blank"}
                      rel="noreferrer noopener"
                    >
                      <Icon icon="github" size="lg" />
                    </Button>
                  </div>
                )}
                <p>{repo.description}</p>
              </motion.div>
            </Panel>
          ))}
        </Scrollbars>
      </PanelGroup>
      <div className="w-100 d-flex align-items-end mb-5 justify-content-center">
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
