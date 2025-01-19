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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from './PaymentForm'
export default function RegisteredCamps() {
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


  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY)

  return (
    <div className="flex items-center pr-28 justify-center h-full w-full">
      {" "}
      <ScrollArea className="w-full h-[80vh] whitespace-nowrap rounded-md border">
        <Table className="relative">
          <TableCaption className="mb-5">
            A list of Registered campains.
          </TableCaption>
          <TableHeader className=" bg-blue-300 sticky top-0 z-40">
            <TableRow>
              <TableHead className="text-white">Camp Name</TableHead>
              <TableHead className="text-white">Camp Fees</TableHead>
              <TableHead className="text-white">Payment Status</TableHead>
              <TableHead className="text-white">Confirmation Status</TableHead>
              <TableHead className="text-white">Action</TableHead>
              <TableHead className="text-white">Feedback</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {camps.map((camp) => (
              <TableRow key={camp._id}>
                <TableCell>{camp.campName}</TableCell>
                <TableCell>{camp.campFees}</TableCell>
                <TableCell>
                  <div variant="outline" className="w-full">
                    {camp["payment-status"] === "paid" ? (
                      <Dialog>
                        <DialogTrigger className='w-full text-start'>
                          <Button
                            variant="outline"
                            className="w-full lg:w-[60%]"
                          >
                            Pay
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="text-center mb-8"><p>Payment </p></DialogTitle>
                            <div className="">
                              <p className="text-[15px] font-semibold">Camp Name : <span className="font-medium">{camp?.campName}</span></p>
                              <p className="text-[15px] font-semibold">Camp Fees : <span className="font-medium">${camp?.campFees}</span></p>
                              <Elements stripe={stripePromise}>
                                <PaymentForm campId={camp?.campainId}/>
                              </Elements>
                            </div>
                      
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <p className="w-full">Paid</p>
                    )}
                  </div>
                </TableCell>
                <TableCell className="">
                  <p>{camp["confirmation-status"]}</p>
                </TableCell>
                <TableCell className="flex gap-3 text-xl  items-center justify-center">
                  <div variant="outline" className="w-full">
                    {camp["payment-status"] === "paid" ? (
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
                          <p>Payment done, You can't cancle it!</p>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
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
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div variant="outline" className="w-full">
                    {camp["payment-status"] === "paid" ? (
                      <Button variant="outline" className="w-full">
                        {" "}
                        Feedback
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full">
                        {" "}
                        N/A
                      </Button>
                    )}
                  </div>
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