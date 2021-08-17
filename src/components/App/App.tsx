import React from "react";
import { Paper } from "@material-ui/core";

import { useStyles } from "./styles";
import { Table } from "../Table";

export const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.container}>
        <Table />
      </Paper>
    </div>
  );
};
