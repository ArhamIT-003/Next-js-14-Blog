import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>Arhamdev</div>
      <div>{`Creative thoughts agency ${new Date().getFullYear()} © copyright`}</div>
    </div>
  );
};

export default Footer;
