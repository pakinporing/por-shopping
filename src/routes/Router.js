import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/product/:Id',
    element: <ProductPage />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
