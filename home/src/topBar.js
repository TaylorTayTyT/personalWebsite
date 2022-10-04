import "./topNav.sass"
import fingerprint from "./images/fingerprint.png"
function TopBar() {
    return(
        <div>
        <div className = "topNav"></div>
        <img className="fingerprint" src={fingerprint}></img>
        </div>
    )
}

export default TopBar;