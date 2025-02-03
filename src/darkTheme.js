import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#bb86fc', // Change to your desired primary color
        },
        secondary: {
            main: '#000000', // Change to your desired secondary color
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

export default darkTheme;
  