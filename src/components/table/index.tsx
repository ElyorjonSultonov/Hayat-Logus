import React from "react";
import classes from "./table.module.scss";
type TableProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};
const Table = ({ children, className, style }: TableProps) => {
  return (
    <table style={style} className={`${classes.table} ${className}`}>
      {children}
    </table>
  );
};

export default Table;
