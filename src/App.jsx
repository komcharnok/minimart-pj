import Catedropdown from "./components/Home/Category/Category-dropdown/Catedropdown";
import CartPage from "./pages/Cart-Page/CartPage";
import HomePage from "./pages/Home-Page/HomePage";
import Login from "./pages/Login-Page/LoginPage";
import ProfilePage from "./pages/Profile-Page/ProfilePage";


export default function App() {
  return (
    <>
      <div className="flex-1">
        {/* <HomePage /> */}
        <div className="max-w-[1362px] mx-auto ">
          {/* <Login/> */}
          {/* <CartPage /> */}
          <ProfilePage />


        </div>
      </div>
    </>
  )
}