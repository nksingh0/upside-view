import React from "react";
import ReactDOM from "react-dom/client"
import "./Style.css"
import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import './Style.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagenotfound from "./pages/Pagenotfound";
let root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
<>
<BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
</>
)