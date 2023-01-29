/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                tt: "var(--font-tt)",
                space: "var(--font-space)",
            },
        },
    },
    plugins: [],
};