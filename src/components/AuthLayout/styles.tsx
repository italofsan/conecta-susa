import { makeStyles } from "tss-react/mui";
import { colors } from "../../styles";

export const useStyles = makeStyles()((theme) => {
  return {
    appBar: {
      backgroundColor: colors.main,
    },
  };
});
