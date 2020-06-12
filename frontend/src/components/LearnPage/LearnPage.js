import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import WordCard from "../WordCard";

const useStyle = makeStyles((theme) => ({
  LearnPage: {},
}));

const LearnPage = () => {
  const classes = useStyle();
  return (
    <div className={classes.LearnPage}>
      <WordCard />
    </div>
  );
};

export default LearnPage;
