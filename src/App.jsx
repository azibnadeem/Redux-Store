
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Navbar from './components/Navbar.jsx';
import store from './store/store.jsx';



function App() {
 
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
     <Navbar/> 
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
     </BrowserRouter>
    </Provider>
    </>
  )
}

export default App;
