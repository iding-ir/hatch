import React from "react";
import { FixedSizeList as List } from "react-window";
import { useTranslation } from "react-i18next";

import { useStyles } from "./styles";
import { TableRow } from "./TableRow";
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
  const { t } = useTranslation();

  const Row = ({ index, style }: IRow) => {
    const { city, admin_name, population } = cities[index];
    const fields = [city, admin_name, population];

    return (
      <TableRow
        fields={fields}
        style={style}
        key={index}
        className={classes.row}
      />
    );
  };

  const fields = [t("table.name"), t("table.admin"), t("table.population")];

  return (
    <>
      <TableRow
        fields={fields}
        className={`${classes.row} ${classes.header}`}
      />

      <List
        width={TABLE_WIDTH}
        height={TABLE_HEIGHT}
        itemCount={cities.length}
        itemSize={TABLE_ROW_HEIGHT}
        className={classes.table}
      >
        {Row}
      </List>
    </>
  );
};
