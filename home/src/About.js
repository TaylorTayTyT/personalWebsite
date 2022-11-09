import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import "./About.sass";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { palette } from '@mui/system';
import { ClassNames } from '@emotion/react';
function About() {

    const theme = createTheme({
        paperRoot: {
            backgroundColor: "#0052cc",
        },
        palette: {
            primary: {
                main: '#0052cc',
            },
            secondary: {
                main: '#edf2ff',
            },
        },
    });

    return (
        <ThemeProvider theme = {theme}>
            <Box style={{ transform: "translateY(250%)" }}
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 1000,
                        height: 400,
                    },
                    justifyContent: 'center',
                }}
            >
                <Paper sx = {{backgroundColor: "primary.main"}}/>
            </Box>
        </ThemeProvider>
    )
}
export default About;