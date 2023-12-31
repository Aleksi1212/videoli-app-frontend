/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            textColor: '#ebf7fe',
            background: '#010c14',
            primary_button: '#384ffa',
            secondary_button: '#101c44',
            accentColor1: '#4f05c7',
            accentColor2: '#2b2735',
            success: '#179b5b',
            warning: '#f1b465',
            error: '#fa1e4e',
        },
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#384ffa',
                    secondary: '#101c44',
                    accent: '#4f05c7',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
