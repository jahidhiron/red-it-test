import { CatchingPokemon } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemon />
          </IconButton>
          <NavLink to="/" style={{ color: "inherit", textDecoration: "none" }}>
            TEST
          </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
