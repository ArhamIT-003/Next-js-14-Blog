"use client";
import React from "react";
import NavLink from "./navLink/NavLink";
import styles from "./links.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = React.useState(false);
  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button onClick={() => setOpen((prev) => !prev)} className={styles.hamBurger}>
        <Image src={"/menu.png"} alt="" width={50} height={50} />
      </button>
      {open && (
        <motion.div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link} />
          ))}
          {session ? (
            <>
              {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <NavLink item={{ title: "Login", path: "/login" }} />
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Links;

// {session ? (
//     <React.Fragment>
//       {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
//     </React.Fragment>
//   ) : (
//     <NavLink item={{ title: "Login", path: "/login" }} />
//   )}
