import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/home/navigation/navigation.component';
import Shop from './routes/home/shop/shop.component';
import Authentication from './routes/home/Authentication/Authentication.component';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/auth' element={<Authentication />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
