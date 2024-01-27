"use client";
import React, { Fragment } from "react";
import classes from "./header.module.css";
import HeaderLink from "./header-link";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  const authenticated = true;
  const isAdmin = true;
  const [open, setOpen] = useState(false);

  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>ArhamDev</div>
      <div className={classes.linkContainer}>
        <div className={classes.desktopLinks}>
          <HeaderLink href={"/"}>Home</HeaderLink>
          <HeaderLink href={"/about"}>About</HeaderLink>
          <HeaderLink href={"/blog"}>Blog</HeaderLink>
          <HeaderLink href={"/contact"}>Contact</HeaderLink>

          {authenticated ? (
            <Fragment>
              {isAdmin && <HeaderLink href={"/admin"}>Admin</HeaderLink>}
            </Fragment>
          ) : (
            <HeaderLink href={"/login"}>Login</HeaderLink>
          )}
        </div>
        <button onClick={() => setOpen((prev) => !prev)}>
          <Image src={"/menu.png"} alt="" width={50} height={50} />
        </button>
        {open && (
          <motion.div className={classes.mobileLinks}>
            <HeaderLink href={"/"}>Home</HeaderLink>
            <HeaderLink href={"/about"}>About</HeaderLink>
            <HeaderLink href={"/blog"}>Blog</HeaderLink>
            <HeaderLink href={"/contact"}>Contact</HeaderLink>

            {authenticated ? (
              <Fragment>
                {isAdmin && <HeaderLink href={"/admin"}>Admin</HeaderLink>}
              </Fragment>
            ) : (
              <HeaderLink href={"/login"}>Login</HeaderLink>
            )}
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
