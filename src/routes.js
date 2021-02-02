import MoviePage from './views/MoviePage';
import SearchPage from './views/SearchPage';
import ErrorPage from './views/ErrorPage';

const routes = [
  { component: MoviePage, path: '/movie/:id' },
  { component: SearchPage, exact: 'exact', path: '/' },
  { component: ErrorPage },
];

export default routes;
