import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import useAuth from "../../../hook/useAuth";
export default function PaymentHistory() {
  const {user} = useAuth()
  const axiosPublic = useAxiosPublic();
  const [paymentHistory, setPaymentHistory] = useState([]);
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["pament-history"],
    enabled : !!user,
    queryFn: async () => {
      const response = await axiosPublic(`/payments/${user?.email}`);
      setPaymentHistory(response.data);
      return response.data;
    },
  });


  return (
    <div className="w-full bg-[#F4F9FF] rounded-lg space-y-8">
    <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 ">
      Manage Registered Camps
    </h1>

    {isLoading ? (
      <div className="flex justify-center items-center h-96">
        <p className="text-lg font-semibold text-gray-500">Loading data...</p>
      </div>
    ) :paymentHistory.length === 0 ? (
      <div className="flex justify-center items-center h-96">
        <p className="text-lg font-semibold text-gray-500">No data available</p>
      </div>
    ) :

    
    <div className="flex items-center justify-center h-full w-full">
      {" "}
      <ScrollArea className="w-full max--[80vh] whitespace-nowrap rounded-md border">
        <Table className="relative">
          <TableCaption className="mb-5">
            A list of Registered campains.
          </TableCaption>
          <TableHeader className=" bg-blue-300 sticky top-0 z-10">
            <TableRow>
              <TableHead className="text-white">Camp Name</TableHead>
              <TableHead className="text-white">Camp Fees</TableHead>
              <TableHead className="text-white">Payment Status</TableHead>
              <TableHead className="text-white">Confirmation Status</TableHead>
              <TableHead className="text-white">Transaction id</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paymentHistory.map((paymentHistory) => (
              <TableRow key={paymentHistory._id}>
                <TableCell>{paymentHistory.campName}</TableCell>
                <TableCell>{paymentHistory.campFees}</TableCell>
                <TableCell>{paymentHistory["payment-status"]}</TableCell>
                <TableCell>{paymentHistory["confirmation-status"]}</TableCell>
                <TableCell>{paymentHistory.tnxId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>{" "}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>}</div>
  );
}
