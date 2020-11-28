import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import VerticalMenu from "../VerticalMenu";
import { Grid } from "./styles";

type LayoutProps = {
  children: any;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid>
      <VerticalMenu />
      <Header />
      {children}
      <Footer />
    </Grid>
  );
};

export default Layout;
