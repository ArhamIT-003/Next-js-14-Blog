"use client";
import React, { Fragment } from "react";
import classes from "./header.module.css";
import Links from "./links/Links";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>ArhamDev</div>
      <div>
        <Links />
      </div>
    </header>
  );
};

export default Header;

// {authenticated ? (
//             <Fragment>
//               {isAdmin && <HeaderLink href={"/admin"}>Admin</HeaderLink>}
//             </Fragment>
//           ) : (
//             <HeaderLink href={"/login"}>Login</HeaderLink>
//           )}

// <button onClick={() => setOpen((prev) => !prev)}>
//           <Image src={"/menu.png"} alt="" width={50} height={50} />
//         </button>
//         {open && (
//           <motion.div className={classes.mobileLinks}>
//             <HeaderLink href={"/"}>Home</HeaderLink>
//             <HeaderLink href={"/about"}>About</HeaderLink>
//             <HeaderLink href={"/blog"}>Blog</HeaderLink>
//             <HeaderLink href={"/contact"}>Contact</HeaderLink>

//             {authenticated ? (
//               <Fragment>
//                 {isAdmin && <HeaderLink href={"/admin"}>Admin</HeaderLink>}
//               </Fragment>
//             ) : (
//               <HeaderLink href={"/login"}>Login</HeaderLink>
//             )}
// </motion.div>
//         )}
