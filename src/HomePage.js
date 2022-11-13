import TopBar from './topBar';
import Fingerprint from './Fingerprint';
import About from './About';
import FlexButtons from './FlexButton';

export default function HomePage() {
    return (
        <div>
            <TopBar />
            <Fingerprint />
            <About />
            <FlexButtons />
        </div>
    )
}