import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
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

import { useQuery } from "@tanstack/react-query";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { RxUpdate } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import UpdateCampain from "../../../component/Admin/UpdateCampain";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import useAxiosSecure from "../../../hook/useAxioxSecure";

export default function ManageCamp() {
  const axiosSecure = useAxiosSecure();
  const [camps, setCamps] = useState([]);
  const [search, setSearch] = useState("");
  const [totalPages, setToatalPages] = useState(null);
  const [currentPages, setCurrentPage] = useState(1);

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["camp", currentPages, search],
    queryFn: async () => {
      const response = await axiosSecure(
        `/campains/${currentPages}?search=${search}`
      );
      setCamps(response.data.result);
      console.log(response.data.result);
      setToatalPages(Math.ceil(response.data.totalData / 10));
      return response.data.result;
    },
  });

  const campDelete = async (id) => {
    const { data: res } = await axiosSecure.delete(`delete-camp/${id}`);
    if (res.deletedCount) {
      refetch();
      toast.success("Data deleted Succesfully");
    }
    console.log(res);
  };
  return (
    <div className="">
      <div className="mb-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 ">
          Manage Camps
        </h1>

        <Input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          className="w-52"
          placeholder="Search"
        />
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <p className="text-lg font-semibold text-gray-500">Loading data...</p>
        </div>
      ) : camps.length === 0 ? (
        <div className="flex justify-center items-center h-96">
          <p className="text-lg font-semibold text-gray-500">
            No data available
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full w-full">
          {" "}
          <ScrollArea className="w-full h-[80vh] whitespace-nowrap rounded-md border">
            <Table className="relative">
              <TableCaption className="mb-5">
                A list of your campains.
              </TableCaption>
              <TableHeader className=" bg-blue-300 sticky top-0 z-10">
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
                    <TableCell className="font-medium">
                      {camp.campName}
                    </TableCell>
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
                              <UpdateCampain camp={camp} />
                            </DialogContent>
                          </Dialog>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Update Campain</p>
                        </TooltipContent>
                      </Tooltip>

                      <AlertDialog>
                        <AlertDialogTrigger>
                        <Tooltip>
                        <TooltipTrigger>
                          <p
                            
                            className="p-2 hover:bg-gray-200/50 hover:scale-105 duration-300 hover:shadow rounded-full"
                          >
                            <MdDeleteForever />
                          </p>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Delete Campain</p>
                        </TooltipContent>
                      </Tooltip>
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
                              onClick={() => {
                                campDelete(camp._id);
                              }}
                            >
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>

                    
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>{" "}
              <TableFooter>
                <TableRow>
                  <TableCell
                    colSpan={5}
                  >{`Showing ${currentPages} of ${totalPages} Pages`}</TableCell>
                  <TableCell className="flex gap-1">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            className={
                              currentPages === 1
                                ? "pointer-events-none cursor-not-allowed opacity-50"
                                : "cursor-pointer"
                            }
                            onClick={() => {
                              setCurrentPage(currentPages - 1);
                            }}
                          />
                        </PaginationItem>

                        <PaginationItem>
                          <PaginationNext
                            className={
                              currentPages === totalPages
                                ? "pointer-events-none cursor-not-allowed opacity-50"
                                : "cursor-pointer"
                            }
                            onClick={() => {
                              setCurrentPage(currentPages + 1);
                            }}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>{" "}
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      )}
    </div>
  );
}
