import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerProfile } from "../../Redux/Features/CustomerThunk";
function CustomerProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.customer.customerProfile);
  const self = useSelector((state) => state.auth.user);
  const { id } = useParams();
  useEffect(() => {
    (user == null || self.role == "admin") &&
      dispatch(fetchCustomerProfile(id));
    console.log(user, self);
  }, [id]);
  return (
    <div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdown"
            className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Export Data
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center pb-10">
          <i className="fa fa-user flex items-center justify-center text-4xl w-24 h-24 mb-3 mx-auto rounded-full shadow-lg"></i>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {user && user.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {user && user.role}
          </span>

          <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
            <div className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Email address
              </dt>
              <dd className="text-lg font-semibold">{user && user.email}</dd>
            </div>
            <div className="flex flex-col py-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Date Joined
              </dt>
              <dd className="text-lg font-semibold">
                {new Date(user && user.token_expiry).toLocaleDateString()}
              </dd>
            </div>
            <div className="flex flex-col pt-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Phone number
              </dt>
              <dd className="text-lg font-semibold">
                +00 123 456 789 / +12 345 678
              </dd>
            </div>
          </dl>

          <div className="flex items-center mt-4 space-x-3 md:mt-6">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              New Ticket
            </a>

            <Link
              to={"/customers/tickets/" + id}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              All Tickets
            </Link>
            {/* <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              Message
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;
