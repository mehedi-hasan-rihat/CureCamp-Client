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
import { RxUpdate } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import UpdateCampain from "../../../component/Admin/UpdateCampain";
import toast from "react-hot-toast";
export default function ManageCamp() {
  const axiosPublic = useAxiosPublic();
  const [camps, setCamps] = useState([]);
  const { data, refetch } = useQuery({
    queryKey: ["camp"],
    queryFn: async () => {
      console.log(4);
      const response = await axiosPublic(`/campains?search=${""}&sortBy=${""}`);
      setCamps(response.data);
      console.log(response.data);
      return response.data;
    },
  });

  const campDelete = async (id)=>{
    const {data:res} =await axiosPublic.delete(`delete-camp/${id}`)
    if(res.deletedCount){
      refetch()
      toast.success('Data deleted Succesfully')
    }
      console.log(res);
    
  }
  return (
    <div className="flex items-center pr-28 justify-center h-full w-full">
      {" "}
      <ScrollArea className="w-full h-[80vh] whitespace-nowrap rounded-md border">
        <Table className="relative">
          <TableCaption className="mb-5">A list of your campains.</TableCaption>
          <TableHeader className=" bg-blue-300 sticky top-0 z-50">
            <TableRow>
              <TableHead className="text-white">Camp Name</TableHead>
              <TableHead className="text-white">Date</TableHead>
              <TableHead className="text-white">Time</TableHead>
              <TableHead className="text-white"> Location</TableHead>
              <TableHead className="text-white">
                Healthcare Professional
              </TableHead>
              <TableHead className="text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {camps.map((camp) => (
              <TableRow key={camp._id}>
                <TableCell className="font-medium">{camp.campName}</TableCell>
                <TableCell>{camp.date}</TableCell>
                <TableCell>{camp.time}</TableCell>
                <TableCell>{camp.location}</TableCell>
                <TableCell className="">
                  {camp.healthcareProfessional}
                </TableCell>
                <TableCell className="flex gap-3 text-xl">
                  <Tooltip>
                    <TooltipTrigger>
                      <Dialog>
                        <DialogTrigger asChild>
                          <p className="p-2 hover:bg-gray-200/50 hover:scale-105 duration-300 hover:shadow rounded-full">
                            <RxUpdate />
                          </p>
                        </DialogTrigger>
                         <DialogContent className="max-w-fit">
                          <UpdateCampain camp={camp}/>
                         </DialogContent>
                      </Dialog>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Update Campain</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger>
                      <p onClick={()=>{campDelete(camp._id)}} className="p-2 hover:bg-gray-200/50 hover:scale-105 duration-300 hover:shadow rounded-full">
                        <MdDeleteForever />
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete Campain</p>
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
