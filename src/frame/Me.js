/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Grid from "@mui/material/Unstable_Grid2";
import Hero from "./Hero";
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
    lineHeight: "150%",
  }),
  desc: css({
    margin: "0 auto 20px auto",
    lineHeight: "32px",
    fontSize: "22px",
    fontFamily: "league spartan",
    color: "#dadada",
  }),
  heading: css({
    margin: "0 auto 20px auto",

    fontSize: "35px",
    fontFamily: "gil",
    fontWeight: 700,
    color: "#fff",
    textDecoration: "underline",
  }),
};

const Me = () => {
  return (
    <div css={C.container}>
      <div css={C.heading}>About Me</div>

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
            <h1 css={C.title}>
              I'm Isaac, a Full-Stack Developer located in Boston.
            </h1>

            <p css={C.desc}>
              I recently graduated from Umass Boston with a degree in
              Information Technology and I'm now looking for a new opportunity.
              <br />
              <br />
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
