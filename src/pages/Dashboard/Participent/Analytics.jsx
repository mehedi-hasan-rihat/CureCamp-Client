import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hook/useAuth';
import useAxiosSecure from '../../../hook/useAxioxSecure';

const CampAnalyticsCharts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [campData, setCampData] = useState([]);

  const { isLoading } = useQuery({
    queryKey: ['analytics-registered-camps', user],
    enabled: !!user,
    queryFn: async () => {
      const response = await axiosSecure(`/analytics-registered-camps/${user?.email}`);
      setCampData(response.data);
      return response.data;
    },
  });

  return (
    <div className="w-full p-4 sm:p-6 bg-[#F4F9FF] rounded-lg space-y-8">
      <h1 className="mb-6 text-xl font-bold text-gray-800 sm:text-2xl">
        Medical Camp Analytics
      </h1>
      {isLoading ? (
        <div className="flex items-center justify-center h-96">
          <p className="text-lg font-semibold text-gray-500">Loading data...</p>
        </div>
      ) : campData.length === 0 ? (
        <div className="flex items-center justify-center h-96">
          <p className="text-lg font-semibold text-gray-500">No data available</p>
        </div>
      ) : (
        <>
          {/* Bar Chart - Camp Fees and Participants */}
          <div className="py-5 pr-2 bg-white rounded-lg shadow-md">
            <h2 className="p-6 mb-4 text-xl font-semibold text-gray-900">
              Camp Fees and Participants
            </h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={campData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="campName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="campFees" fill="#4B89A1" barSize={30} name="Camp Fees ($)" />
                <Bar dataKey="participantCount" fill="#34D399" barSize={30} name="Participants" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Area Chart - Camp Dates and Fees */}
          <div className="pr-2 bg-white rounded-lg shadow-md">
            <h2 className="p-6 mb-4 text-xl font-semibold text-gray-900">
              Camp Dates and Fees
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={campData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="campDate" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="campFees" fill="#4B89A1" stroke="#4B89A1" fillOpacity={0.4} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default CampAnalyticsCharts;
