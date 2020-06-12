import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Table from "./Table";
import Actions from "./Actions";

const useStyle = makeStyles((theme) => ({
  DictPage: {
    width: "100%",
    height: "100%",
  },
}));

const DictPage = () => {
  const classes = useStyle();

  return (
    <div className={classes.DictPage}>
      <Table />
      <Actions />
    </div>
  );
};

export default DictPage;
