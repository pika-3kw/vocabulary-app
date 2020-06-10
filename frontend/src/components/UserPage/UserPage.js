import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  UserPage: {},
}));

const UserPage = () => {
  const classes = useStyle();
  return <div className={classes.UserPage}>User Page</div>;
};

export default UserPage;
