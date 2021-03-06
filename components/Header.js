import React from "react";
import Link from "next/link";
import classes from "../styles/Header.module.css";
import "antd/dist/antd.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <div className={classes.navbar}>
        <Link href="/">
          <div className={classes.navbarLeft}>
            <Image src="/logo.png" width={60} height={40}></Image>
            <h1>Furniture Creations</h1>
          </div>
        </Link>
        <div className={classes.navbarRight}>
          <ul>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/projects">
              <li>Projects</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
