import Catedropdown from "./components/Home/Category/Category-dropdown/Catedropdown";
import CartPage from "./pages/Cart-Page/CartPage";
import ConfirmorderPage from "./pages/ConfirmOrder-Page/ConfirmorderPage";
import HomePage from "./pages/Home-Page/HomePage";
import LoginPage from "./pages/Login-Page/LoginPage";
import ProfilePage from "./pages/Profile-Page/ProfilePage";


export default function App() {
  return (
    <>
      <div className="flex-1">
        {/* <HomePage /> */}
        <div className="max-w-[1368px] mx-auto ">
          {/* <LoginPage/> */}
          {/* <ProfilePage /> */}
          {/* <CartPage /> */}
          <ConfirmorderPage/>
        </div>
      </div>
    </>
  )
}