/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Grid from "@mui/material/Unstable_Grid2";
import Hero from "./Hero";
import { useRecoilState } from "recoil";
import { cursorState } from "./State";
import { useState } from "react";

const C = {
  container: css({
    width: "100%",
    // border: "1px solid green",

    maxWidth: "1000px",
    margin: "0 auto",
    color: "#fff",

    "@media (max-width: 900px)": {
      maxWidth: "90%",
    },
    "@media (min-width: 901px)": {
      width: "95%",
      margin: "4em auto 0",
    },
  }),
  title: css({
    fontSize: "35px",
    fontFamily: "gil",
    color: "#fff",
    // padding: "0 0 0 2em",
    textDecoration: "underline",
    lineHeight: "150%",
    transition: "text-decoration 300ms",
  }),
  desc: css({
    margin: "0 auto 20px auto",
    lineHeight: "32px",
    fontSize: "22px",
    fontFamily: "league spartan",
    color: "#dadada",
    transition: "text-decoration-color 300ms",
    textDecoration: "underline",
  }),
  heading: css({
    margin: "0 auto 20px 0",
    // marginRight: "auto",
    fontSize: "35px",
    fontFamily: "gil",
    fontWeight: 700,
    color: "#fff",
    cursor: "none",
    width: "min-content",
    textDecoration: "underline",
    whiteSpace: "nowrap",
    transition: "text-decoration-color 300ms",
  }),
};

const Me = () => {
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

  return (
    <div css={C.container}>
      <div
        style={
          active === 1
            ? { textDecorationColor: "#14cf93" }
            : { textDecorationColor: "#fff" }
        }
        css={C.heading}
        onMouseEnter={() => {
          Enter(1);
        }}
        onMouseLeave={Leave}
      >
        About Me
      </div>

      <Grid container width="100%" height="auto">
        <Grid xs={12} md={6}>
          <Hero />
        </Grid>

        <Grid xs={12} md={6}>
          <div
            css={{
              margin: " 0 2em",
              "@media (max-width: 900px)": {
                margin: "0",
              },
            }}
          >
            <h1
              css={C.title}
              style={
                active === 2
                  ? {
                      textDecorationColor: "#14cf93",
                    }
                  : { textDecorationColor: "transparent" }
              }
              onMouseEnter={() => {
                Enter(2);
              }}
              onMouseLeave={Leave}
            >
              I'm Isaac, a Full-Stack Developer located in Boston.
            </h1>

            <p
              css={C.desc}
              style={
                active === 3
                  ? {
                      textDecorationColor: "#14cf93",
                    }
                  : { textDecorationColor: "transparent" }
              }
              onMouseEnter={() => {
                Enter(3);
              }}
              onMouseLeave={Leave}
            >
              I recently graduated from Umass Boston with a degree in
              Information Technology and I'm now looking for a new opportunity.
            </p>
            <p
              css={C.desc}
              style={
                active === 4
                  ? {
                      textDecorationColor: "#14cf93",
                    }
                  : { textDecorationColor: "transparent" }
              }
              onMouseEnter={() => {
                Enter(4);
              }}
              onMouseLeave={Leave}
            >
              I code mostly with TypeScript and Python and I have some
              experience working all across the stack from orchestrating docker
              containers with kubernetes to building client facing mobile apps.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Me;
