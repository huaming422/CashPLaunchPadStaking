/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import etherIcon from "../assets/symbol.png";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
  },
  imgIcon: {
    marginLeft: 7,
    height: 33,
  },
  buttonDrop: {
    display: "flex",
    justifyContent: "space-between",
    color: "black",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "grey",
      color: "#100525",
    },
  },
  main: {
    color: "white",
    backgroundColor: "#100525",
    border: "1px solid rgb(105 130 254 / 70%)",
    borderRadius: 60,
    paddingLeft: 15,
    height: 40,
    width: "full-width",
    marginRight: 7,
    paddingTop: 3,
  },
  networkName: {},
}));

const NetworkSelect = ({ account: { currentChain } }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.main}
    >
      <span className={classes.networkName}>10000.678</span>
      <img className={classes.imgIcon} src={etherIcon} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  account: state.account,
});

export default connect(mapStateToProps, {})(NetworkSelect);
