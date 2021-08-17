import React, { CSSProperties } from "react";

import { TableCells } from "./TableCells";

interface IProps {
  fields: string[];
  className: string;
  key?: number;
  style?: CSSProperties;
}

export const TableRow = (props: IProps) => {
  const { fields, className, key, style } = props;
  const rowProps = { className, key, style };

  return (
    <div {...rowProps}>
      <TableCells fields={fields} />
    </div>
  );
};
