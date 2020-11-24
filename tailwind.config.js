module.exports = {
    darkMode: "media",
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        mode: "layers",
        layers: ["base", "components", "utilities"],
        content: ["./src/App.js", "./src/components/*.js", "./src/pages/*.js"],
    },
    theme: {
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
        extend: {
            colors: {
                text: "#263238",
                primary: "#4FD1C5",
                secondary: "#81E6D9",
            },
        },
    },
    variants: { borderStyle: ["responsive", "hover", "focus"] },
    plugins: [],
};
