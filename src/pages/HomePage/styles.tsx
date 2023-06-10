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
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    homepageTitleImage: {
      width: 500,
      [theme.breakpoints.down("md")]: {
        width: 300,
      },
    },
    homepageImage: {
      width: 300,
      [theme.breakpoints.down("md")]: {
        width: 100,
      },
    },
    homepageImageMobile: {
      display: "none",
      [theme.breakpoints.down("md")]: {
        display: "flex",
      },
    },
  };
});
