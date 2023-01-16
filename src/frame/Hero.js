/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion, useAnimation, useScroll, useInView } from "framer-motion";
import { useState, useEffect } from "react";

const C = {
  container: css({
    widows: "100%",
    // border: "1px solid green",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),

  main: css({
    background: "#222",
    borderRadius: "20px",
    width: "100%",
    height: "100%",
    position: "relative",

    // padding:"0px 20px 20px 0px",
    maxWidth: "420px",
    maxHeight: "400px",

  }),
  row: css({
    display: "flex",
    height: "auto",
    minHeight: "100px",
    width: "100%",
    justifyContent: "space-between",
  }),
  img: css({
    objectFit: "cover",
    height: "100%",
    width: "100%",
    maxHeight: "400px",
    maxWidth: "400px",
    borderRadius: "20px",
    filter: "grayscale(100%)",
  }),
};

const Hero = () => {
  const { scrollY } = useScroll();
  const { height, width } = useWindowDimensions();

  const imgAnimation = useAnimation();

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = 10;
    imgAnimation.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor,
    });
  };

  return (
    <div css={C.container}>
      <div css={C.main}>
        <motion.img
          css={C.img}
          // animate={imgAnimation}
          // onMouseMove={(e) => handleMouseMove(e)}
          src="me.jpg"
        />
      </div>

      {/* <div css={C.row}>
        <div
          css={{
            width: "100px",
            height: "100px",
            background: "red",
            borderRadius: "20px",
          }}
        />
        <div
          css={{
            width: "100px",
            height: "100px",
            background: "red",
            borderRadius: "20px",
          }}
        />
      </div> */}

      {/* <motion.div css={C.main}>
        <img css={C.img} src="me.jpg"></img>
      </motion.div> */}

      {/* <div css={C.row}>
        <div
          css={{
            width: "100px",
            height: "100px",
            background: "red",
            borderRadius: "20px",
          }}
        />
        <div
          css={{
            width: "100px",
            height: "100px",
            background: "red",
            borderRadius: "20px",
          }}
        />
      </div>
      <div css={C.row}>
        <div
          css={{
            width: "100px",
            height: "100px",
            background: "red",
            borderRadius: "20px",
            marginLeft: "100px",
          }}
        />
      </div> */}
    </div>
  );
};

export default Hero;

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
