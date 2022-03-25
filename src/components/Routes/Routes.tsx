import Home from '../../pages/Home/Home';
import Login from '../../pages/LogIn/Login';
import Facts from '../../pages/Facts/facts';
import FavFacts from '../../pages/FavFacts/FavFacts'
import Registration from '../../pages/Registration/Registration'
import NotFoundPage from '../../pages/NotFound/NotFound';

export const routes: { path: string, element: any }[] = [
    { path: '*', element: <NotFoundPage /> },
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Registration /> },
    { path: '/facts', element: <Facts /> },
    { path: '/fav_facts', element: <FavFacts /> },

] 