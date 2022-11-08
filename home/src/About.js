import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import "./About.sass";
function About() {

    return (
        <Box style = {{transform:"translateY(800%)"}}
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 200,
                    height: 128,
                },

            }}
        >
            <Paper elevation={0} />
            <Paper />
            <Paper elevation={3} />
            <h1>hello</h1>
        </Box>
    )
}
export default About;