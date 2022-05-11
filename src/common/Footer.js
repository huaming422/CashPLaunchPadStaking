/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginTop: 100,
  },
  item: {
    marginLeft: 10,
    marginRight: 10,
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a
        className={classes.item}
        href="https://github.com/"
        target="_blank"
      >
        Github
      </a>
      <a
        className={classes.item}
        href="https://twitter.com/"
        target="_blank"
      >
        Twitter
      </a>
      <a
        className={classes.item}
        href="https://t.me/"
        target="_blank"
      >
        Telegram
      </a>
      <a
        className={classes.item}
        href="https://discord.gg/"
        target="_blank"
      >
        Discord
      </a>
    </div>
  );
};

export default React.memo(Footer);
