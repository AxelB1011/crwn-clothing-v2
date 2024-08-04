// import './categories.styles.scss'
// import Directory from './components/directory/directory.component';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import SignIn from './routes/sign-in/sign-in.component';

const App = () => {
  return (
    <Routes> 
      <Route path='/' element={<Navigation />}> 
        {/* <Route path='home' element={<Home />}/>  */}
        {/* <Route index={true} element={<Home />}/>  */}
        <Route index element={<Home />}/> 
        <Route path='/shop' element={<Shop />}/> 
        <Route path='/sign-in' element={<SignIn />}/> 
      </Route>
      
    </Routes>
  );
};

export default App;
