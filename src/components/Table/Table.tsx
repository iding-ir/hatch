import React from "react";
import { FixedSizeList as List } from "react-window";

import { useStyles } from "./styles";
import {
  TABLE_WIDTH,
  TABLE_HEIGHT,
  TABLE_ROW_HEIGHT,
} from "../../constants/config";
import { IRow, ICities } from "../../types";

interface IProps {
  cities: ICities;
}

export const Table = (props: IProps) => {
  const { cities } = props;
  const classes = useStyles();

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
      itemCount={cities.length}
      itemSize={TABLE_ROW_HEIGHT}
      className={classes.table}
    >
      {Row}
    </List>
  );
};
