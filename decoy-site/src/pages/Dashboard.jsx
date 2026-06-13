import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { logAction } from "../utils/logger";

function Dashboard() {
  useEffect(() => {
    logAction("VISITED_DASHBOARD");
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-blue-900">
          Welcome, SUPER ADMIN 👋
        </h1>
        <p className="text-gray-500 mt-1">Last login: Today 09:42 AM</p>

        <div className="mt-6 grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <p className="text-gray-500 text-sm">Total Balance</p>
            <p className="text-3xl font-bold text-green-600">$9,999,999</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <p className="text-gray-500 text-sm">Transactions</p>
            <p className="text-3xl font-bold text-blue-600">1,337</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <p className="text-gray-500 text-sm">Active Users</p>
            <p className="text-3xl font-bold text-purple-600">42</p>
          </div>
        </div>

        <div className="mt-6 bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold text-gray-700 mb-4">
            Recent Activity
          </h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-400 border-b">
                <th className="pb-2">User</th>
                <th className="pb-2">Action</th>
                <th className="pb-2">Amount</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">admin@securebank.com</td>
                <td>Transfer</td>
                <td className="text-green-600">+$50,000</td>
                <td className="text-green-500">Success</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">john.doe@email.com</td>
                <td>Withdrawal</td>
                <td className="text-red-600">-$12,000</td>
                <td className="text-green-500">Success</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">jane.smith@email.com</td>
                <td>Deposit</td>
                <td className="text-green-600">+$99,999</td>
                <td className="text-yellow-500">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;