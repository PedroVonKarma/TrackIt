import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Hoje from "./components/Hoje";
import AppProvider from "./AppContext/Provider";
import Habitos from "./components/Habitos";
import GlobalStyle from "./Reset";
import Historico from "./components/Historico";
export default function App() {
  return (
    <>
    <BrowserRouter>
    <GlobalStyle/>
    <AppProvider>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/cadastro' element={<Signup/>}/>
      <Route path='/hoje' element={<Hoje/>}/>
      <Route path='/habitos' element={<Habitos/>}/>
      <Route path='/historico' element={<Historico/>}/>
    </Routes>
    </AppProvider>
    </BrowserRouter>
    </>
  );
}

