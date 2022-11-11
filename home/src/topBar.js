import "./topNav.sass";
import {Container, Button} from "@mui/material";
import mePic from "./images/meNoBG.png";

function TopBar() {
    let scrollIntoViewSite = (e) => {
        let element = document.getElementById(e);
        console.log(element)
        if (element) {
            element.scrollIntoView();
        }
    }
    const buttonStyle = {
        fontFamily: "Nunito",
        borderRadius: "2",
        backgroundColor: "#0b4d4a",
        mr: "20px",
        color: "#FFF",
        textTransform: "none",
        "&:hover": {
            backgroundColor: "#690020"
        }
    }
    return (
        <Container className="topContainer">
            <div className="topNav">
            </div>
            <div className="leftBrick"></div>
            <div className="rightBrick"></div>
            <div className="circle">
                <img className="picOfMe" id="picOfMe" src={mePic} alt="mePic" />
            </div>
            <div className="topBarButton">
                <Button sx={buttonStyle} onClick={() => {scrollIntoViewSite("home")}}>Home</Button>
                <Button sx={buttonStyle} onClick={() => {scrollIntoViewSite("language")}}>Languages</Button>
                <Button sx={buttonStyle} onClick={() => {scrollIntoViewSite("aboutMe")}}>About</Button>
            </div>
            <div className="makeYourMark">
                <h1>
                    Leave your <br></br>mark
                </h1>
            </div>
            <div id = "home" className="intro">Hi, <br></br>I'm Taylor</div>
        </Container>
    )
}

export default TopBar;