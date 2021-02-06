module.exports = {
    darkMode: "media",
    purge: ["./src/**/*.js"],
    theme: {
        screens: {
            xs: "375px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
        extend: {
            fontSize: {
                "2.5xl": "1.65rem",
                "3.5xl": "2rem",
            },
            colors: {
                text: "#2E2E2E",
                mainGreen: "#20BF6B",
                mainPurple: "#8D61FF",
                secondaryGreen: "#26DE81",
                secondaryPurple: "#C261FF",
            },
            transitionDuration: {
                400: "400ms",
                600: "600ms",
                800: "800ms",
                900: "900ms",
            },
        },
    },
    variants: {
        borderStyle: ["responsive", "hover", "focus"],
    },
    plugins: [require("tailwindcss-textshadow")],
};
