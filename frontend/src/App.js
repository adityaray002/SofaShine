import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "./components/ui/sonner";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingCart from "./components/FloatingCart";

const Home = lazy(() => import("./pages/Home"));
const BookNow = lazy(() => import("./pages/BookNow"));
const Services = lazy(() => import("./pages/Services"));
const BlogList = lazy(() => import("./pages/Blog").then(m => ({ default: m.BlogList })));
const BlogPost = lazy(() => import("./pages/Blog").then(m => ({ default: m.BlogPost })));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Admin = lazy(() => import("./pages/Admin"));
const CartPage = lazy(() => import("./pages/CartPage"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <CartProvider>
          <BrowserRouter>
            <Header />
            <FloatingCart />
            <Suspense fallback={<PageLoader />}>
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
            </Suspense>
            <Footer />
            <Toaster position="top-right" richColors />
          </BrowserRouter>
        </CartProvider>
      </div>
    </HelmetProvider>
  );
}

export default App;
