import React from "react";

interface IProps {
  fields: string[];
}

export const TableCells = (props: IProps) => {
  const { fields } = props;

  const render = () => fields.map((field: string) => <div>{field}</div>);

  return <>{render()}</>;
};
