import React from "react";
import User from "./components/User";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Createuser from "./components/Createuser";
import Updateuser from "./components/Updateuser";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<User/>}/>
        <Route path='/create' element={<Createuser/>}/>
        <Route path='/update/:id' element={<Updateuser/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
