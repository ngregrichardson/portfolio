import React from "react";
import { motion } from "framer-motion";
import { Button, Divider, Popover, Whisper } from "rsuite";
import { NavLink } from "react-router-dom";
import StarfieldAnimation from "react-starfield-animation";

function NoMatch() {
    return (
        <>
            <StarfieldAnimation className="position-absolute w-100 h-100 starfield" />
            <div className="w-100 flex d-flex flex-column align-items-center justify-content-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: -25 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="cursor-pointer text-center">Uh oh, that's an error (404)</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: -25 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="d-flex flex-row align-items-center justify-content-center flex-wrap px-3">
                        <h3 className="cursor-pointer">That page couldn't be found.</h3>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default NoMatch;
