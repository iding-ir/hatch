import React, { useState } from "react";
import { Paper } from "@material-ui/core";

import { useStyles } from "./styles";
import { Search } from "../Search";
import { Table } from "../Table";
import { useDataset } from "../../hooks/useDataset";
import { ICities } from "../../types";

export const App = () => {
  const classes = useStyles();
  const { cities } = useDataset();
  const [selectedCities, setSelectedCities] = useState<ICities>([]);

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.container}>
        <Search cities={cities} onChange={setSelectedCities} />

        <Table
          cities={
            selectedCities && selectedCities.length ? selectedCities! : cities
          }
        />
      </Paper>
    </div>
  );
};
