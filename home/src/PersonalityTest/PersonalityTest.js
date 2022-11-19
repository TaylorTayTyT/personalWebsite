import { TextField, Box, Input, Button } from "@mui/material";
import "./PersonalityTest.sass";

function PersonalityTest() {

    const sendData = () => {
        let data = {a: 1};
        fetch('http://localhost:3001/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
        })
            .then((res) => { res.json() })
            .then((json) => console.log(json))
            .then(() => console.log("finished"))
            .catch((e) => console.log(e))
    }

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
                <TextField id="submissive" label="Filled" variant="filled" style={{ verticalAlign: "center", display: 'block' }} />
                <button onClick={sendData}>Submit</button>
            </Box>
        </div>
    )
}

export default PersonalityTest;