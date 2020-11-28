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
                color: "#2E2E2E",
                opacity: "69%",
                padding: "1.25rem",
            },
            root: {
                borderRadius: 7,
                minHeight: "4rem",
            },
            outlined: {
                backdropFilter: "blur(5px)",
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0)",
            },
        },
    },
});
