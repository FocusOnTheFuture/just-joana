import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import MenuBar from './Components/MenuBar';

export default function AppRouter() {
    return (
        <Router>
            <MenuBar />
            <Routes>
                <Route path='*' element= { <NotFound/> } />
                <Route path='/' element={ <Home/> } />
                <Route path='/admin' element={ <Admin/> } />
            </Routes>
        </Router>
    );
}