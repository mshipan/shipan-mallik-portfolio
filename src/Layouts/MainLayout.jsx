import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import { AnimatePresence } from "framer-motion";
import myPhoto from "../assets/my-photo.jpg";
import { BiMenu } from "react-icons/bi";

const MainLayout = () => {
  return (
    <>
      {/* drawer */}
      <div className="md:hidden flex items-center justify-between p-5">
        <img
          src={myPhoto}
          alt="my Photo"
          className="w-12 h-12 rounded-full ml-5"
        />
        <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
          <BiMenu className="text-2xl"></BiMenu>
        </label>
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <AnimatePresence
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className="w-2/3"
          >
            <Outlet></Outlet>
          </AnimatePresence>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-screen bg-base-200 md:bg-white text-base-content">
            {/* Sidebar content here */}

            <SideNav></SideNav>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
