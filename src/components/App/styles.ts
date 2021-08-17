import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { TABLE_WIDTH } from "../../constants/config";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    container: {
      width: TABLE_WIDTH + 2 * theme.spacing(1),
      padding: theme.spacing(1),
      paddingTop: 0,
    },
  })
);
