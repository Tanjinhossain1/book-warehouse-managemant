import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewItem from './Pages/AddNewItem/AddNewItem';
import Home from './Pages/Home/Home/Home';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import Footer from './Pages/Sheare/Footer/Footer';
import Header from './Pages/Sheare/Header/Header';
import UpdateBook from './Pages/UpdateBook/UpdateBook';


function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/update/:id' element={<UpdateBook></UpdateBook>}></Route>
       <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>
       <Route path='/addnewitem' element={<AddNewItem></AddNewItem>}></Route>
     </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
