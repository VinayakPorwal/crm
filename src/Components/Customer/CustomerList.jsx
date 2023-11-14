import React, { useEffect } from "react";
import img from "../../assets/react.svg";
import { Link } from "react-router-dom";
import { fetchCustomerList } from "../../Redux/Features/CustomerThunk";
import { useDispatch, useSelector } from "react-redux";
import ExportToExcelButton from "./ExportToExcel";
function CustomerList() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const List = useSelector((state) => state.customer.customerList);
  useEffect(() => {
    if (user) {
      user.role == "admin" && List.length == 0 && dispatch(fetchCustomerList());
    }
  }, [user]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
          Customer List
        </h2>
        <ExportToExcelButton data={List} filename="customer_data" />
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
      </div>
    </div>
  );
}

export default CustomerList;
