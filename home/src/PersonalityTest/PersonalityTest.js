import { FormGroup, FormControlLabel, FormControl, FormLabel, Box, Checkbox } from "@mui/material";
import "./PersonalityTest.sass";

function PersonalityTest() {

    const sendData = () => {
        //this will be used to send an object file of what the score was
    }

    const error = ['1', '2', '3', '4', '5'].filter((v)=>v).length != 1;

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
                    <h1 style = {{alignSelf: 'vertical'}}>Question 1: Something</h1>
                    <FormControl 
                        component="fieldset"
                        required
                        error = {error}
                        >
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox name = '1'/>}
                                label="1"
                                labelPlacement="top"
                                
                            />
                            <FormControlLabel
                                value="start"
                                control={<Checkbox name = '2'/>}
                                label="2"
                                labelPlacement="top"
                                
                            />
                            <FormControlLabel
                                value="bottom"
                                control={<Checkbox name = '3'/>}
                                label="3"
                                labelPlacement="top"
                                
                            />
                            <FormControlLabel
                                value="end"
                                control={<Checkbox name = '4' />}
                                label="4"
                                labelPlacement="top"
                                
                            />
                            <FormControlLabel
                                value="end"
                                control={<Checkbox name = '5'/> }
                                label="5"
                                labelPlacement="top"
                                
                            />
                        </FormGroup>
                    </FormControl>
                    <button style={{ display: 'block' }} onClick={sendData}>Submit</button>
                </div>
            </Box>
        </div>
    )
}

export default PersonalityTest;