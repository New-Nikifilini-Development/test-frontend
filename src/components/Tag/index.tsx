import React from "react";
import styles from "./styles.m.styl";
import classNames from "classnames";

interface Props {
  color: "green" | "blue" | "grey" | "red";
  text: string;
}

const Tag = ({ color, text }: Props): JSX.Element => {
  return (
    <div
      className={classNames({
        [styles.tag]: true,
        [styles.green]: color === "green",
        [styles.blue]: color === "blue",
        [styles.grey]: color === "grey",
        [styles.red]: color === "red",
      })}
    >
      {text}
    </div>
  );
};

export default Tag;
