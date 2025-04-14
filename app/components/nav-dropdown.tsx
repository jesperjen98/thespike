import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { theme } from "../theme";
import {
  discussIcon,
  eventsIcon,
  guidesIcon,
  mouseIcon,
  newsIcon,
  predictionsIcon,
  statsIcon,
} from "./nav";
import NavButton from "./nav-button";

const NavDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: theme.highlight }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ mt: "1px", "& .MuiMenu-paper": { backgroundColor: theme.main } }}
      >
        {[
          { name: "Matches", icon: mouseIcon },
          { name: "Events", icon: eventsIcon },
          { name: "News", icon: newsIcon },
          { name: "Guides", icon: guidesIcon },
          { name: "Discuss", icon: discussIcon },
          { name: "Stats", icon: statsIcon },
          { name: "Predictions", icon: predictionsIcon },
        ].map((item) => (
          <MenuItem
            key={item.name}
            onClick={handleClose}
            sx={{
              width: "100%",
            }}
          >
            <NavButton name={item.name} icon={item.icon} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default NavDropdown;
