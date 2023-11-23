import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Svgs } from "./svgFile";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth, logout } from "../../Redux/Features/AuthThunk";
function SidebarNew({ toggle, setToggle }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const isAdmin = user && user.role === "admin";
  const currentTab = location.pathname;
  const UpperTabs = [
    {
      svg: Svgs.DashboardSvg,
      name: "Dashboard",
      to: "/",
      role: "both",
    },
    {
      svg: Svgs.TicketsSvg,
      name: "Tickets",
      to: "/tickets",
      role: "both",
    },
    {
      svg: Svgs.TicketsSvg,
      name: "New Ticket",
      to: "/newTicket",
      role: "both",
    },
    {
      svg: Svgs.CustomersSvg,
      name: "Customers",
      to: "/Customers",
      role: "admin",
    },
  ];

  const LowerTabs = [
    {
      svg: Svgs.SignInSvg,
      name: "SignIn",
      role: "unauth",
      route: "/login",
      to: () => {
        navigate("/login");
        setToggle(!toggle);
      },
    },
    {
      svg: Svgs.SignUpSvg,
      name: "SignUp",
      role: "unauth",
      route: "/register",
      to: () => {
        navigate("/register");
        setToggle(!toggle);
      },
    },
    {
      svg: Svgs.SignInSvg,
      name: "Logout",
      role: "auth",
      route: "/.",
      to: () => {
        dispatch(logout());
        setToggle(!toggle);
      },
    },
    {
      svg: Svgs.DocumentationSvg,
      name: "Profile",
      role: "auth",
      route: "/profile/" + (user && user.id),
      to: () => {
        navigate("/profile/" + (user && user.id));
        setToggle(!toggle);
      },
    },
    {
      svg: Svgs.HelpSvg,
      name: "Help",
      role: "both",
      route: "/help",
      to: () => {
        navigate("/help");
        setToggle(!toggle);
      },
    },
  ];
  useEffect(() => {
    dispatch(checkAuth());
    !isAuthenticated && navigate("/register");
  }, [isAuthenticated]);

  return (
    <>
      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 ${
          toggle && "translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <h1 className="hidden md:block font-bold text-md md:text-xl text-center mb-2">
            <i className="text-cpurple font-mono">CRM</i>
            <i className="fa-solid fa-table text-teal-500 px-2"></i>
          </h1>
          <ul className="space-y-2 font-medium">
            {UpperTabs.map(
              (tab, i) =>
                (tab.role === "both" || (tab.role === "admin" && isAdmin)) && (
                  <li key={i}>
                    <Link
                      to={tab.to}
                      onClick={() => setToggle(!toggle)}
                      className={`${
                        currentTab === tab.to
                          ? "bg-gray-200 dark:bg-gray-700"
                          : ""
                      } flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                    >
                      <tab.svg />
                      <span className="ml-3">{tab.name}</span>
                    </Link>
                  </li>
                )
            )}
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            {LowerTabs.map(
              (tab, i) =>
                (tab.role === "both" ||
                  (tab.role === "auth" && isAuthenticated) ||
                  (tab.role === "unauth" && !isAuthenticated)) && (
                  <li key={i}>
                    <a
                      onClick={tab.to}
                      className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <tab.svg />
                      <span className="ml-3">{tab.name}</span>
                    </a>
                  </li>
                )
            )}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SidebarNew;
