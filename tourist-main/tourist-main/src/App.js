import './App.css';
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Aboutpage from './Components/About-page/Aboutpage';
import Home from './Components/Home-page/Home';
import Servicespage from './Components/Servicespage/Servicespage';
import Packagespage from './Components/Packagespage/Packagespage';
import Contactpage from './Components/Contactpage/Contactpage';





function App() {
  const router = createBrowserRouter ([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about',
      element:<Aboutpage/>
    },
    {
      path:'/services',
      element:<Servicespage/>
    },
    {
      path:'/packages',
      element:<Packagespage/>
    },
    {
      path:'/contact',
      element:<Contactpage/>
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}


export default App;
