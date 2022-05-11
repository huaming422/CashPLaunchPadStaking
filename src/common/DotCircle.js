import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  circle: {
    color: "#c1c6ff",
    fontSize: 20,
  },
}));
export default function DotCircle() {
  const classes = useStyles();

  return <font className={classes.circle}>.</font>;
}
