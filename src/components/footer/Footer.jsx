import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>ArhamDev</div>
      <div>{`Creative agency ${new Date().getFullYear()} © copyright`}</div>
    </div>
  );
};

export default Footer;
