module.exports = {
    purge: ["public/**/*.html", "./src/**/*.js"],
    // darkMode: "media",
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
                textSecondary: "#868686",
                mainGreen: "#20BF6B",
                mainPurple: "#8D61FF",
                secondaryGreen: "#26DE81",
                secondaryPurple: "#C261FF",
            },
        },
    },
    plugins: [require("tailwindcss-textshadow")],
};
