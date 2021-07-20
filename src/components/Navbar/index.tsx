/* eslint-disable max-len */
import React from "react";
import styles from "./styles.m.styl";
import ListIcon from "../../assets/icons/list-solid.svg";
import QrcodeIcon from "~/assets/icons/qrcode-solid.svg";
import CogIcon from "~/assets/icons/cog-solid.svg";
import classNames from "classnames";
import Logo from "./logo.svg";
import { Link, useRouteMatch } from "react-router-dom";

function Navbar(): JSX.Element {
  useRouteMatch();
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <Link to={"/orders"}>
        <div
          className={classNames({
            [styles.element]: true,
            [styles.active]: window.location.pathname.startsWith("/orders"),
          })}
        >
          <div className={styles.iconWrapper}>
            <ListIcon />
          </div>
        </div>
      </Link>
      <Link to={"/assembly"}>
        <div
          className={classNames({
            [styles.element]: true,
            [styles.active]: window.location.pathname.startsWith("/assembly"),
          })}
        >
          <div className={styles.iconWrapper}>
            <QrcodeIcon />
          </div>
        </div>
      </Link>
      <Link to={"/system"}>
        <div
          className={classNames({
            [styles.element]: true,
            [styles.active]: window.location.pathname.startsWith("/system"),
          })}
        >
          <div className={styles.iconWrapper}>
            <CogIcon />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
