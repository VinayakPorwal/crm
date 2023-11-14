import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTicket } from "../../Redux/Features/TicketThunk";
function Modal({ data }) {
  // set the modal menu element
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const ServerError = useSelector((state) => state.ticket.error);

  const updateHandler = () => {
    dispatch(
      updateTicket({
        ticketId: data._id,
        newStatus: "Closed on: " + new Date().toLocaleDateString(),
      })
    );
    !ServerError && setToggle(!toggle);
  };

  return (
    <div>
      {/* <!-- Modal toggle --> */}
      <p
        onClick={() => setToggle(!toggle)}
        href="#"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        View
      </p>
      {/* <!-- Main modal --> */}
      {toggle && (
        <div
          id="ModalE1"
          //   tabindex="-1"
          //   aria-hidden="true"
          className="fixed top-0 left-0 right-0 flex items-center backdrop backdrop-blur-sm z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-2xl max-h-full mx-auto ">
            {/* <!-- Modal content --> */}
            <div className="text-red-400">{ServerError}</div>
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {data.title}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setToggle(!toggle)}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {data.description}
                </p>
                {/* <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Admin -{data.adminId.name}
                </p> */}
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="text-black dark:text-white font-bold">
                    Customer-
                  </span>
                  {data.customerId.name}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="text-black dark:text-white font-bold">
                    Customer Email-
                  </span>
                  {data.customerId.email}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="text-black dark:text-white font-bold">
                    Ticket Created On-
                  </span>

                  {new Date(data.initiateDate).toLocaleDateString()}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="text-green-400 font-bold">Status- </span>
                  {data.status}
                </p>
              </div>
              {/* <!-- Modal footer --> */}
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                {data.status == "Open" ? (
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={updateHandler}
                  >
                    End Ticket
                  </button>
                ) : (
                  <button
                    data-modal-hide="default-modal"
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 "
                  >
                    Closed
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
