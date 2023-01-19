/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Grid from "@mui/material/Unstable_Grid2";
import { useDim } from "../hooks/useDim";

import { useRecoilState } from "recoil";
import { cursorState } from "./State";
import { useState } from "react";

const C = {
  container: css({
    width: "100%",
    maxWidth: "1000px",
    margin: "60px auto 20px auto",
    color: "#fff",
    whiteSpace: "nowrap",

    "@media (max-width: 900px)": {
      maxWidth: "90%",
    },
    "@media (min-width: 901px)": {
      width: "95%",
      margin: "8em auto 0",
    },
  }),
  box: css({
    background: "#222",
    width: "min-content",
    borderRadius: "20px",
    padding: "24px",
    transition: "outline-width 100ms ease-in-out",

    "@media (max-width: 900px)": {
      width: "100%",
    },
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
  }),
  inner: css({
    display: "flex",
    alignItems: "center",
    "@media (max-width: 900px)": {
      justifyContent: "space-between",
    },
  }),
  title: css({
    fontSize: "18px",
    fontFamily: "gil",
    fontWeight: 700,
    marginBottom: "0.5em",
  }),
  num: css({
    fontWeight: 700,
    fontSize: "30px",
    paddingLeft: "0.4em",
    fontFamily: "league spartan",
    color: "#14cf93",
  }),
};

const Me = () => {
  const [cursorVariant, setCursorVariant] = useRecoilState(cursorState);
  const [active, setActive] = useState(0);

  const { height, width } = useDim();

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
        css={C.heading}
        style={
          active === 4
            ? { textDecorationColor: "#14cf93" }
            : { textDecorationColor: "#fff" }
        }
        onMouseEnter={() => {
          Enter(4);
        }}
        onMouseLeave={() => {
          Leave();
        }}
      >
        Work History
      </div>
      <Grid container spacing={2}>
        <Grid md css={{ padding: "0px" }} />
        <Grid xs={12} md="auto">
          <div
            css={C.box}
            style={
              active === 1
                ? { outline: "2px solid #14cf93" }
                : { outline: "0px solid #14cf93" }
            }
            onMouseEnter={() => {
              Enter(1);
            }}
            onMouseLeave={() => {
              Leave();
            }}
          >
            <div css={C.inner}>
              <div>
                <div css={C.title}>Retail Business Services</div>
                <div>Full Stack Developer Coop</div>
              </div>
              <div css={C.num}>2022</div>
            </div>
          </div>
        </Grid>

        <Grid xs={12} css={{ padding: "0px" }} />

        <Grid md={2} css={{ padding: "0px" }} />
        <Grid xs={12} md>
          <div
            css={C.box}
            style={
              active === 2
                ? { outline: "2px solid #14cf93" }
                : { outline: "0px solid #14cf93" }
            }
            onMouseEnter={() => {
              Enter(2);
            }}
            onMouseLeave={() => {
              Leave();
            }}
          >
            <div css={C.inner}>
              <div>
                <div css={C.title}>Voya Financial</div>
                <div>Software Development Intern</div>
              </div>
              <div css={C.num}>2020</div>
            </div>
          </div>
        </Grid>

        <Grid xs={12} md={11}>
          <div
            style={
              active === 3
                ? { outline: "2px solid #14cf93" }
                : { outline: "0px solid #14cf93" }
            }
            onMouseEnter={() => {
              Enter(3);
            }}
            onMouseLeave={() => {
              Leave();
            }}
            css={[C.box, { width: "100%" }]}
          >
            <div css={C.inner}>
              <div css={{ flexGrow: 1 }}>
                <div css={C.title}>
                  {width > 900
                    ? "University of Massachusetts Boston"
                    : "UMass Boston"}
                </div>
                <div>B.S. Information Technology</div>
              </div>
              <div css={C.num}>2022</div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Me;
