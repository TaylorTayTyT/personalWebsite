import { FormGroup, FormControlLabel, Box, Checkbox } from "@mui/material";
import "./PersonalityTest.sass";

function PersonalityTest() {

    const sendData = () => {
        //this will be used to send an object file of what the score was
    }

    return (
        <div>
            <h1 className="title">How similar are you to me?</h1>

            <Box sx={{
                width: '100%',
                height: 500,
                backgroundColor: '#bee1e1',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div style={{ display: 'block' }}>
                    <h1>Question 1: Something</h1>

                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel control={<Checkbox />} label="Disabled" />
                    </FormGroup>
                    <button onClick={sendData}>Submit</button>
                </div>
            </Box>
        </div>
    )
}

export default PersonalityTest;