import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: "auto",
    textAlign: "center",
  },
});

export default function WordCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h5">
          Test
        </Typography>
        <Typography variant="p" component="p" color="textSecondary">
          adj
        </Typography>
      </CardContent>
    </Card>
  );
}
