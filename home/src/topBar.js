import "./topNav.sass";
import fingerprint from "./images/fingerprint.png";
import meNoBG from "./images/meNoBG.png";
import { Button, Container, Paper, styled, Menu, MenuItem } from "@mui/material";


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
                <Menu className = "resumeOptions" open= {true}>
                    <MenuItem>
                        HTML
                    </MenuItem>
                    <MenuItem>
                        CSS
                    </MenuItem>
                    <MenuItem>
                        Javascript
                    </MenuItem>
                </Menu>
                <Button sx={{ backgroundColor: '#FFF', margin: "10px" }}>About</Button>
                <Button sx={{ backgroundColor: '#FFF', margin: "10px" }}>Resume</Button>
                <Button sx={{ backgroundColor: '#FFF', margin: "10px" }}>Info</Button>
            </div>
            <div className="makeYourMark">
                <h1>
                    Leave your <br></br>mark
                </h1>
            </div>
        </Container>
    )
}

export default TopBar;