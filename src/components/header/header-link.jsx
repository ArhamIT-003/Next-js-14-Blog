"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./header-link.module.css";

const HeaderLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={pathname === href ? classes.active : undefined}
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
