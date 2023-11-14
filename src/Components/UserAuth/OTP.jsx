import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../services/auth";

export default function OTP() {
  const [first, setFirst] = useState("X");
  const [second, setSecond] = useState("X");
  const [third, setThird] = useState("X");
  const [fourth, setFourth] = useState("X");
  const [fifth, setFifth] = useState("X");
  const [Error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  let navigate = useNavigate();

  function verifyOTPHandler() {
    setLoader(true);
    const email = sessionStorage.getItem("email");
    const otp = first + second + third + fourth + fifth; //Will Kick your ass if you don't change this shit
    authApi
      .verifyOTP({ email, otp })
      .then((res) => {
        navigate("/login");
        setLoader(false);
      })
      .catch((error) => {
        // FIXED ---- Can do something to show this msg to user ..
        setError(error.response.data.msg); //Done!
        console.log(error.response.data.msg);
        setLoader(false);
      });
  }

  function clickEvent(first, last) {
    if (first.value.length) {
      document.getElementById(last).focus();
    }
  }
  function HandleChange(number, e) {
    if (number == 0) {
      setFirst(e.value);
    }
    if (number == 1) {
      setSecond(e.value);
    }
    if (number == 2) {
      setThird(e.value);
    }
    if (number == 3) {
      setFourth(e.value);
    }
    if (number == 4) {
      setFifth(e.value);
    }
  }

  const feilds = ["first", "second", "third", "fourth", "fifth"];
  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 bg-blue-500">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold">
                OTP verify - {first + second + third + fourth + fifth}{" "}
              </h1>
              {/* -----Logo------*/}
              <h1 className="hidden md:block font-bold text-md md:text-xl text-center mx-2">
                <i className="text-emerald-600 font-mono">Code</i>
                <i className="text-purple-600 font-mono">Lab</i>{" "}
                <i className="fa-solid fa-laptop-code text-teal-600 "></i>
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              {loader && <div className="Ytloader"></div>}
              <div className="text-red-400">{Error}</div>
              <div className="py-8 flex items-center text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="w-full text-center">
                  {/* ---- OTP Feild ---- */}

                  {feilds.map((data, i) => {
                    return (
                      <input
                        type="text"
                        key={i}
                        id={data}
                        maxLength="1"
                        placeholder="X"
                        onKeyUp={(e) => {
                          if (i + 1 < feilds.length) {
                            clickEvent(e.target, feilds[i + 1]);
                          }
                        }}
                        onChange={(e) => HandleChange(i, e.target)}
                        className="mx-2 h-10 w-[10%] text-center border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      />
                    );
                  })}

                  {/* ----Submit---- */}
                  <div className="relative my-3 text-center">
                    <button
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                      onClick={verifyOTPHandler}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className="my-2 ">
                Already have an account?
                <Link to="/login" className="text-blue-500 mx-2 font-semibold">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
