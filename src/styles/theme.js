import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";

const breakpoints = createBreakpoints({
    values: {
        xxs: 0,
        xs: 375,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xl2: 1536,
    },
});

const theme = createMuiTheme({
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
                letterSpacing: "0.1rem",
                [breakpoints.up("xxs")]: {
                    padding: "0.6rem",
                    fontSize: "0.75rem",
                },
                [breakpoints.up("xs")]: {
                    padding: "0.75rem",
                    fontSize: "0.85rem",
                },
                [breakpoints.up("sm")]: {
                    padding: "1rem",
                    fontSize: "1rem",
                },
                [breakpoints.up("md")]: {
                    padding: "2rem",
                    fontSize: "1.25rem",
                },
                [breakpoints.up("lg")]: {
                    padding: "3rem",
                    fontSize: "1.5rem",
                },
                [breakpoints.up("xl")]: {
                    padding: "1.5rem",
                    fontSize: "1rem",
                },
            },
            root: {
                borderRadius: "0.75rem",
                [breakpoints.up("xxs")]: {
                    minHeight: "3.75rem",
                },
                [breakpoints.up("xs")]: {
                    minHeight: "4.5rem",
                },
                [breakpoints.up("sm")]: {
                    minHeight: "5rem",
                },
                [breakpoints.up("md")]: {
                    minHeight: "6rem",
                },
                [breakpoints.up("lg")]: {
                    minHeight: "7rem",
                },
                [breakpoints.up("xl")]: {
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
