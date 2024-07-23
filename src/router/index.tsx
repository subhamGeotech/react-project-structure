import { RouterProvider } from 'react-router-dom';
import routes from './app-routes';
// import routes from './app-routes';

const RouteProvider = () => {
  return (<RouterProvider router={routes} />);
};

export default RouteProvider;