import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import ProductAll from "./pages/ProductAll.jsx";
import ProjectCreate from "./pages/ProjectCreate.jsx";
import ProductCreate from "./pages/ProductCreate.jsx";
import SellAll from "./pages/SellAll.jsx";
import AllProject from "./pages/ProjectAll.jsx";
// import Analytics from "./pages/Analytics.jsx";
// import Product from "./pages/Product.jsx";
// import ProductList from "./pages/ProductList.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/AllProject" element={<AllProject />} />
          <Route path="/productAll" element={<ProductAll />} />
          <Route path="/ProjectCreate" element={<ProjectCreate />} />
          <Route path="/ProductCreate" element={<ProductCreate />} />
          <Route path="/SellAll" element={<SellAll />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
