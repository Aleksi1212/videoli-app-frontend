/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            textColor: '#ebf7fe',
            background: '#010c14',
            primary_button: '#384ffa',
            secondary_button: '#101c44',
            accent: '#4f05c7',
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
