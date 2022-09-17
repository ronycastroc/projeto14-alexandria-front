import GlobalStyle from "../assets/style/GlobalStyle";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import BookPage from "./Pages/BookPage";
import UserContext from "../context/UserContext.js";
import Cart from "./Pages/Cart";
import { useState } from "react";
import AboutUs from "./Pages/AboutUs";
import ContactsPage from "./Pages/ContactPage";
import CategoriesPage from "./Pages/CategoriesPage";

export default function App() {
  const [cartItens, setCartItens] = useState([]);

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ cartItens, setCartItens }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/sobrenos" element={<AboutUs />} />
            <Route path="/product/:bookId" element={<BookPage />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/categorias/:categoria" element={<CategoriesPage />} />
            <Route path="/contato" element={<ContactsPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
