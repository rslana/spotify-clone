import React from "react";
import VerticalMenu from "../VerticalMenu";
import { Grid } from "./styles";

const Layout = ({ children }) => {
  return (
    <Grid>
      <VerticalMenu />
    </Grid>
  );
};

export default Layout;
