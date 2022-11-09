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
                main: '#F29797',
            },
            secondary: {
                main: '#edf2ff',
            },
        },
    });

    return (
        <ThemeProvider theme = {theme}>
            <Box style={{ transform: "translateY(270%)" }}
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
                <Paper sx = {{backgroundColor: "primary.main", padding: "10px", fontSize: "35px", fontFamily:"Nunito", text: "#000"}}>
                    I'm a college student pursuing a Computer Science and East Asian Studies Bachelor's Degree.
                    I'm interested in making fun and interactive productives that enhance people's personal and work lives, 
                    and like to think deeply at the geopolitical impacts of technological breakthroughs, especially if that 
                    relationship affects security ties between East Asia, Southeast Asia, and the United States. 
                </Paper>
            </Box>
        </ThemeProvider>
    )
}
export default About;