import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../Redux/Features/AuthThunk";
// import { Signup } from "../Fetch/Fetch";
import authApi from "../../services/auth";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [secretKey, setSecretKey] = useState("");

  let navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsAdmin(!isAdmin);
    setSecretKey(""); // Clear the secret key when switching between admin and user registration
  };

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const ServerError = useSelector((state) => state.auth.error);

  const handleSignup = () => {
    dispatch(signupUser({ name, email, password, secretKey })) &&
      navigate("/verification");
  };

  // ----- Toggle Passowrd Visibility
  function Passowrd_Visibility(pass, i) {
    var eye = document.querySelector(i);
    var pass = document.getElementById(pass);
    if (pass.type == "password") {
      pass.type = "text";
      eye.classList.remove("fa-eye-slash");
      eye.classList.add("fa-eye");
    } else {
      pass.type = "password";
      eye.classList.add("fa-eye-slash");
      eye.classList.remove("fa-eye");
    }
  }

  // ---To Check both pass and C-pass are equal
  useEffect(() => {
    if (password != confirmPassword && confirmPassword != "")
      setError("Password does not match!");
    else setError("");
  }, [password, confirmPassword]);

  return (
    <div className="min-h-screen bg-blue-500">
      <div className="flex items-center h-screen bg-blue-400">
        <div className="mx-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="space-y-6">
            {/* -----Logo------*/}
            <h1 className="hidden md:block font-bold text-md md:text-xl text-center mx-2">
              <i className="text-emerald-600 font-mono">Code</i>
              <i className="text-purple-600 font-mono">Lab</i>{" "}
              <i className="fa-solid fa-laptop-code text-teal-600 "></i>
            </h1>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign up to our platform
            </h5>
            {loading && <div className="Ytloader"></div>}
            <div className="text-red-400">{ServerError}</div>
            <div className="text-red-400">{Error}</div>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
                type="Email"
                name="email"
                id="email"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="Cpassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                type="password"
                name="Cpassword"
                id="ConfirmPassword"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    checked={isAdmin}
                    onChange={handleCheckboxChange}
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Register as Admin
                </label>
              </div>
            </div>
            {isAdmin && (
              <div>
                <label
                  htmlFor="secretkey"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Admin-Key
                </label>
                <input
                  value={secretKey}
                  onChange={(e) => setSecretKey(e.target.value)}
                  type="password"
                  name="secretkey"
                  id="secretkey"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
            )}
            <button
              onClick={handleSignup}
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create account
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              already have an account?
              <a
                href="#"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                <Link to="/login" className="text-blue-500 mx-2 font-semibold">
                  Login
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
