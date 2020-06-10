import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  DictPage: {},
}));

const DictPage = () => {
  const classes = useStyle();
  return <div className={classes.DictPage}>Dictionary Page</div>;
};

export default DictPage;
