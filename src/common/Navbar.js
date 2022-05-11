/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-dupe-keys */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import PeopleAltOutlined from "@material-ui/icons/PeopleAltOutlined";
import TouchAppOutlined from "@material-ui/icons/TouchAppOutlined";
import { EqualizerOutlined } from "@material-ui/icons";
import Wallet from "./Wallet";
import AccountDialog from "./AccountDialog";
import NetworkSelect from "./NetworkSelect";
import connectors from "../connection/connectors";
import { WalletConnectConnector } from "web3-react-walletconnect-connector";
import useActiveWeb3React from "../hooks/useActiveWeb3React";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBarBackground: {
    boxShadow: "none",
    backgroundColor: "#100525",
    display: "flex",
    alignItems: "center",
  },
  menuButton: {
    textTransform: "none",
  },
  title: {
    fontWeight: 600,
    fontSize: 24,
  },
  iconText: {
    fontSize: 15,
  },
  icon: {},

  sectionDesktop: {
    marginLeft: 40,
    marginRight: 40,
    [theme.breakpoints.down("md")]: {
      marginLeft: 5,
      marginRight: 5,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  sectionMobile: {
    width: "100%",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  row1: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },

  home: {
    "text-decoration": "none",
    color: "black",
    cursor: "pointer",
    marginRight: 5,
    marginLeft: 5,
  },
  nav: {
    marginRight: 15,
  },
  menuIcon: {
    color: "#212121",
  },
  list: {
    width: "250px",
    height: "100%",
    backgroundColor: "transparent",
    color: "#f9f9f9",
  },
  fullList: {
    width: "auto",
  },
  menuTitleMobile: {
    paddingLeft: 25,
    fontWeight: 500,
    verticalAlign: "baseline",
    fontFamily: "New Rocker, cursive",
    textAlign: "left",
    fontSize: 16,
  },
  navbarItemsDesktop: {
    paddingRight: 10,
    fontWeight: 400,
    lineHeight: "34px",
    verticalAlign: "baseline",
    letterSpacing: "-1px",
    margin: 0,
    padding: "9px 14px 0px",
    cursor: "pointer",
    fontSize: "1.2vw",
    color: "#e5e5e5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 7,
  },
  navbarItemsDesktopActive: {
    paddingRight: 10,
    fontWeight: 500,
    lineHeight: "34px",
    verticalAlign: "baseline",
    letterSpacing: "-1px",
    margin: 0,
    padding: "9px 14px 0px",
    cursor: "pointer",
    fontSize: "1.2vw",
    color: "#55ff71",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 7,
  },
  navbarItemsMobileActive: {
    paddingRight: 10,
    fontWeight: 500,
    lineHeight: "45px",
    verticalAlign: "baseline",
    letterSpacing: "-1px",
    margin: 0,
    padding: "9px 0px 0px",
    cursor: "pointer",
    fontSize: "6.2vw",
    color: "#55ff71",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 7,
  },
  navbarButton: {
    backgroundColor: "#f9f9f9",
    color: "#c1c6ff",
    borderRadius: 10,
    height: 35,
    marginRight: 40,
    padding: 20,
    fontSize: 14,
    fontWeight: 700,
    textTransform: "none",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.7)",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 15,
      width: 150,
    },
  },
  mobileButton: {
    borderRadius: "50px",
    background: `linear-gradient(to bottom,#3e76d5, #0c3aa1)`,
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    color: "#ffffff",
    padding: "5px 15px 5px 15px",
    fontWeight: 600,
  },
  leftMargin: {
    marginLeft: 159,
    [theme.breakpoints.down("lg")]: {
      marginLeft: 100,
    },
  },
  numbers: {
    color: "#E0077D",
    fontSize: 26,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  network: {
    display: "flex",
    marginLeft: 20,
    alignItems: "center",
    border: "0.5px solid #919191",
    borderRadius: 20,
    padding: 4,
    paddingLeft: 6,
    paddingRight: 10,
    letterSpacing: 0.4,
    // cursor: "pointer",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.1)",
    },
    [theme.breakpoints.down("sm")]: {
      width: 140,
    },
  },
  networkIcon: {
    width: 30,
    height: "auto",
  },
  logo: {
    height: 90,
    width: 90,
    [theme.breakpoints.down("sm")]: {
      height: 30,
      width: "fit-content",
    },
  },
  list: {
    paddingTop: 20,
    width: "250px",
    borderLeft: "5px solid pink",
    borderColor: "#3A1242",
    // borderColor: "#220c3d",
    height: "100%",
    backgroundColor: "#100525",
  },
}));

