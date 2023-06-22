import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="p-5">{children}</main>
    </>
  );
}

export default Layout;
