import React from "react";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <>
      <footer>Copyrights © {year}</footer>
    </>
  );
}
export default Footer;
