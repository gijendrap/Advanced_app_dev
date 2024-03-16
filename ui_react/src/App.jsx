import  { lazy, Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
const Home = lazy (()=> import('./pages/shared/Home'))
const Feature = lazy (() => import('./pages/shared/Feature'))
const Home2 = lazy (() => import('./pages/shared/Home2'))
import WebLayout from './layouts/Weblayouts';
import Loader from './public/Loader';
import Error from './pages/shared/Error';
import Login from './pages/auth/Login'


const AppRoutes = () => {
  return (
   <BrowserRouter>
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route element={<WebLayout />}>
        <Route exact path='/' element={<Home />} />
        <Route path='/Home2' element={<Home2/>} />
        <Route path='/Feature' element={<Feature />} />
        <Route path='/Loader' element={<Loader />} />
      </Route>
      <Route>
        <Route path='/Login' element={<Login/>}/>
      </Route>
      <Route path='*' element={<Error />} />
    </Routes>
    </Suspense> 
   </BrowserRouter>
  );
};

export default AppRoutes;

