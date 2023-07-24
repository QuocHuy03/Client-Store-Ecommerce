import { Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContextProvider";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import FilterPage from "./pages/FilterPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { clientID } from "./env";
import CheckoutPage from "./pages/CheckoutPage";
import OrderPage from "./pages/OrderPage";
import ListOrderPage from "./pages/ListOrderPage";
import DetailOrderPage from "./pages/DetailOrderPage";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={clientID}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:slug" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/filter" element={<FilterPage />} />
          <Route path="/checkout/:uid" element={<CheckoutPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/list-order" element={<ListOrderPage />} />
          <Route path="/detail-order/:code" element={<DetailOrderPage />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
