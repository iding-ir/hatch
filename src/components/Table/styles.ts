import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {},
    row: {
      padding: theme.spacing(1),
    },
  })
);
