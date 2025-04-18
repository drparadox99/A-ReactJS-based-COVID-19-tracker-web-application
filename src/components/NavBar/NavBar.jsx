import React, { useState } from "react";
import styles from "./NavBar.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import { useMediaQuery } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import coronavirus_icon from "../../images/8.png";

import {
  makeStyles,
  useTheme,
  Menu,
  IconButton,
  FormControl,
  MenuItem,
  Select
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import RoomIcon from "@material-ui/icons/Room";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import SecurityIcon from "@material-ui/icons/Security";
import { withRouter } from "react-router-dom";

const NavBar = (props) => {
  //allows us to navigate to other pages
  const { history } = props;

  //the language selected stored in a variable
  const [language, setLanguage] = useState(["English"]);
  //set the language variable of the dropdown menu
  const onLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  //close menu //Set the anchorEL variable
  const heandleMenuClick = (pageUrl) => {
    history.push(pageUrl);
    setAnchorEl(null);
  };

  //by default the dropmenu is close (set to null)
  //anchorEl store the event click on the dropdown item
  const [anchorEl, setAnchorEl] = useState(null);
  //checks the anchorEl to determine the positon of the of the dropdown menu
  //by checking the anchorEl varible
  const open = Boolean(anchorEl);

  //open menu  //Set the anchorEL variable to the position of the mouse when
  //the menu is clicked os the dropdown can pop up there
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //Allows us to check the dimension of the screen
  const theme = useTheme();
  //checks the theme variable to get the checkpoint we are currently in
  //allows us to know when to display or hide the menu
  //isMobile is true if  Extra small devices (portrait phones, less than 576px)
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  //css customization
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
      //justifyContent:"space-between"
    },
    menuButton: {
      margin: "8px 5px !important",
      // color: "#E3F7EB !important",
      border: "1mm ridge #1E8449;",
      borderRadius: "20px",
      color: "white !important",
      fontSize: "70px !important",
      cursor: "pointer"
    },
    title: {
      fontFamily: "Open Sans"
    }
  }));

  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MuiMenu: {
          paper: {
            backgroundColor: "#161e2c !important"
          }
        }
      }
    });
  const stylesMenusAppBar = makeStyles((theme) => ({
    lst_menus: {
      [theme.breakpoints.down("xs")]: {
        display: "none"
      }
    },
    dropdown_menu: {
      [!theme.breakpoints.down("xs")]: {}
    },
    iconColor: {
      "&:hover": {
        border: "2mm ridge #1E8449;",
        borderRadius: "12px",
        color: "#ebffeb !important"
      },
      border: "1mm ridge #1E8449;",
      borderRadius: "14px",
      color: "white !important",
      fontSize: "60px !important",
      cursor: "pointer"
    }
  }));
  //storing the css customization in a variable
  const classes = useStyles();
  const classes_menu = stylesMenusAppBar();

  //storing the css customization in a variable
  //const classes = useStyles();

  //Navigation pages
  const menuItems = [
    {
      title: "Home",
      pageUrl: "/",
      icon: <HomeIcon className={`${styles.icon} ${classes_menu.iconColor} `} />
    },
    {
      title: "Map",
      pageUrl: "/map",
      icon: <RoomIcon className={`${styles.icon} ${classes_menu.iconColor} `} />
    },
    {
      title: "Sources",
      pageUrl: "/sources",
      icon: <InfoIcon className={`${styles.icon} ${classes_menu.iconColor} `} />
    },
    {
      title: "News",
      pageUrl: "/news",
      icon: (
        <AnnouncementIcon
          className={`${styles.icon} ${classes_menu.iconColor} `}
        />
      )
    },
    {
      title: "About",
      pageUrl: "/about",
      icon: (
        <SecurityIcon className={`${styles.icon} ${classes_menu.iconColor} `} />
      )
    },
    {
      title: "Quiz",
      pageUrl: "/quiz",
      icon: (
        <SecurityIcon className={`${styles.icon} ${classes_menu.iconColor} `} />
      )
    }
  ];

  return (
    <Grid
      item
      container
      xs={12}
      justify="space-evenly"
      className={styles.appBar}
    >
      <Grid item xs={12} md={3}>
        <div className={styles.logo} onClick={() => heandleMenuClick("/")}>
          Infecti
          <span>
            <img className={styles.corona_icon} src={coronavirus_icon} alt="" />
          </span>
          n19
        </div>
      </Grid>
      {isMobile ? (
        <Grid item xs={6}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <MuiThemeProvider theme={getMuiTheme()}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              {menuItems.map((menu, key) => {
                const { title, pageUrl } = menu;
                return (
                  <MenuItem
                    className={styles.selected_item_hidden}
                    key={key}
                    onClick={() => heandleMenuClick(pageUrl)}
                  >
                    {title}
                  </MenuItem>
                );
              })}
            </Menu>
          </MuiThemeProvider>
        </Grid>
      ) : (
        <>
          {menuItems.map((menu, key) => {
            return (
              <Grid item xs={1} className={classes_menu.lst_menus} key={key}>
                <div
                  className={styles.titresNavBar}
                  onClick={() => heandleMenuClick(menu.pageUrl)}
                >
                  {menu.icon}
                </div>
              </Grid>
            );
          })}
        </>
      )}

      <Grid item xs={4}>
        <MuiThemeProvider theme={getMuiTheme()}>
          <FormControl className={styles.dropdown_menu}>
            <Select
              className={styles.selected_item}
              variant="outlined"
              value={language}
              onChange={onLanguageChange}
            >
              <MenuItem className={styles.menu_item} value={"Français"}>
                Français
              </MenuItem>
              <MenuItem className={styles.menu_item} value={"English"}>
                English
              </MenuItem>
            </Select>
          </FormControl>
        </MuiThemeProvider>
      </Grid>
    </Grid>
  );
};

export default withRouter(React.memo(NavBar));
