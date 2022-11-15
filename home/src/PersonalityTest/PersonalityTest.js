import { TextField, Box } from "@mui/material";
import "./PersonalityTest.sass";

function PersonalityTest() {
    return (
        <div>
            <h1 className="title">How similar are you to me?</h1>

            <Box sx={{
                width: '100%',
                height: 300,
                backgroundColor: '#bee1e1',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <TextField id="outlined-basic" variant="outlined" label="Put something here" style={{ verticalAlign: "center", display: 'block' }} />
            </Box>
        </div>
    )
}

export default PersonalityTest;