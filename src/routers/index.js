import { HeaderOnly } from '~/components/Layout';
import { Home, Following, Profile, Upload } from '~/pages';

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
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
