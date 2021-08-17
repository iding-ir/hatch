import React, { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { useStyles } from "./styles";
import { ICity, ICities } from "../../types";

interface IProps {
  cities: ICities;
  onChange: any;
}

export const Search = (props: IProps) => {
  const { cities, onChange } = props;
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <Autocomplete
        multiple
        options={cities}
        getOptionLabel={(option: ICity) => option.city}
        renderInput={(params: any) => (
          <TextField
            {...params}
            label="Choose a City"
            variant="outlined"
            margin="normal"
          />
        )}
        onChange={(event: ChangeEvent<{}>, value: ICities | null) => {
          onChange(value);
        }}
      />
    </div>
  );
};
