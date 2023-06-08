import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    optionContainer: {
      marginBottom: 16,
      backgroundColor: "#86EFAC",
      padding: 12,
      borderRadius: 10,
      color: "#16A34A",
      cursor: "pointer",
      transition: ".8 ease",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "#86EFAC",
      "&:hover": {
        backgroundColor: "#FFF",
        color: "#86EFAC",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#86EFAC",
      },
    },
  };
});
