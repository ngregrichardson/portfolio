import React, { useEffect, useState } from "react";
import { Button, Divider, Icon, Nav, Navbar } from "rsuite";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import { withRouter } from "react-router-dom";

function NavBar(props) {
  const [open, setOpen] = useState(false);
  const defaultNavbar = useMediaQuery({ query: "(min-width: 575px)" });

  useEffect(() => {
    if (!defaultNavbar) {
      return props.history.listen(() => {
        setOpen(false);
      });
    }
  });

  if (defaultNavbar) {
    return (
      <Navbar {...props}>
        <Navbar.Header className="d-flex">
          <NavLink to={"/"} exact className="d-flex">
            <div className="navbar-brand logo align-self-center ml-3">
              ngregrichardson
            </div>
          </NavLink>
        </Navbar.Header>
        <Navbar.Body>
          <Nav>
            <NavLink to={"/"} exact>
              <Nav.Item>Home</Nav.Item>
            </NavLink>
            <NavLink to={"/projects"}>
              <Nav.Item>Projects</Nav.Item>
            </NavLink>
            <NavLink to={"/contact"}>
              <Nav.Item>Contact</Nav.Item>
            </NavLink>
          </Nav>
          <Nav pullRight>
            <a
              href={"https://github.com/ngregrichardson"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <Nav.Item
                icon={<Icon icon="github" size={"lg"} style={{ margin: 0 }} />}
              />
            </a>
            <a
              href={"https://www.linkedin.com/in/ngregrichardson"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <Nav.Item
                icon={
                  <Icon icon="linkedin" size={"lg"} style={{ margin: 0 }} />
                }
              />
            </a>
            <a
              href={"https://twitter.com/ngregrichardson"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <Nav.Item
                icon={<Icon icon="twitter" size={"lg"} style={{ margin: 0 }} />}
              />
            </a>
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  }
  return (
    <AnimatePresence>
      <Navbar {...props}>
        <div className="d-flex flex-row align-items-center justify-content-between">
          <Navbar.Header className="d-flex">
            <NavLink to={"/"} exact className="d-flex">
              <div className="navbar-brand logo align-self-center ml-3">
                ngregrichardson
              </div>
            </NavLink>
          </Navbar.Header>
          <Button
            appearance={"subtle"}
            onClick={() => setOpen(!open)}
            className="mr-2"
          >
            <Icon icon={"bars"} size="2x" />
          </Button>
        </div>
      </Navbar>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 225, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="dropdown"
          key="dropdown"
        >
          <Nav className="dropdown-nav">
            <NavLink to={"/"} exact>
              <Nav.Item className="dropdown-item">Home</Nav.Item>
            </NavLink>
            <NavLink to={"/projects"}>
              <Nav.Item className="dropdown-item">Projects</Nav.Item>
            </NavLink>
            <NavLink to={"/contact"}>
              <Nav.Item className="dropdown-item">Contact</Nav.Item>
            </NavLink>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <a
                href={"https://github.com/ngregrichardson"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <Nav.Item
                  icon={
                    <Icon icon="github" size={"3x"} style={{ margin: 0 }} />
                  }
                />
              </a>
              <a
                href={"https://www.linkedin.com/in/ngregrichardson"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <Nav.Item
                  icon={
                    <Icon icon="linkedin" size={"3x"} style={{ margin: 0 }} />
                  }
                />
              </a>
              <a
                href={"https://twitter.com/ngregrichardson"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <Nav.Item
                  icon={
                    <Icon icon="twitter" size={"3x"} style={{ margin: 0 }} />
                  }
                />
              </a>
            </div>
          </Nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default withRouter(NavBar);
