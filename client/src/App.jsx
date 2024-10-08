/* eslint-disable no-unused-vars */

import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/ui/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import { user, isAuthenticated, Check } from "lucide-react";
import AdminLayout from "./components/admni-view/layout";
import AdminProducts from "./pages/admin-view/products";
import AdminDashboard from "./pages/admin-view/dashboard";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingAccount from "./pages/shopping-view/account";
import AdminFeatures from "./pages/admin-view/features";
import AdminOrder from "./pages/admin-view/orders";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";

function App() {
  const isAuthenticated = false;
  const user = null;

  return (
    <div className="flex flwx-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route
            path="/"
            element={
              <CheckAuth
                isAuthenticated={isAuthenticated}
                user={user}
              ></CheckAuth>
            }
          />
          <Route
            path="/auth"
            element={
              <CheckAuth
                isAuthenticated={isAuthenticated}
                user={user}
              ></CheckAuth>
            }
          >
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>
          <Route
            path="/admin"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AdminLayout />
              </CheckAuth>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />{" "}
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrder />} />
            <Route path="features" element={<AdminFeatures />} />
          </Route>
          <Route
            path="/shop"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                {" "}
                <ShoppingLayout />
              </CheckAuth>
            }
          >
            <Route path="" />
            <Route path="/home" element={<ShoppingHome />} />
            <Route path="/listing" element={<ShoppingListing />} />
            <Route path="/checkout" element={<ShoppingCheckout />} />
            <Route path="/account" element={<ShoppingAccount />} />
          </Route>
          <Route path="/unauth-page" element={<UnauthPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
