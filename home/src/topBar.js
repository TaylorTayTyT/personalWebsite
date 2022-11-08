import "./topNav.sass";
import {Container, Paper, styled, Menu, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { useState } from "react";
import mePic from "./images/meNoBG.png";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function handleRandClick(e) {
    console.log(e)
}


function TopBar() {
    document.addEventListener('click', handleRandClick(e));

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
            <div className="circle">
                <img className = "picOfMe" src = {mePic} alt = "mePic"/>
            </div>
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