/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

const C = {
  container: css({
    width: "100%",
    height: "80px",
    display: "flex",
    background: "#111111",
    position: "fixed",
    zIndex: 200,
    color: "#e4e4e4",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.5em 2em",
  }),
  title: css({
    fontSize: "18px",
    textDecoration: "underline",
    fontFamily: "gil",
  }),
};

const Nav = () => {
  return (
    <div css={C.container}>
      <h1 css={C.title}>Isaac Higgins</h1>

      <div>
        <IconButton size="small">
          <GitHubIcon sx={{ color: "#e4e4e4" }} />
        </IconButton>

        <IconButton size="small">
          <LinkedInIcon sx={{ color: "#e4e4e4" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Nav;
