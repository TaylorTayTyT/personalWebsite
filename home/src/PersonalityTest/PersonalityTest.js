import { FormGroup, FormControlLabel, FormControl, Box, Checkbox, Button, FormHelperText } from "@mui/material";
import { useState } from "react";
import "./PersonalityTest.sass";
import axios from 'axios'

function PersonalityTest() {
    const [helperText, SetHelperText] = useState('default')
    const [error, SetError] = useState(false)
    const [question, SetQuestion] = useState(0);

    //read files from questions.txt
    


    const baseURL = 'http://localhost:3000/personalityTest/';


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(baseURL, {
            title: 'hi world',
            body: 'experimenting'
        })
            .then((response) => {
                console.log(response.data)
                SetHelperText(response.data)
            })

        let incQuestion = question + 1;
        SetQuestion(incQuestion);
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
                    <h1 style={{ alignSelf: 'vertical' }}>Question 1: Something</h1>
                    <form onSubmit={handleSubmit} method='post'>
                        <FormControl
                            component="fieldset"
                            required
                            error={error}
                        >
                            <FormGroup aria-label="position" row>
                                <FormControlLabel
                                    value="top"
                                    control={<Checkbox name='1' />}
                                    label="1"
                                    labelPlacement="top"

                                />
                                <FormControlLabel
                                    value="start"
                                    control={<Checkbox name='2' />}
                                    label="2"
                                    labelPlacement="top"

                                />
                                <FormControlLabel
                                    value="bottom"
                                    control={<Checkbox name='3' />}
                                    label="3"
                                    labelPlacement="top"

                                />
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox name='4' />}
                                    label="4"
                                    labelPlacement="top"

                                />
                                <FormControlLabel
                                    value="end"
                                    control={<Checkbox name='5' />}
                                    label="5"
                                    labelPlacement="top"

                                />
                            </FormGroup>
                            <FormHelperText>{helperText}</FormHelperText>
                            <Button onSubmit={handleSubmit} type='submit'>Submit</Button>
                        </FormControl>
                    </form>
                </div>
            </Box>
        </div>
    )
}

export default PersonalityTest;