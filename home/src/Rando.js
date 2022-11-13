import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RandoSupp from './RandoSupp';
export function Rando() {
    return (
        <Router>
            <Routes>
                <Route path='/extra' element = {<RandoSupp/>}>
                </Route>
            </Routes>
        </Router>
    )
}