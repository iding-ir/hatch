import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {},
    header: {
      fontWeight: "bold",
    },
    row: {
      display: "flex",
      padding: theme.spacing(1),

      "& > div": {
        width: "33.33%",
      },
    },
  })
);
