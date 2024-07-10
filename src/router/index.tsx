import { useRoutes } from 'react-router-dom';
import routes from './app-routes';

const RouteProvider = () => {
  const content = useRoutes(routes);
  return content;
};

export default RouteProvider;