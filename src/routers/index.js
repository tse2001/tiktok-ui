import Home from '~/pages/Home';
import Following from '~/pages/Following';

//public routers
const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
