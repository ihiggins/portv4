/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import "./App.css";
import Load from "./frame/Load";
import Land from "./frame/Land";
import Me from "./frame/Me";
import { useState, useRef } from "react";
import Nav from "./frame/Nav";
import Bars from "./frame/Bars";
import Projects from "./frame/Projects";
import Action from "./frame/Action";
import useMouse from "@react-hook/mouse-position";
import { motion, useTransform, AnimatePresence } from "framer-motion";
import { cursorState } from "./frame/State";
import { useRecoilState } from "recoil";

function App() {
  const [state, setState] = useState(0);
  const ref = useRef(null);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useRecoilState(cursorState);

  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      cursor: "none",
      opacity: 1,
      height: 14,
      width: 14,
      fontSize: "16px",
      backgroundColor: "#14cf93",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        scale: { type: "spring", stiffness: 500, damping: 30 },
        type: "spring",
        mass: 0.6,
      },
    },
    expt: {
      opacity: 1,
      color: "#000",
      height: 0,
      width: 0,
      fontSize: "18px",
      x: mouseXPosition - 12,
      y: mouseYPosition - 8,
    },
    heading: {
      opacity: 1,
      height: 0,
      width: 0,
      x: mouseXPosition,
      y: mouseYPosition,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  // cursor previews
  let preview = false;
  if (cursorVariant === "expt")
    preview = (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="preview"
        >
          <motion.div className="cursor-row">
            <motion.div className="outline" />
            <motion.div className="cursor-title">View on GitHub</motion.div>
          </motion.div>
          {/* <div className="page">asdf</div> */}
        </motion.div>
      </AnimatePresence>
    );

  return (
    <div className="app" ref={ref}>
      <motion.div
        variants={variants}
        className="circle"
        animate={cursorVariant}
        transition={spring}
      >
        {preview}
      </motion.div>

      <Load setState={setState} />

      <Nav />
      <Land />
      <Me />
      <Bars />
      <Projects />
      <Action />
    </div>
  );
}

export default App;
