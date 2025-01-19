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
  const [participants, setparticipants] = useState([]);
  const { data, refetch } = useQuery({
    queryKey: ["participant"],
    enabled : !!user,
    queryFn: async () => {
      const response = await axiosPublic(`/payments/${user?.email}`);
      setparticipants(response.data);
      return response.data;
    },
  });


  return (
    <div className="flex items-center justify-center h-full w-full">
      {" "}
      <ScrollArea className="w-full h-[80vh] whitespace-nowrap rounded-md border">
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
              <TableHead className="text-white">transaction id</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {participants.map((participant) => (
              <TableRow key={participant._id}>
                <TableCell>{participant.campName}</TableCell>
                <TableCell>{participant.campFees}</TableCell>
                <TableCell>{participant["payment-status"]}</TableCell>
                <TableCell>{participant["confirmation-status"]}</TableCell>
                <TableCell>{participant.tnxId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>{" "}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
