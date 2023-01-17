/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { LayoutGroup, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Hero from "./Hero";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { cursorState } from "./State";


const C = {
  container: css({
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: "3em",
  }),

  fade: css({
    color: "#fff",
    fontFamily: "gil",
    fontWeight: 700,

    width: "min-content",
  }),

  text: css({
    whiteSpace: "nowrap",
    "@media (max-width: 809px)": {
      fontSize: "calc(11.60714vw + 30px)",
    },
    "@media (min-width: 810px)": {
      fontSize: "calc(10vw + 15px)",
    },
  }),
};

const Land = () => {
  const [cursorVariant, setCursorVariant] = useRecoilState(cursorState);
  const [active, setActive] = useState(0);

  const Enter = (index) => {
    setActive(index);
    setCursorVariant("heading");
  };
  const Leave = () => {
    setActive(0);
    setCursorVariant("default");
  };

  const { height, width } = useWindowDimensions();

  return (
    <div css={C.container}>
      <Grid container height="auto">
        <Grid xs={12} md={"auto"}>
          <div
            css={{
              position: "relative",
              height: "auto",
              overflow: "hidden",
              width: "min-content",
            }}
          >
            <motion.div
              id="SLIDER"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 2, delay: 1.6, ease: "easeInOut" }}
            >
              <div css={[C.fade, C.text]}>Aspiring</div>
            </motion.div>
          </div>
        </Grid>

        {width < 900 ? (
          <Grid xs={12} md={12}>
            <div
              css={{
                width: "100%",
                textAlign: "end",
                overflow: "hidden",
              }}
            >
              <motion.div
                id="SLIDER"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 2, delay: 1.6, ease: "easeInOut" }}
              >
                <div css={{ position: "relative", overflow: "hidden" }}>
                  <motion.div
                    id="SLIDER"
                    css={{
                      width: "100%",
                      height: "100%",
                      background: "#14cf93",
                      padding: "1em",
                      position: "absolute",
                    }}
                    initial={{ x: 0 }}
                    animate={{ x: "110%" }}
                    transition={{
                      duration: 0.5,
                      delay: 3.7,
                      ease: "easeInOut",
                    }}
                  ></motion.div>
                  <div
                    css={[
                      {
                        fontFamily: "maz",
                        color: "#14cf93",
                        fontWeight: 400,
                      },
                      C.text,
                    ]}
                  >
                    Full-stack
                  </div>
                </div>
              </motion.div>
            </div>
          </Grid>
        ) : (
          <>
            <Grid xs={5} md>
              <div
                css={{
                  width: "min-content",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  id="SLIDER"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 2, delay: 1.6, ease: "easeInOut" }}
                >
                  <div css={{ position: "relative", overflow: "hidden" }}>
                    <motion.div
                      id="SLIDER"
                      css={{
                        width: "100%",
                        height: "100%",
                        background: "#14cf93",
                        padding: "1em",
                        position: "absolute",
                      }}
                      initial={{ x: 0 }}
                      animate={{ x: "110%" }}
                      transition={{
                        duration: 0.5,
                        delay: 3.7,
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                    <div
                      css={[
                        {
                          fontFamily: "maz",
                          color: "#14cf93",
                          fontWeight: 400,
                        },
                        C.text,
                      ]}
                    >
                      Full
                    </div>
                  </div>
                </motion.div>
              </div>
            </Grid>
            <Grid xs={12} md="12"></Grid>
            <Grid xs={5} md={5}>
              <div
                css={{
                  position: "relative",
                  height: "auto",
                  overflow: "hidden",
                  width: "min-content",
                  textAlign: "right",
                  marginLeft: "auto",
                }}
              >
                <motion.div
                  id="SLIDER"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 2, delay: 2.4, ease: "easeInOut" }}
                >
                  <div css={{ position: "relative", overflow: "hidden" }}>
                    <motion.div
                      id="SLIDER"
                      css={{
                        width: "100%",
                        height: "100%",
                        background: "#14cf93",
                        padding: "1em",
                        position: "absolute",
                      }}
                      initial={{ x: 0 }}
                      animate={{ x: "110%" }}
                      transition={{
                        duration: 0.5,
                        delay: 3.7,
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                    <div
                      css={[
                        {
                          fontFamily: "maz",
                          color: "#14cf93",
                          fontWeight: 400,
                        },
                        C.text,
                      ]}
                    >
                      Stack
                    </div>
                  </div>
                </motion.div>
              </div>
            </Grid>
          </>
        )}

        <Grid xs={12} md={7}>
          <div
            css={{
              position: "relative",
              height: "auto",
              overflow: "hidden",
            }}
          >
            <motion.div
              id="SLIDER"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 2, delay: 2.4, ease: "easeInOut" }}
            >
              <div css={[C.fade, C.text]}>Developer</div>
            </motion.div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Land;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
