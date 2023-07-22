import { Outlet } from "react-router-dom";
import logo from '../img/secretsanta.png';
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <div className="bg-red-400 max-w-md container mx-auto rounded-t-full">
        <img src={logo}></img>
      </div>
      <div className="bg-white border-2 border-red-400 max-w-md mb-5 container mx-auto p-5 rounded-b-lg">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
