import React from "react";
import { motion } from "framer-motion";
import { Button, Divider, Popover, Whisper } from "rsuite";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive/src";
import StarfieldAnimation from "react-starfield-animation";

const fastSpeaker = (
  <Popover>
    <div className="d-flex flex-row align-items-baseline">
      <h5>fast</h5>
      <p className="text-white-50 ml-2">\ fast \</p>
    </div>
    <p className="text-white-50 ml-1">adjective</p>
    <ul className="pl-3">
      <li>
        <p className="h6">accomplished quickly</p>
      </li>
      <li>
        <p className="h6">taking a comparatively short time</p>
      </li>
      <li>
        <p className="h6">agile of mind</p>
      </li>
    </ul>
  </Popover>
);

const comprehensiveSpeaker = (
  <Popover>
    <div className="d-flex flex-row align-items-baseline">
      <h5>comprehensive</h5>
      <p className="text-white-50 ml-2">\ kom-pri-hen-siv \</p>
    </div>
    <p className="text-white-50 ml-1">adjective</p>
    <ul className="pl-3">
      <li>
        <p className="h6">of large scope</p>
      </li>
      <li>
        <p className="h6">thoroughly understanding with one's mind</p>
      </li>
      <li>
        <p className="h6">complete</p>
      </li>
    </ul>
  </Popover>
);

const accessibleSpeaker = (
  <Popover>
    <div className="d-flex flex-row align-items-baseline">
      <h5>accessible</h5>
      <p className="text-white-50 ml-2">\ ak-ses-uh-buh l \</p>
    </div>
    <p className="text-white-50 ml-1">adjective</p>
    <ul className="pl-3">
      <li>
        <p className="h6">easy to use</p>
      </li>
      <li>
        <p className="h6">available to everyone</p>
      </li>
      <li>
        <p className="h6">obtainable</p>
      </li>
    </ul>
  </Popover>
);
function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {!isTabletOrMobile && (
        <StarfieldAnimation className="position-absolute w-100 h-100 starfield" />
      )}
      <div className="w-100 flex d-flex flex-column align-items-center justify-content-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: -25 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="cursor-pointer text-center">Hi, I'm Noah.</h1>
        </motion.div>
        <Divider />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: -25 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="d-flex flex-row align-items-center justify-content-center flex-wrap px-3">
            <h2 className="cursor-pointer">I develop&nbsp;</h2>
            <Whisper placement="top" tigger="hover" speaker={fastSpeaker}>
              <h2 className="cursor-pointer">fast,</h2>
            </Whisper>
            <h2 className="cursor-pointer">&nbsp;</h2>
            <Whisper
              placement="top"
              tigger="hover"
              speaker={comprehensiveSpeaker}
            >
              <h2 className="cursor-pointer">comprehensive,</h2>
            </Whisper>
            <h2 className="cursor-pointer">&nbsp;and&nbsp;</h2>
            <Whisper placement="top" tigger="hover" speaker={accessibleSpeaker}>
              <h2 className="cursor-pointer">accessible&nbsp;</h2>
            </Whisper>
            <h2 className="cursor-pointer">software.</h2>
          </div>
        </motion.div>
        <motion.div
          style={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          <NavLink to={"/projects"} style={{ marginRight: 5 }}>
            <Button size={"lg"}>See my work</Button>
          </NavLink>
          <Button
            target={"_blank"}
            href={"/resume"}
            size={"lg"}
            style={{ marginLeft: 5 }}
          >
            See my resume
          </Button>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
