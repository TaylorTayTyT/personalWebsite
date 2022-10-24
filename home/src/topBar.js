import "./topNav.sass";
import fingerprint from "./images/fingerprint.png";
import meNoBG from "./images/meNoBG.png";
import handleNavBar from "./functionality/handleNavBar";
import { Button, Container, Paper, styled, Menu, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { useState } from "react";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function TopBar() {
    const [open, setOpen] = useState(false);
    const handleMenuClick = () => {
        setOpen(!open)
    };
    return (
        <Container className="topContainer">
            <div className="topNav">
            </div>
            <div className="leftBrick"></div>
            <div className="rightBrick"></div>
            <div className="circle"></div>
            <div className="topBarButton">
                <FormControl fullWidth>
                    <InputLabel id="navBar">page</InputLabel>
                    <Select className="resumeOptions"
                        id="navBarSelect"
                        label="page"
                        open={open}
                        onClick={handleMenuClick}
                        defaultValue="Home"
                        sx={{ right: "5%", color: "#FFF", borderColor: "#FFF", background: "#9AB0E0" }}
                    >
                        <MenuItem value={1}>
                            Home
                        </MenuItem>
                        <MenuItem value={2}>
                            About
                        </MenuItem>
                        <MenuItem value={3}>
                            Resume
                        </MenuItem>
                    </Select>
                </FormControl>

            </div>
            <div className="makeYourMark">
                <h1>
                    Leave your <br></br>mark
                </h1>
            </div>
            <div className="intro">Hi, <br></br>I'm Taylor</div>
        </Container>
    )
}

export default TopBar;