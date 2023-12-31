import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

export default function Drawer(props) {
  const anchor = "right";
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {props.links.map((link) => (
          <ListItem key={link.name} disablePadding onClick={() => props.scrollTo(link.ref)}>
            <ListItemButton>
              <ListItemIcon sx={{color:"white"}}>
                {link.icon}
              </ListItemIcon>
              <ListItemText primary={link.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon sx={{ color: props.isDark ? "white" : "black" }} />
        </Button>
        <SwipeableDrawer
          PaperProps={{
            sx:{
              backgroundColor:"rgba(0, 0, 0, 0.5)",
              backdropFilter:"blur(10px)",
              color:"white",
              boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.75)",
            }
          }}
          anchor={anchor}
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
