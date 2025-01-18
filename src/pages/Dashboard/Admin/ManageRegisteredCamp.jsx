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
export default function ManageRegisteredCamp() {
  const axiosPublic = useAxiosPublic();
  const [camps, setCamps] = useState([]);
  const { data, refetch } = useQuery({
    queryKey: ["camp"],
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
    <div className="flex items-center pr-28 justify-center h-full w-full">
      {" "}
      <ScrollArea className="w-full h-[80vh] whitespace-nowrap rounded-md border">
        <Table className="relative">
          <TableCaption className="mb-5">
            A list of Registered campains.
          </TableCaption>
          <TableHeader className=" bg-blue-300 sticky top-0 z-50">
            <TableRow>
              <TableHead className="text-white">Participant Name</TableHead>
              <TableHead className="text-white">Camp Name</TableHead>
              <TableHead className="text-white">Camp Fees</TableHead>
              <TableHead className="text-white">Payment Status</TableHead>
              <TableHead className="text-white">Confirmation Status</TableHead>
              <TableHead className="text-white">Cancel</TableHead>
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
                  <Select  onValueChange={async (e)=>{
                    const response = await  axiosPublic.patch(`/update-confirmation-status/${camp._id}`, {e})
                   if(response.data.modifiedCount){
                    toast.success("Data Update Succesfully")
                   }
                  }} >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={camp["confirmation-status"]} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel >Confirmation Status</SelectLabel>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Confirmed">Confirmed</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="flex gap-3 text-xl">
                  <Tooltip>
                    <TooltipTrigger>
                      <AlertDialog>
                        <AlertDialogTrigger>
                          {" "}
                          <MdOutlineCancel />
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently delete This registered camp and remove
                              this data from our servers.
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
    </div>
  );
}
