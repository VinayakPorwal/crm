import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTicket } from "../../Redux/Features/TicketThunk";
// import { Signup } from "../Fetch/Fetch";

export default function AddTicket() {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [email, setEmail] = useState("");
  const [added, setAdded] = useState(false);
  const [error, setError] = useState("");
  const user = useSelector((state) => state.auth.user);

  let navigate = useNavigate();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const ServerError = useSelector((state) => state.ticket.error);

  const createTicket = () => {
    if (title == "") setError("Title can't be Empty.");
    else if (description == "") setError("Description can't be Empty.");
    else if (email == "") setError("Email can't be Empty.");
    else {
      dispatch(
        addTicket({
          title,
          description,
          email,
          customerId: user.role == "customer" ? user.id : "",
          customerEmail: email,
        })
      );
      setAdded(true);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex items-center h-screen ">
        <div className="mx-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          {!added && (
            <div className="space-y-6">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                New Ticket
              </h5>
              {loading && <div className="Ytloader"></div>}
              {error && <div className="text-red-300">{error}</div>}
              <div className="text-red-400">{ServerError}</div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description{" "}
                </label>

                <textarea
                  id="message"
                  rows="4"
                  value={description}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                  required
                ></textarea>
              </div>
              <div>
                {user && user.role == "admin" ? (
                  <>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Customer Email
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
                  </>
                ) : (
                  <>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Admin Email (optional)
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="Email"
                      name="email"
                      id="email"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                  </>
                )}
              </div>

              <button
                onClick={createTicket}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Ticket
              </button>
            </div>
          )}
          {added && !ServerError && (
            <>
              <div className="success">Created!</div>
              <div
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                onClick={() => setAdded(!added)}
              >
                Create More
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
