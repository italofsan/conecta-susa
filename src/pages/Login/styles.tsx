import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    formContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "90vh",
    },
    paper: {
      color: theme.palette.text.secondary,
      marginTop: 12,
    },
    loginContentContainer: {
      display: "flex",
      width: 400,
      padding: 24,
      flexDirection: "column",
    },
    inputLabel: {
      marginBottom: theme.spacing(1),
      color: "#14532D",
      fontWeight: 600,
    },
    buttonLogin: {
      fontSize: 14,
      fontWeight: "bold",
      paddingTop: 12,
      paddingBottom: 12,
      paddingRight: 30,
      paddingLeft: 30,
      color: "#FFF",
      textTransform: "capitalize",
      transition: ".5s ease",
      backgroundColor: "#16A34A",
      "&:hover": {
        backgroundColor: "rgba(22,163,74,0.8)",
      },
      borderRadius: 5,
      textDecoration: "none",
    },
    resetPasswdText: {
      marginLeft: 12,
      fontSize: 14,
      color: "#16A34A",
      cursor: "pointer",
      "&:hover": {
        color: "rgba(22,163,74,0.8)",
      },
    },
    resetPasswdContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 12,
    },
  };
});
