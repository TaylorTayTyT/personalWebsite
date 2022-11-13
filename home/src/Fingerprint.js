import { height } from "@mui/system";
import fingerprint from "./images/fingerprint.png";
import "./topNav.sass"
function Fingerprint() {
    return (
        <div class = "position">
            <img className="fingerprint" src={fingerprint} alt="fingerprint"></img>
            <img class="backgroundFingerprint a" src={fingerprint} alt="fingerprint"></img>
            <img class="backgroundFingerprint b" src={fingerprint} alt="fingerprint"></img>
            <img class="backgroundFingerprint c" src={fingerprint} alt="fingerprint"></img>
            <img class="backgroundFingerprint d" src={fingerprint} alt="fingerprint"></img>
            <img class="backgroundFingerprint e" src={fingerprint} alt="fingerprint"></img>
            <img class="backgroundFingerprint f" src={fingerprint} alt="fingerprint"></img>
            <img class="backgroundFingerprint g" src={fingerprint} alt="fingerprint"></img>
            <img class="backgroundFingerprint h" src={fingerprint} alt="fingerprint"></img>
        </div>
    )
}

export default Fingerprint