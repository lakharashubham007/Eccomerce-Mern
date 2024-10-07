/* eslint-disable react/jsx-no-undef */
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/ui/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import { user, isAuthenticated } from "lucide-react";
import AdminLayout from "./components/admni-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminFeatures from "./pages/admin-view/features";
import AdminOrder from "./pages/admin-view/orders";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found";

function App() {
  return (
    <div className="flex flwx-col overflow-hidden bg-white">
     

      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
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
          <Route path="/admin" element={<AdminLayout/>}>
             <Route path="dashboard" element={<AdminDashboard/>}/> <Route path="products" element={<AdminProducts/>}/>
             <Route path="orders" element={<AdminOrder/>}/>
            <Route path="features" element={<AdminFeatures/>}/>
          </Route>
          <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="" />
          <Route path="/home" element={<SHoppingHome />}/>
          <Route path="/listing" element={<ShoppingListing />}/>
          <Route path="/checkout" element={<ShoppingCheckout />}/>
          <Route path="/account" element={<ShoppingAccount />}/>
          </Route>
          <Route path="*" element={<NotFound />} />
           </Route>
        </Routes>
    </div>
  );
}

export default App;
