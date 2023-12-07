import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from './pages/Cart'
import OneProduct from './pages/oneProduct'
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AllProducts from "./pages/AllProducts";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import AddProducts from "./pages/AddProducts";
import CheckoutPage from "./pages/CheckoutPage";
import NoPage from "./pages/NoPage";
import PasswordReset from "./pages/PasswordReset";
// import PaymentCheckout from "./pages/PaymentCheckout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path='/' element={<Landing />} /> */}
          <Route path='/confirm' element={<ProtectedRoute page={<CheckoutPage />} />} />
          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/allproducts' element={<AllProducts />} />
          <Route path='/oneproduct/:id' element={<OneProduct />} />
          <Route path='/admin' element={<AddProducts />} />
          {/* <Route path='/pay' element={<PaymentCheckout />} /> */}
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
