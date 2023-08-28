import loadable from '@loadable/component';
import { createBrowserRouter } from 'react-router-dom';

const Home = loadable(() => import('@/pages'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export default routes;
