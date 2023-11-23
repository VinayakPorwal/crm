import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allTickets,
  fetchCustomerTickets,
} from "../../Redux/Features/TicketThunk";
import Modal from "./modal";
import { useParams } from "react-router-dom";
function AllTickets() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.ticket.loading);
  const user = useSelector((state) => state.auth.user);
  const tickets = useSelector((state) => state.ticket.tickets);
  const { id } = useParams();
  const [viewType, setViewType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (user) {
      if (user.role === "admin" && id) {
        // Admin is viewing customer's tickets, fetch all tickets
        dispatch(allTickets());
        setViewType("customer");
      } else if (user.role === "admin" && !id && tickets.length === 0) {
        // Admin is on the main ticket page, fetch all tickets
        dispatch(allTickets());
        setViewType("all");
      } else if (id) {
        // Customer is viewing their tickets
        setViewType("customer");
        console.log(id, viewType);
      } else if (user.role !== "admin" && !id) {
        // Non-admin customer fetching their tickets
        dispatch(fetchCustomerTickets(user.id));
      }
    }
  }, [user, id]);

  // for detecting changes on customerId to customize list
  useEffect(() => {
    !id && setViewType("all");
  }, [id]);

  // Customized tickets to show on page Designed for Admin for less Requests to Database
  function getVisibleTickets() {
    if (viewType === "all") {
      return tickets; // Show all tickets
    } else if (viewType === "customer") {
      return tickets.filter((ticket) => ticket.customerId._id === id);
    }
    return [];
  }
  const visibleTickets = getVisibleTickets();

  useEffect(() => {
    // Clear search results when the original data changes
    setSearchResults([]);
  }, [tickets]);

  // Seach Function
  function handleSearch() {
    const filteredTickets = visibleTickets.filter((ticket) =>
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredTickets);
  }

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between sm:pb-4">
          {/* <div> */}
          {/* <button
              id="dropdownRadioButton"
              data-dropdown-toggle="dropdownRadio"
              className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              <svg
                className="w-3 h-3 text-gray-500 dark:text-gray-400 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
              </svg>
              Last 30 days
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button> */}
          {/* <!-- Dropdown menu --> */}
          {/* <div
              id="dropdownRadio"
              className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              data-popper-reference-hidden=""
              data-popper-escaped=""
              data-popper-placement="top"
              // style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transhtmlForm: translate3d(522.5px, 3847.5px, 0px);"
            >
              <ul
                className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownRadioButton"
              >
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id="filter-radio-example-1"
                      type="radio"
                      value=""
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="filter-radio-example-1"
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Last day
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      checked=""
                      id="filter-radio-example-2"
                      type="radio"
                      value=""
                      name="filter-radio"
                      readOnly
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="filter-radio-example-2"
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Last 7 days
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id="filter-radio-example-3"
                      type="radio"
                      value=""
                      readOnly
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="filter-radio-example-3"
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Last 30 days
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id="filter-radio-example-4"
                      readOnly
                      type="radio"
                      value=""
                      name="filter-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="filter-radio-example-4"
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Last month
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id="filter-radio-example-5"
                      type="radio"
                      value=""
                      name="filter-radio"
                      readOnly
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="filter-radio-example-5"
                      className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Last year
                    </label>
                  </div>
                </li>
              </ul>
            </div> */}
          {/* </div> */}
          <div className="flex">
            {/* <div className="mx-2 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              +
            </div> */}
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <i className="fa fa-search text-gray-900 dark:text-white"></i>
              </div>
              <input
                type="text"
                id="table-search"
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  handleSearch();
                }}
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-[90vw] sm:w-[80vw] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Tickets"
              />
            </div>
          </div>
        </div>
        <div className="max-h-[100vh] overflow-scroll">
          <table className="sm:table hidden w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {/* <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th> */}
                <th scope="col" className="px-6 py-3">
                  Ticket Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Customer Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  status
                </th>
                <th scope="col" className="px-6 py-3">
                  View
                </th>
              </tr>
            </thead>
            <tbody>
              {visibleTickets &&
                (searchResults && searchResults.length > 0
                  ? searchResults
                  : visibleTickets
                ).map((data, i) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={i}
                  >
                    {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td> */}
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {data.title}
                    </th>
                    <td className="px-6 py-4">{data.customerId.name}</td>
                    <td className="px-6 py-4">
                      {new Date(data.initiateDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">{data.status}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <Modal data={data} />
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          {!loading && visibleTickets && visibleTickets.length == 0 && (
            <div className="text-black dark:text-white text-center p-2 m-2">
              No data
            </div>
          )}
          {loading && (
            <div className="text-black dark:text-white text-center p-2 m-2">
              loading...
            </div>
          )}

          <div className="block sm:hidden">
            {visibleTickets &&
              (searchResults && searchResults.length > 0
                ? searchResults
                : visibleTickets
              ).map((data, i) => (
                <div
                  class="my-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                  key={i}
                >
                  <p className="flex justify-between items-center">
                    <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                      {data.title}
                    </h5>
                    {data.status == "Open" ? (
                      <i className="fa-regular fa-envelope-open pl-2 text-xl text-blue-400"></i>
                    ) : (
                      <i className="fa-regular fa-envelope pl-2 text-xl text-green-400"></i>
                    )}
                  </p>
                  <p class="mb-1 font-semibold text-gray-800 dark:text-gray-200">
                    <i className="fa-regular fa-user pr-2 text-lg text-blue-400"></i>{" "}
                    {data.customerId.name}
                  </p>
                  <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
                    Created on:{" "}
                    {new Date(data.initiateDate).toLocaleDateString()}
                  </p>
                  <p class="mb-2 font-normal text-gray-700 dark:text-gray-400">
                    {data.status}
                  </p>
                  <a
                    href="#"
                    class="block py-1 items-center text-center font-medium rounded-lg border-2 border-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    <Modal data={data} />
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllTickets;
