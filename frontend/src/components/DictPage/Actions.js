import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const useStyle = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: 60,
    left: "50%",
    transform: "translateX(-50%)",
  },
  addIcon: {
    backgroundColor: green[500],
    color: "#FFF",
    "&:hover": {
      backgroundColor: green[400],
    },
  },
}));

const Actions = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <IconButton className={classes.addIcon}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default Actions;
