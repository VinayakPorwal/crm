import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SidebarNew from "../Sidebar/SidebarNew";
function DashBoardLayout() {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [toggle, setToggle] = useState(false);

  // Update the breadcrumbs whenever the route changes
  useEffect(() => {
    const pathSegments = location.pathname
      .split("/")
      .filter((segment) => segment);
    const newBreadcrumbs = pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join("/")}`;

      return <p key={path}>{segment}</p>;
    });
    setBreadcrumbs(newBreadcrumbs);
  }, [location.pathname]);
  return (
    <div className="flex h-screen">
      <div className="h-full min-w-max">
        {/* <Sidebar /> */}
        <SidebarNew toggle={toggle} setToggle={setToggle} />
      </div>
      <div className="w-[-webkit-fill-available] h-full overflow-scroll p-4 pt-0 bg-gray-100 dark:bg-gray-900">
        <div className="sm:p-4 sm:ml-64">
          <nav
            className="sticky top-0 z-10 mt-4 sm:my-4 flex items-center justify-between bg-gray-100 dark:bg-gray-900"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <i className="fa fa-home pr-2"></i>
                  Home
                </Link>
              </li>
              {breadcrumbs.map((breadcrumb, index) => (
                <li aria-current="page" key={index}>
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400 capitalize">
                      {breadcrumb}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
            <button
              onClick={() => setToggle(!toggle)}
              type="button"
              className="p-2 text-sm text-gray-500 rounded-lg sm:hidden dark:text-gray-400"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
          </nav>

          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashBoardLayout;
