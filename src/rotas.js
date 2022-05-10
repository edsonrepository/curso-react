import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import Home from "./views/Home"
import CadastroProduto from "./views/products/Cadastro";

export default () => {
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cadastro-produtos" element={<CadastroProduto/>} />
            </Routes>
        </HashRouter>
    )
}