import { Routes as Router, Route } from 'react-router-dom';
import Home from '../pages/home';

const Routes = () => {

    return (
        <Router>
            <Route index element={<Home />} />
        </Router>
    )
}

export default Routes