import loadable from 'utils/loadable';

export const NotFoundPage = loadable(() => import('./NotFoundPage/index'));
export const HomePage = loadable(() => import('./HomePage/index'));
export const Auth = loadable(() => import('./Auth/index'));
