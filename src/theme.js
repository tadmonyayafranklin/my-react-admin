import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#03dac6', // Change to your desired primary color
        },
        secondary: {
            main: '#9e0142', // Change to your desired secondary color
        },
    },
    typography: {
        fontFamily: "'Roboto', sans-serif",
        fontSize: '16px',
        headingFontSize: '24px',
        smallFontSize: '12px',
        // Add more typography styles as needed
    },
});

export default theme;

