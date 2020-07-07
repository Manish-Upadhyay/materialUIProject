import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
// import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ flexGrow: 1 }}>
          <AppBar position="static">
            <IconButton
              edge="start"
              // className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              {/* <MenuIcon /> */}
            </IconButton>
          </AppBar>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
