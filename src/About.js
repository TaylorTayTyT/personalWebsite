import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
            <Box style={{ transform: "translateY(20%)" }}
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 1000,
                        height: 400,
                    },
                    justifyContent: 'center',
                    transform: 'translateY(-50%)',
                }}
            >

                <p id = "aboutMe" style={{display: "inline-block", maxHeight: "50px", fontSize: "40px"}}>About Me!</p>
                <Paper sx = {{backgroundColor: "#FFF", fontSize: "35px", padding: "10px", fontFamily:"Nunito", text: "#000"}}>
                    I'm a college student pursuing a Computer Science and East Asian Studies Bachelor's Degree at Johns Hopkins University.
                    I'm interested in making fun and interactive projects that enhance people's personal and work lives, 
                    and like to think deeply at the geopolitical impacts of technological breakthroughs, especially if that 
                    relationship affects security ties between East Asia, Southeast Asia, and the United States. 
                </Paper>
            </Box>
        </ThemeProvider>
    )
}
export default About;