import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
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
        {props.links.map((link, index) => (
          <ListItem key={link.name} disablePadding onClick={() => props.scrollTo(link.ref)}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
          anchor={anchor}
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          className="bg-opacity-50 backdrop backdrop-blur-sm transition-colors"
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
