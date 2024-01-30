import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Grid, ListSubheader } from "@mui/material";

const ListingItems = ({ label, duration, title, titleIcon, listItems }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Grid item md={5}>
      <List
        sx={{ width: "100%", minWidth: "20rem" }}
        component="nav"
        aria-labelledby={label}
        subheader={
          <ListSubheader component="div" id={label}>
            {duration}
          </ListSubheader>
        }
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>{titleIcon}</ListItemIcon>
          <ListItemText primary={title} />
          {open ? (
            <ExpandLess className="listIcon" />
          ) : (
            <ExpandMore className="listIcon" />
          )}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {listItems.map(({ listTitle, listTitleIcon }, index) => {
              return (
                <ListItemButton sx={{ pl: 4 }} key={index}>
                  <ListItemIcon>{listTitleIcon}</ListItemIcon>
                  <ListItemText primary={listTitle} />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      </List>
    </Grid>
  );
};
export default ListingItems;
