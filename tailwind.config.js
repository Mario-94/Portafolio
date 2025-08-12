/** @type {import('tailwindcss').Config} */
export const content = [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
];
export const theme = {
    extend: {
        colors: {
            // elements
            background: "#004643",
            headline: "#fffffe",
            paragraph: "#abd1c6",
            button: "#f9bc60",
            buttonText: "#001e1d",
            // illustration
            strongText: "#001e1d",
            main: "#e8e4e6",
            highLight: "#f9bc60",
            secondary: "#abd1c6",
            tertiary: "#e16162",
        },
        keyframes: {
            scroll: {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" },
            },
        },
        animation: {
            "scroll-fast": "scroll 10s linear infinite",
            "scroll-medium": "scroll 20s linear infinite",
            "scroll-slow": "scroll 30s linear infinite",
        },
    },
};
export const plugins = [];
