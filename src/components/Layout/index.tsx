import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import VerticalMenu from "../VerticalMenu";
import { Grid, PageWrapper } from "./styles";

type LayoutProps = {
  children: any;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid>
      <VerticalMenu />
      <Navbar />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </Grid>
  );
};

export default Layout;
