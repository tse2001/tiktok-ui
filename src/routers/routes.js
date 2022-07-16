import { HeaderOnly } from '~/layouts';
import { Home, Following, Profile, Upload } from '~/pages';
import config from '~/config';
//public routers
const publicRoutes = [
    {
        path: config.routesConfig.home,
        component: Home,
    },
    {
        path: config.routesConfig.following,
        component: Following,
    },
    {
        path: config.routesConfig.profile,
        component: Profile,
    },
    {
        path: config.routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
