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
        MuiIconButton: {
            root: {
                color: "#2E2E2E",
            },
        },
        MuiButton: {
            label: {
                color: "rgba(0,0,0,0.5)",
                opacity: "100%",
                padding: "1.5rem",
                fontSize: "1rem",
                letterSpacing: "0.1rem",
                [breakpoints.between("sm", "md")]: {
                    padding: "2rem",
                    fontSize: "1.5rem",
                },
                [breakpoints.down("sm")]: {
                    padding: "2rem",
                    fontSize: "1.5rem",
                },
                [breakpoints.down("xs")]: {
                    padding: "1rem",
                    fontSize: "1rem",
                },
            },
            root: {
                borderRadius: "0.75rem",
                minHeight: "5rem",
                [breakpoints.between("sm", "md")]: {
                    minHeight: "6rem",
                },
                [breakpoints.down("sm")]: {
                    minHeight: "6rem",
                },
                [breakpoints.down("xs")]: {
                    minHeight: "5rem",
                },
            },
            outlined: {
                backgroundColor: "rgba(50,50,50,0)",
                borderColor: "rgba(0,0,0,0.1)",
                borderWidth: "1px",
            },
        },
    },
});

export default theme;
