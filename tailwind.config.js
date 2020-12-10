module.exports = {
    darkMode: "media",
    purge: ["./src/**/*.js"],
    theme: {
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
        extend: {
            colors: {
                text: "#2E2E2E",
                mainGreen: "#20BF6B",
                mainPurple: "#8D61FF",
                secondaryGreen: "#26DE81",
                secondaryPurple: "#C261FF",
            },
        },
    },
    variants: {
        borderStyle: ["responsive", "hover", "focus"],
    },
    plugins: [require("tailwindcss-textshadow")],
};
