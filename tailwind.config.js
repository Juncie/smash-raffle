/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    prefix: '',
    theme: {
        extend: {
            fontFamily: {
                russo: ['Russo One', 'Saira', 'sans-serif'],
            },
            colors: {
                primary: '#0082B5',
                secondary: '#FEF75B',

                blue: {
                    dark: '#033673',
                    complimentary: '#0093F2',
                },
                red: {
                    bg: '#E53E3E',
                },
                orange: {
                    bg: '#FB923C',
                },
                stencil: {
                    gray: '#B9B9B9',
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                'fade-up': {
                    from: { opacity: 0, transform: 'translateY(20px)' },
                    to: { opacity: 1, transform: 'translateY(0px)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-up': 'fade-up 0.4s ease-in-out',
            },
            fontSize: {
                font156: '156px',
                font140: '140px',
                font128: '128px',
                font64: '64px',
                font54: '54px',
                font48: '48px',
                font44: '44px',
                font36: '36px',
                font32: '32px',
                font28: '28px',
                font24: '24px',
                font22: '22px',
                font20: '20px',
                font18: '18px',
                font17: '17px',
                font16: '16px',
                font15: '15px',
                font14: '14px',
                font13: '13px',
                font12: '12px',
                font11: '11px',
                font10: '10px',
                font9: '9px',
                font8: '8px',
            },
        },
    },
    plugins: [],
};
