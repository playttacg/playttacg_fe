import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLoadingScreen from '../pages/AuthLoadingScreen';
import Home from '../pages/Home';
import News from '../pages/News';
import Events from '../pages/Events';
import Players from '../pages/Players';
import Rankings from '../pages/Rankings';
import Gallery from '../pages/Gallery';

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AuthLoadingScreen />} />
                <Route path='/home' element={<Home />} />
                <Route path='/news' element={<News />} />
                <Route path='/events' element={<Events />} />
                <Route path='/players' element={<Players />} />
                <Route path='/rankings' element={<Rankings />} />
                <Route path='/gallery' element={<Gallery />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
