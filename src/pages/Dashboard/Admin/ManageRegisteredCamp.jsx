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
import { MdOutlineCancel } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import toast from "react-hot-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MdOutlineDoneAll } from "react-icons/md";
export default function ManageRegisteredCamp() {
  const axiosPublic = useAxiosPublic();
  const [camps, setCamps] = useState([]);
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["manage-registered-camps"],
    queryFn: async () => {
      const response = await axiosPublic(`/manage-registered-camps`);
      setCamps(response.data);
      return response.data;
    },
  });

  const campDelete = async (id) => {
    const { data: res } = await axiosPublic.delete(`delete-reg-camp/${id}`);
    if (res.deletedCount) {
      refetch();
      toast.success("Data deleted Succesfully");
    }
    console.log(res);
  };

  return (
    <div className="w-full bg-[#F4F9FF] rounded-lg space-y-8">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 ">
        Manage Registered Camps
      </h1>

      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <p className="text-lg font-semibold text-gray-500">Loading data...</p>
        </div>
      ) :camps.length === 0 ? (
        <div className="flex justify-center items-center h-96">
          <p className="text-lg font-semibold text-gray-500">No data available</p>
        </div>
      ) :

      <div className="flex items-center justify-center h-full w-full">
        {" "}
        <ScrollArea className="w-full h-[80vh] whitespace-nowrap rounded-md border">
          <Table className="relative">
            <TableCaption className="mb-5">
              A list of Registered campains.
            </TableCaption>
            <TableHeader className=" bg-blue-300 sticky top-0 z-10">
              <TableRow>
                <TableHead className="text-white">Participant Name</TableHead>
                <TableHead className="text-white">Camp Name</TableHead>
                <TableHead className="text-white">Camp Fees</TableHead>
                <TableHead className="text-white">Payment Status</TableHead>
                <TableHead className="text-white">
                  Confirmation Status
                </TableHead>
                <TableHead className="text-white">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {camps.map((camp) => (
                <TableRow key={camp._id}>
                  <TableCell className="font-medium">
                    {camp.participantName}
                  </TableCell>
                  <TableCell>{camp.campName}</TableCell>
                  <TableCell>{camp.campFees}</TableCell>
                  <TableCell>{camp["payment-status"]}</TableCell>
                  <TableCell className="">
                    <Select
                      onValueChange={async (e) => {
                        const response = await axiosPublic.patch(
                          `/update-confirmation-status/${camp._id}`,
                          { e }
                        );
                        if (response.data.modifiedCount) {
                          refetch();
                          toast.success("Data Update Succesfully");
                        }
                      }}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue
                          placeholder={camp["confirmation-status"]}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Confirmation Status</SelectLabel>
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="Confirmed">Confirmed</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="flex gap-3 text-xl  items-center justify-center">
                    <Tooltip>
                      <TooltipTrigger>
                        <p
                          className={`${
                            camp["payment-status"] === "paid" &&
                            camp["confirmation-status"] === "Confirmed"
                              ? ""
                              : "hidden"
                          }`}
                        >
                          {" "}
                          <MdOutlineDoneAll />
                        </p>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Registration Confirmed, You can't cancle it!</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger>
                        <AlertDialog>
                          <AlertDialogTrigger>
                            {" "}
                            <p
                              className={`${
                                camp["payment-status"] === "paid" &&
                                camp["confirmation-status"] === "Confirmed"
                                  ? "hidden"
                                  : ""
                              }`}
                            >
                              {" "}
                              <MdOutlineCancel />
                            </p>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you absolutely sure?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete This registered camp and
                                remove this data from our servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                className="text-white"
                                onClick={() => campDelete(camp._id)}
                              >
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Cancel Registration</p>
                      </TooltipContent>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>{" "}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>}
    </div>
  );
}
