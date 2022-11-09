import React from "react";
import { createSearchParams, Route, Routes, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import { NavBar } from "../components/navbar";
import { Products } from "./products";
import { Product } from "./product";
import { Cart } from "./cart";
import { NotFound } from "./not-found";

const Layout = ({onLogout}) => {
  const navigate = useNavigate();
  const { cartItemCount } = useCart();

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`);
  };

  return (
    <>
      <NavBar onSearch={onSearch} cartItemCount={cartItemCount()} onLogout={onLogout}/>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Layout;
