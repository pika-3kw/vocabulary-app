import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  LearnPage: {},
}));

const LearnPage = () => {
  const classes = useStyle();
  return <div className={classes.LearnPage}>Learn Page</div>;
};

export default LearnPage;
