import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div id="view" className="h-screen flex p-0 sm:p-4 bg-white">
        <div
          className="absolute w-0 h-max block sm:hidden"
          onClick={() => setToggle(!toggle)}
        >
          <i className="fa fa-bars text-white"></i>
        </div>
        {toggle && (
          <div
            id="sidebar"
            className="flex flex-col justify-between items-center z-10 h-full bg-white rounded-lg shadow-custom md:block px-1 sm:px-3 w-16 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
          >
            <div className="space-y-2 h-[78%]">
              <div
                className="block sm:hidden z-[2] text-center mt-2"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <i className="fa fa-bars text-gray"></i>
              </div>
              <h1 className="hidden md:block font-bold text-md md:text-xl text-center mb-2">
                <i className="text-cpurple font-mono">CRM</i>
                <i className="fa-solid fa-table text-teal-500 px-2"></i>
              </h1>
              <div id="menu" className="flex flex-col space-y-2">
                <Link to={"/"}>
                  <div
                    // onClick={nav.func}
                    className={`btn bg-transparent outline-none border-none cursor-pointer flex justify-start items-center text-sm font-medium sm:text-left text-center text-gray-700 py-2 px-2 hover:bg-cblue hover:text-white rounded-md transition duration-150 ease-in-out`}
                  >
                    <i
                      className={`${"fa fa-square-poll-horizontal"} text-xl ml-8 mx-2`}
                    ></i>
                    <span className="block text-sm sm:text-lg sm:inline-block capitalize">
                      Home
                    </span>
                  </div>
                </Link>
                <Link to={"/Customers"}>
                  <div
                    // onClick={nav.func}
                    className={`btn bg-transparent outline-none border-none cursor-pointer flex justify-start items-center text-sm font-medium sm:text-left text-center text-gray-700 py-2 px-2 hover:bg-cblue hover:text-white rounded-md transition duration-150 ease-in-out`}
                  >
                    <i
                      className={`${"fa fa-address-book"} text-xl mx-2 ml-8`}
                    ></i>
                    <span className="block text-sm sm:text-lg sm:inline-block capitalize">
                      Customers
                    </span>
                  </div>
                </Link>
                <Link to={"/Sales"}>
                  <div
                    // onClick={nav.func}
                    className={`btn bg-transparent outline-none border-none cursor-pointer flex justify-start items-center text-sm font-medium sm:text-left text-center text-gray-700 py-2 px-2 hover:bg-cblue hover:text-white rounded-md transition duration-150 ease-in-out`}
                  >
                    <i
                      className={`${"fa fa-chart-line"} text-xl mx-2 ml-8`}
                    ></i>
                    <span className="block text-sm sm:text-lg sm:inline-block capitalize">
                      Sales
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link to={"/Profile"}>
                <div
                  // onClick={nav.func}
                  className={`btn bg-transparent outline-none border-none cursor-pointer flex justify-start items-center text-sm font-medium sm:text-left text-center text-gray-700 py-2 px-2 hover:bg-cblue hover:text-white rounded-md transition duration-150 ease-in-out`}
                >
                  <i className={`${"fa fa-circle-user"} text-xl mx-2 ml-8`}></i>
                  <span className="block text-sm sm:text-lg sm:inline-block capitalize">
                    Profile
                  </span>
                </div>
              </Link>
              <Link to={"/register"}>
                <div
                  // onClick={nav.func}
                  className={`btn bg-transparent outline-none border-none cursor-pointer flex justify-start items-center text-sm font-medium sm:text-left text-center text-gray-700 py-2 px-2 hover:bg-cblue hover:text-white rounded-md transition duration-150 ease-in-out`}
                >
                  <i
                    className={`${"fa fa-sign-out-alt"} text-xl mx-2 ml-8`}
                  ></i>
                  <span className="block text-sm sm:text-lg sm:inline-block capitalize">
                    Logout
                  </span>
                </div>
              </Link>
              <div className="text-sm hidden sm:block m-2">
                © {new Date().getFullYear()} | CodeLab™
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
