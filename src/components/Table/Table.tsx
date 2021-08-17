import React from "react";
import { FixedSizeList as List } from "react-window";

import { useStyles } from "./styles";
import { useDataset } from "../../hooks/useDataset";
import { TABLE_WIDTH, TABLE_HEIGHT } from "../../constants/config";
import { IRow } from "../../types";

export const Table = () => {
  const classes = useStyles();
  const { cities } = useDataset();

  const Row = ({ index, style }: IRow) => {
    const city = cities[index];

    return (
      <div style={style} key={index} className={classes.row}>
        {city?.city}
      </div>
    );
  };

  return (
    <List
      width={TABLE_WIDTH}
      height={TABLE_HEIGHT}
      itemCount={1000}
      itemSize={35}
      className={classes.table}
    >
      {Row}
    </List>
  );
};
