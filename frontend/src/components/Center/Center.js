import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  Center: {
    margin: "24px 24px 60px 24px",
    height: "70vh",
  },
}));

const Center = ({ children }) => {
  const classes = useStyle();
  return <div className={classes.Center}>{children}</div>;
};

export default Center;
