/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Grid from "@mui/material/Unstable_Grid2";
import { useDim } from "../hooks/useDim";
const C = {
  container: css({
    width: "100%",
    // border: "1px solid green",

    maxWidth: "1000px",
    margin: "60px auto 20px auto",
    color: "#fff",
    whiteSpace: "nowrap",

    "@media (max-width: 900px)": {
      maxWidth: "90%",
    },
    "@media (min-width: 901px)": {
      width: "95%",
      margin: "4em auto 0",
    },
  }),
  box: css({
    background: "#222",
    width: "min-content",
    borderRadius: "20px",
    padding: "24px",

    "@media (max-width: 900px)": {
      width: "100%",
    },
  }),
  heading: css({
    margin: "0 auto 20px auto",
    fontSize: "35px",
    fontFamily: "gil",
    fontWeight: 700,
    color: "#fff",
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
  const { height, width } = useDim();

  return (
    <div css={C.container}>
      <div css={C.heading}>Work History</div>
      <Grid container spacing={2}>
        <Grid md css={{ padding: "0px" }} />
        <Grid xs={12} md="auto">
          <div css={C.box}>
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
          <div css={C.box}>
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
          <div css={[C.box, { width: "100%" }]}>
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
