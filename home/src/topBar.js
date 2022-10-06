import "./topNav.sass";
import fingerprint from "./images/fingerprint.png";
import meNoBG from "./images/meNoBG.png";
import { Button, Container, Grid, ListItem, Paper, styled } from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function TopBar() {
    return (
        <Container className="topContainer">
            <div className="topNav">
            </div>
            <img className="fingerprint" src={fingerprint} alt="fingerprint"></img>
            <div className="topBarButton">
                <Button sx={{ backgroundColor: '#FFF', margin: "10px" }}>hello</Button>
                <Button sx={{ backgroundColor: '#FFF', margin: "10px" }}>hello</Button>
                <Button sx={{ backgroundColor: '#FFF', margin: "10px" }}>hello</Button>
            </div>
            <div className="makeYourMark">
                <h1>
                    Leave your <br></br>mark
                </h1>
            </div>

            <img src = {meNoBG} alt = "me"></img>

        </Container>
    )
}

export default TopBar;