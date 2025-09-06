import React from "react";
import {
  Search,
  Bell,
  User,
  Users,
  FileText,
  Link,
  Settings,
  Shield,
} from "lucide-react";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Dashboard = () => {
  const dashboardData = {
    header: {
      title: "Dashboard",
      user: {
        name: "John Doe",
      },
    },
    stats: [
      {
        title: "Total Users",
        value: "2,847",
        growth: "+12.5% from last month",
        icon: <User className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />,
        bgColor: "bg-blue-100",
      },
      {
        title: "Active Records",
        value: "1,234",
        growth: "+8.2% from last month",
        icon: (
          <HiOutlineChartBarSquare className="h-5 w-5 text-pink-600 sm:h-6 sm:w-6" />
        ),
        bgColor: "bg-pink-100",
      },

      {
        title: "Documents",
        value: "567",
        growth: "+3.1% from last month",
        icon: <FileText className="h-5 w-5 text-purple-600 sm:h-6 sm:w-6" />,
        bgColor: "bg-purple-100",
      },
      {
        title: "System Health",
        value: "99.9%",
        growth: "+0.1% from last month",
        icon: (
          <IoMdCheckmarkCircleOutline className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />
        ),
        bgColor: "bg-blue-100",
      },
    ],
    recentActivity: [
      {
        action: "New user registration",
        by: "by Alice Johnson",
        time: "2 minutes ago",
      },
      {
        action: "Document uploaded",
        by: "by Bob Smith",
        time: "15 minutes ago",
      },
      {
        action: "Link verified",
        by: "by David Wilson",
        time: "2 hours ago",
      },
      {
        action: "Settings updated",
        by: "by Carol Davis",
        time: "1 hour ago",
      },
    ],
    quickActions: [
      {
        label: "Add User",
        icon: <User className="h-5 w-5 sm:h-6 sm:w-6" />,
        borderColor: "border-blue-400",
        textColor: "text-blue-600",
      },
      {
        label: "Upload Document",
        icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6" />,
        borderColor: "border-green-400",
        textColor: "text-green-600",
      },
      {
        label: "Add Link",
        icon: <Link className="h-5 w-5 sm:h-6 sm:w-6" />,
        borderColor: "border-yellow-400",
        textColor: "text-yellow-600",
      },
      {
        label: "System Settings",
        icon: <Settings className="h-5 w-5 sm:h-6 sm:w-6" />,
        borderColor: "border-pink-400",
        textColor: "text-pink-600",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
      <div className="mx-auto max-w-full space-y-4 sm:space-y-6 md:space-y-8">
        {/* Header Section */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
            {dashboardData.header.title}
          </h1>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            {/* Search Bar */}
            <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm transition-all duration-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 sm:w-64 md:w-72">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* User Section */}
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-gray-600 transition-colors hover:text-gray-800 sm:h-6 sm:w-6" />
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 sm:h-8 sm:w-8">
                <User className="h-3 w-3 text-white sm:h-4 sm:w-4" />
              </div>
              <span className="text-sm font-medium text-gray-700 sm:text-base">
                {dashboardData.header.user.name}
              </span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4 xl:gap-6">
          {dashboardData.stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md sm:p-5 md:p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 space-y-1 sm:space-y-2">
                  <h3 className="text-sm font-medium text-gray-600 sm:text-base">
                    {stat.title}
                  </h3>
                  <p className="text-2xl font-[700] text-gray-900 sm:text-3xl md:text-4xl">
                    {stat.value}
                  </p>
                  <span className="text-xs text-[#15DF02] sm:text-base">
                    {stat.growth}
                  </span>
                </div>
                <div className={`rounded-lg p-2 sm:p-3 ${stat.bgColor}`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-lg font-[700] text-gray-900 sm:text-xl md:text-2xl">
            Recent Activity
          </h2>
          <div className="space-y-0 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            {dashboardData.recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-100 p-4 transition-colors duration-200 last:border-b-0 hover:bg-gray-50 sm:p-5 md:p-6"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 sm:h-10 sm:w-10">
                    <User className="h-4 w-4 text-blue-600 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-[600] text-gray-900 sm:text-base">
                      {activity.action}
                    </div>
                    <div className="text-xs text-gray-600 sm:text-sm">
                      {activity.by}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 sm:text-sm">
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-lg font-[600] text-gray-900 sm:text-xl md:text-2xl">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4 xl:gap-6">
            {dashboardData.quickActions.map((action, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-xl border-2 border-dashed p-4 text-center transition-all duration-200 hover:border-solid hover:bg-gray-50 hover:shadow-sm sm:p-5 md:p-6 ${action.borderColor}`}
              >
                <div className="flex flex-col items-center gap-2 sm:gap-1">
                  <div className={`rounded-lg p-2 ${action.textColor}`}>
                    {action.icon}
                  </div>
                  <span
                    className={`text-sm font-[600] sm:text-base ${action.textColor}`}
                  >
                    {action.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
