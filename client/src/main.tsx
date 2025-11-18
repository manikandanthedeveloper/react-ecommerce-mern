import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from 'react-router';
import Routers from './AppRouter.tsx';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={Routers} />
)
