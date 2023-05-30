import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    homepageTitleContainer: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    homepageImageContainer: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});
