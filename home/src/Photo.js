import meNoBG from "./images/meNoBG.png";
import {Container} from "@mui/material";
import "./Photo.sass";

function Photo() {
    return (
        <Container sx = {{width: "100%"}}>
            <img src = {meNoBG} alt = "me" className="picOfMe"></img>
        </Container>
    );
}
export default Photo;