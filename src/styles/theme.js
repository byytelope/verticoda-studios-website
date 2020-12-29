import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";

const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xl2: 1536,
        },
    },
    palette: {
        primary: {
            main: "#8D61FF",
            500: "#C261FF",
        },
        secondary: {
            main: "#20BF6B",
            500: "#26DE81",
        },
    },
    typography: {
        fontFamily: "Poppins",
    },
    overrides: {
        MuiButton: {
            label: {
                color: "rgba(0,0,0,0.5)",
                opacity: "100%",
                padding: "1.25rem",
                fontSize: "1rem",
                [breakpoints.between("sm", "md")]: {
                    padding: "2rem",
                    fontSize: "1.5rem",
                },
                [breakpoints.down("sm")]: {
                    padding: "2.5rem",
                    fontSize: "6rem",
                },
            },
            root: {
                borderRadius: "0rem",
                minHeight: "4rem",
                [breakpoints.between("sm", "md")]: {
                    minHeight: "6rem",
                },
                [breakpoints.down("sm")]: {
                    minHeight: "7rem",
                },
            },
            outlined: {
                backgroundColor: "rgba(50,50,50,.05)",
                borderColor: "rgba(0,0,0,0.1)",
                borderWidth: "1px",
            },
        },
    },
});

export default theme;
