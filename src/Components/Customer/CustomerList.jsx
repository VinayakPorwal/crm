import React, { useEffect } from "react";
import img from "../../assets/react.svg";
import { Svgs } from "../Sidebar/svgFile";
import { Link } from "react-router-dom";
import { fetchCustomerList } from "../../Redux/Features/CustomerThunk";
import { useDispatch, useSelector } from "react-redux";
import ExportToExcelButton from "./ExportToExcel";
function CustomerList() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.customer.loading);
  const List = useSelector((state) => state.customer.customerList);
  useEffect(() => {
    if (user) {
      user.role == "admin" && List.length == 0 && dispatch(fetchCustomerList());
    }
  }, [user]);
  return (
    <div>
      <div className="flex justify-between items-center sm:my-2">
        <h2 className="text-xl sm:text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
          Customer List
        </h2>
        <ExportToExcelButton data={List} filename="customer_data" />
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="hidden sm:table w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Customer name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Number
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="">View Profile</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="">View Profile</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {List.map((data, i) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={i}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.name}
                </th>
                <td className="px-6 py-4">{data.email}</td>
                <td className="px-6 py-4">
                  {new Date(data.token_expiry).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">+91 123456789</td>
                <td className="px-6 py-4">
                  <Link
                    to={"/customers/tickets/" + data._id}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Tickets
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={"/customers/profile/" + data._id}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Profile
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading && (
          <div className="text-black dark:text-white text-center p-2 m-2">
            loading...
          </div>
        )}
        <div className="block sm:hidden">
          {List.map((data, i) => (
            <div
              class="my-4 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={i}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.name}
                  </h5>
                  <p class="mb-2 text-md font-normal text-gray-700 dark:text-gray-400">
                    {data.email}
                  </p>
                  <p class="mb-1 text-sm font-normal text-gray-700 dark:text-gray-400">
                    Joined on:{" "}
                    {new Date(data.token_expiry).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-center">
                  <Link to={"/customers/profile/" + data._id} className="">
                    <i className="fa-solid fa-user px-2 text-lg text-gray-500 dark:text-gray-400"></i>
                    <p className="text-xs text-blue-400">Profile</p>
                  </Link>
                  <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  <Link
                    to={"/customers/tickets/" + data._id}
                    className="flex flex-col items-center"
                  >
                    <Svgs.TicketsSvg className="px-2 text-lg text-blue-400" />
                    <p className="text-xs text-blue-400">Tickets</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerList;