const Navbar = ({ chainId }) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false,
  });

  const [accountDialog, setAccountDialog] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const { active, activate, deactivate } = useActiveWeb3React();

  const createConnectHandler = async (connector) => {
    try {
      console.log("trying connection with ", connector);
      // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
      if (connector instanceof WalletConnectConnector) {
        connector.walletConnectProvider = undefined;
      }

      await activate(connector);
      localStorage.connected = "yes";
    } catch (error) {
      console.error("createConnectHandler", error);
    }
  };

  useEffect(() => {
    if (!active && localStorage.connected === "yes") {
      const connector = connectors.injected;
      createConnectHandler(connector);
    }
  }, [active]);

  const handleLogout = () => {
    localStorage.connected = "none";
    deactivate();
  };

  const handleWalletConnect = (connectorType = "injected") => {
    try {
      let connector;
      if (connectorType === "injected") {
        connector = connectors.injected;
      } else if (connectorType === "walletConnect") {
        connector = connectors.walletconnect;
      } else if (connectorType === "unstoppable") {
        connector = connectors.uauth;
      } else {
        connector = connectors.injected;
      }

      createConnectHandler(connector);
      setAccountDialog(false);
    } catch (error) { }
  };

  const handleWalletClick = () => {
    try {
      setAccountDialog(true);
    } catch (error) { }
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          {
            name: "Stake",
            link: "https://localhost: 3000/",
            id: "staking",
            icon: <EqualizerOutlined />,
          },
          {
            name: "Farm",
            link: "https://google.com",
            id: "intro",
            icon: <TouchAppOutlined />,
          },
          {
            name: "Launchpad",
            link: "https://google.com",
            id: "characters",
            icon: <PeopleAltOutlined />,
          },
          {},
        ].map((tab, index) => (
          <ListItem button key={index} onClick={toggleDrawer(anchor, false)}>
            <a href={tab.link}>
              <ListItemText
                primary={tab.name}
                className={classes.menuTitleMobile}
              />
            </a>
          </ListItem>
        ))}
        <Divider />
        <ListItem button style={{ marginLeft: 10 }}>
          {/* <Wallet onWalletClick={handleWalletClick} /> */}
        </ListItem>
        <ListItem button style={{ marginLeft: 10, marginTop: 10 }}>
          {<NetworkSelect />}
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AccountDialog
        open={accountDialog}
        handleLogout={handleLogout}
        handleClose={() => setAccountDialog(false)}
        handleConnection={handleWalletConnect}
      />
      <AppBar
        color="transparent"
        position="fixed"
        className={classes.appBarBackground}
      >
        <Toolbar className={classes.sectionDesktop}>
          <Avatar
            variant="square"
            src="img/logo-white.png"
            className={classes.logo}
          />
          <div className="d-flex justify-content-end">
            <div>
              <a href="/" className={classes.navbarItemsDesktopActive} style={{ fontSize: '30px' }}>
                Cash&nbsp;Printer
              </a>
            </div>
          </div>

          <div className={classes.leftMargin} />

          <div className="d-flex justify-content-end">
            <div>
              <a href="/" className={classes.navbarItemsDesktopActive}>
                Stake 
              </a>
            </div>
          </div>
          <div>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
              className={classes.navbarItemsDesktop}
            >
              Farm
              
            </a>
          </div>
          <div>
            <a
              href="https://google.com"
              target="_blank"
              className={classes.navbarItemsDesktop}
            >
              Launchpad 
            </a>
          </div>
          <div className={classes.grow} />
          <div>{<NetworkSelect selectedNetwork={chainId} />}</div>
          <Wallet onWalletClick={handleWalletClick} />
        </Toolbar>

        <Toolbar className={classes.sectionMobile}>
          <div className="d-flex justify-content-center align-items-center">
            <Avatar
              variant="square"
              src="img/logo-white.png"
              style={{ height: 38, width: 38 }}
            />
          </div>
          <div className="d-flex justify-content-end">
            <div>
              <a href="/" className={classes.navbarItemsMobileActive}>
              Cash&nbsp;Printer
              </a>
            </div>
          </div>
          <div style={{ marginTop: 10 }}>
            <Wallet onWalletClick={handleWalletClick} />
          </div>

          <div>
            {["right"].map((anchor, index) => (
              <React.Fragment key={index}>
                <IconButton
                  aria-label="Menu"
                  aria-haspopup="true"
                  className={classes.menuIcon}
                  onClick={toggleDrawer(anchor, true)}
                >
                  <MenuIcon style={{ color: "#ffffff" }} />
                </IconButton>

                <SwipeableDrawer
                  anchor={anchor}
                  disableSwipeToOpen={false}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                  classes={{ paper: classes.appBarBackground }}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default React.memo(Navbar);
