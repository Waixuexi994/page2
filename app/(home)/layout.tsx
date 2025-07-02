import { Container } from "@/components/container";
import Footer from "@/components/footer";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="md:px-11 px-2 pt-6">
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
