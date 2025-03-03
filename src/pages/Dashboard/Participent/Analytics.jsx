// import React, { useState } from 'react';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';
// import {
//   AreaChart,
//   Area,
// } from 'recharts';
// import { useQuery } from '@tanstack/react-query';
// import useAuth from '../../../hook/useAuth';
// import useAxiosSecure from '../../../hook/useAxioxSecure';

// const CampAnalyticsCharts = () => {
//   const axiosSecure = useAxiosSecure();
//   const { user } = useAuth();
//   const [campData, setCampData] = useState([]);
// console.log(user);
//   const { isLoading } = useQuery({
//     queryKey: ['analytics-registered-camps', user],
//     enabled: !!user,
//     queryFn: async () => {
//       const response = await axiosSecure(`/analytics-registered-camps/${user?.email}`);
//       setCampData(response.data);
//       return response.data;
//     },
//   });

//   return (
//     <div className="w-full p-4 sm:p-6 bg-[#F4F9FF] rounded-lg space-y-8">
//       <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 ">
//         Medical Camp Analytics
//       </h1>

//       {isLoading ? (
//         <div className="flex justify-center items-center h-96">
//           <p className="text-lg font-semibold text-gray-500">Loading data...</p>
//         </div>
//       ) : campData.length === 0 ? (
//         <div className="flex justify-center items-center h-96">
//           <p className="text-lg font-semibold text-gray-500">No data available</p>
//         </div>
//       ) : (
//         <>
//           {/* Chart 1 */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-center">
//               Camp Fees and Participants
//             </h2>
//             <div className="w-full h-64 sm:h-96">
//               <ResponsiveContainer>
//                 <BarChart
//                   data={campData}
//                   margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
//                   aria-label="Camp Fees and Participants Chart"
//                 >
//                   <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
//                   <XAxis
//                     dataKey="campName"
//                     tick={{ fontSize: 10, fill: '#4B5563' }}
//                     tickLine={false}
//                   />
//                   <YAxis
//                     tick={{ fontSize: 10, fill: '#4B5563' }}
//                     tickLine={false}
//                     axisLine={{ stroke: '#E5E7EB' }}
//                   />
//                   <Tooltip
//                     contentStyle={{
//                       backgroundColor: '#FFFFFF',
//                       borderRadius: 8,
//                       boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//                     }}
//                   />
//                   <Legend
//                     verticalAlign="top"
//                     height={36}
//                     iconType="circle"
//                     wrapperStyle={{ fontSize: '12px' }}
//                   />
//                   <Bar
//                     dataKey="campFees"
//                     fill="#6366F1"
//                     name="Camp Fees ($)"
//                     radius={[10, 10, 0, 0]}
//                     ba
//                     className="transition-all duration-300 hover:fill-[#4F46E5]"
//                   />
//                   <Bar
//                     dataKey="participantCount"
//                     fill="#34D399"
//                     name="Participants"
//                     radius={[10, 10, 0, 0]}
//                     className="transition-all duration-300 hover:fill-[#10B981]"
//                   />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//             {/* Area Chart 2 */}
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 text-center">
//               Camp Dates and Fees
//             </h2>
//             <div className="w-full h-64 sm:h-96">
//               <ResponsiveContainer>
//                 <AreaChart
//                   data={campData}
//                   margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
//                   aria-label="Camp Dates and Fees Area Chart"
//                 >
//                   <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
//                   <XAxis
//                     dataKey="campDate"
//                     tick={{ fontSize: 10, fill: '#4B5563' }}
//                     tickLine={false}
//                   />
//                   <YAxis
//                     tick={{ fontSize: 10, fill: '#4B5563' }}
//                     tickLine={false}
//                     axisLine={{ stroke: '#E5E7EB' }}
//                   />
//                   <Tooltip
//                     contentStyle={{
//                       backgroundColor: '#FFFFFF',
//                       borderRadius: 8,
//                       boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//                     }}
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="campFees"
//                     fill="#6366F1"
//                     stroke="#6366F1"
//                     name="Camp Fees ($)"
//                     fillOpacity={0.4}
//                   />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CampAnalyticsCharts;



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
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
        Medical Camp Analytics
      </h1>
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <p className="text-lg font-semibold text-gray-500">Loading data...</p>
        </div>
      ) : campData.length === 0 ? (
        <div className="flex justify-center items-center h-96">
          <p className="text-lg font-semibold text-gray-500">No data available</p>
        </div>
      ) : (
        <>
          {/* Bar Chart - Camp Fees and Participants */}
          <div className="bg-white rounded-lg shadow-md pr-2 py-5">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 p-6">
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
          <div className="bg-white rounded-lg shadow-md pr-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 p-6">
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
