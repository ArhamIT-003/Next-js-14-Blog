"use client";
import Link from "next/link";
import React from "react";
import styles from "./navlink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path ? styles.active : undefined
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
