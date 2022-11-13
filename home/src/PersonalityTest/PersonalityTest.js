import { TextField, Container, Box } from "@mui/material";

function PersonalityTest() {
    console.log("hi")
    return (
        <Box sx={{
            width: '100%',
            height: 300,
            backgroundColor: '#bee1e1', 
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <TextField id="outlined-basic" variant="outlined" label = "Put something here" style = {{verticalAlign: "center"}}/>
        </Box>
    )
}

export default PersonalityTest;