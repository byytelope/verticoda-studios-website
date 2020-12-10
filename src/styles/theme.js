import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
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
            },
            root: {
                borderRadius: "0.4rem",
                minHeight: "4rem",
            },
            outlined: {
                backdropFilter: "blur(5px)",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(0,0,0,0.1)",
                borderWidth: "1px",
            },
        },
    },
});
