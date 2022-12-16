import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Hoje from "./components/Hoje";
import AppProvider from "./AppContext/Provider";
export default function App() {
  return (
    <>
    <BrowserRouter>
    <AppProvider>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/cadastro' element={<Signup/>}/>
      <Route path='/hoje' element={<Hoje/>}/>
      
    </Routes>
    </AppProvider>
    </BrowserRouter>
    </>
  );
}

