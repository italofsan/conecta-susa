import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      //   backgroundColor: "#ccc",
      height: "90%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    imageContainer: {
      width: 500,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        width: 300,
      },
    },
    image: {
      width: "100%",
    },
    contentText: {
      color: "#14532D",
      fontWeight: 600,
      fontSize: 20,
    },
  };
});
