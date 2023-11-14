import React from "react";

const Help = () => {
  return (
    <div>
      <h1>Help Section</h1>

      <h2>Dashboard</h2>
      <p>
        The Dashboard is the main page where you can find an overview of system
        activities and important information.
      </p>

      <h2>Login</h2>
      <p>
        To access the system, use the Login feature. Provide your credentials to
        log in as a customer or an admin.
      </p>

      <h2>Register</h2>
      <p>
        If you don't have an account, use the Register option to create a new
        account. You can register as a customer.
      </p>

      <h2>Admin Login</h2>
      <p>
        Use the admin login option to access the system with administrative
        privileges. Admins have additional features.
      </p>

      <h2>Secret Admin Key</h2>
      <p>
        The Secret Admin Key is a unique key used to authenticate admin users.
        Keep this key secure and do not share it.
      </p>

      <h2>Customer List</h2>
      <p>
        The Customer List section displays a list of all registered customers.
        Admins can view and manage customer details here.
      </p>

      <h2>Tickets</h2>
      <p>
        The Tickets section provides an overview of all tickets. Admins can
        manage and update ticket information.
      </p>

      <h2>Add Ticket</h2>
      <p>
        Use the Add Ticket feature to create a new support ticket. Provide
        details about the issue or request assistance.
      </p>

      <h2>Logout</h2>
      <p>
        Logout to securely end your session. Make sure to logout when your tasks
        are complete, especially on shared devices.
      </p>
    </div>
  );
};

export default Help;
