import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewItem from './Pages/AddNewItem/AddNewItem';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Sheare/Footer/Footer';
import Header from './Pages/Sheare/Header/Header';
import UpdateBook from './Pages/UpdateBook/UpdateBook';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/update/:id' element={
         <RequireAuth><UpdateBook></UpdateBook></RequireAuth>
       }></Route>
       <Route path='/manageinventory' element={<RequireAuth><ManageInventory></ManageInventory></RequireAuth>}></Route>
       <Route path='/addnewitem' element={<RequireAuth><AddNewItem></AddNewItem></RequireAuth>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/myitems' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
