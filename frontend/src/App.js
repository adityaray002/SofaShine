import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingCart from "./components/FloatingCart";
import Home from "./pages/Home";
import BookNow from "./pages/BookNow";
import Services from "./pages/Services";
import { BlogList, BlogPost } from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <FloatingCart />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<BookNow />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer />
          <Toaster position="top-right" richColors />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
