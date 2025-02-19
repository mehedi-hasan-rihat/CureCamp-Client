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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog_2";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useQuery } from "@tanstack/react-query";
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

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { VscFeedback } from "react-icons/vsc";
import { Button } from "@/components/ui/button";
import { MdOutlineDoneAll } from "react-icons/md";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../pages/Dashboard/Participent/PaymentForm";

import ReactStars from "react-rating-stars-component";
import { DialogClose } from "@radix-ui/react-dialog";
import useAuth from "../hook/useAuth";
import useAxiosSecure from "../hook/useAxioxSecure";
import Container from "../component/sharedComponent/Container";
export default function RegisteredCamps() {
  const { user } = useAuth();
  const [rating, setRating] = useState(0);

  const [totalPages, setToatalPages] = useState(null);
  const [currentPages, setCurrentPage] = useState(1);

  const axiosSecure = useAxiosSecure();
  const [camps, setCamps] = useState([]);
  const [search, setSearch] = useState("");
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["camp", currentPages, search],
    enabled: !!user,
    queryFn: async () => {
      const response = await axiosSecure(
        `/registered-camps/${user?.email}?page=${currentPages}&search=${search}`
      );
      setCamps(response.data.result);
      console.log(
        response.data.result,
        Math.ceil(response.data.totalData / 10)
      );
      setToatalPages(Math.ceil(response.data.totalData / 10));
      return response.data.result;
    },
  });
  console.log(camps);
  const campDelete = async (id) => {
    const { data: res } = await axiosSecure.delete(`delete-reg-camp/${id}`);
    if (res.deletedCount) {
      refetch();
      toast.success("Data deleted Succesfully");
    }
    console.log(res);
  };

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [processing, setProcessing] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.review.value, rating);
    const { data } = await axiosSecure.post("/reviews", {
      name: user?.displayName,
      profile_image: user?.photoURL,
      email: user?.email,
      review: e.target.review.value,
      rating: rating,
    });
    if (data.insertedId) {
      toast.success("Thank You for your valueable time!");
    }
  };
  return (
   <Container> <div className="w-full my-10 bg-[#F4F9FF] rounded-lg space-y-8">
   <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 ">
     Registered Camps
   </h1>
   <Input
     onChange={(e) => {
       setSearch(e.target.value);
     }}
     type="text"
     className="w-52"
     placeholder="Search"
   />
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
       <ScrollArea className="w-full h-[80vh]  rounded-md border">
         <Table className="relative">
           <TableCaption className="mb-5">
             A list of Registered campains.
           </TableCaption>
           <TableHeader className=" bg-blue-300 sticky top-0 z-10">
             <TableRow>
               <TableHead className="text-white">Camp Name</TableHead>
               <TableHead className="text-white">Camp Fees</TableHead>
               <TableHead className="text-white">Payment Status</TableHead>
               <TableHead className="text-white">
                 Confirmation Status
               </TableHead>
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
                     {camp?.campFees === 0 ? (
                       <p>Free</p>
                     ) : camp["payment-status"] === "unpaid" ? (
                       <Dialog open={isOpen}>
                         <DialogTrigger className="w-full text-start">
                           <Button
                             onClick={() => {
                               setIsOpen(true);
                             }}
                             variant="outline"
                             className="w-full lg:w-[60%]"
                           >
                             Pay
                           </Button>
                         </DialogTrigger>
                         <DialogContent>
                           <DialogHeader>
                             <DialogTitle className="text-center mb-8">
                               <p>Payment </p>
                             </DialogTitle>
                             <div className="">
                               <p className="text-[15px] font-semibold">
                                 Camp Name :{" "}
                                 <span className="font-medium">
                                   {camp?.campName}
                                 </span>
                               </p>
                               <p className="text-[15px] font-semibold">
                                 Camp Fees :{" "}
                                 <span className="font-medium">
                                   ${camp?.campFees}
                                 </span>
                               </p>
                               <Elements stripe={stripePromise}>
                                 <PaymentForm
                                   camp={camp}
                                   setIsOpen={setIsOpen}
                                   refetch={refetch}
                                 />
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
                           <p>
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
                               <p>
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
                                   permanently delete This registered camp
                                   and remove this data from our servers.
                                 </AlertDialogDescription>
                               </AlertDialogHeader>
                               <AlertDialogFooter>
                                 <AlertDialogCancel>
                                   Cancel
                                 </AlertDialogCancel>
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
                     {camp["payment-status"] === "paid" &&
                     camp["confirmation-status"] === "Confirmed" ? (
                       <Dialog>
                         <DialogTrigger className="w-full text-start">
                           <Button variant="outline" className="w-full">
                             {" "}
                             Feedback
                           </Button>
                         </DialogTrigger>
                         <DialogContent>
                           <DialogHeader>
                             <DialogTitle className="">
                               <div className="flex gap-2">
                                 {" "}
                                 <VscFeedback className="" /> Feedback
                               </div>
                             </DialogTitle>
                             <div className="pt-5">
                               <div className="">
                                 <h2 className="text-xl font-semibold">
                                   How are you felling?
                                 </h2>
                                 <p className="text-base leading-tight mt-1 font-medium">
                                   Your feedback helps us improve and serve
                                   you better. Please share your experience
                                   with us.
                                 </p>
                               </div>

                               <div className="mt-5">
                                 <div className="">
                                   <h3 className="text-md font-semibold">
                                     Rate Your Experience
                                   </h3>
                                   <ReactStars
                                     classNames={"-mt-4"}
                                     count={5}
                                     onChange={handleRatingChange}
                                     size={40}
                                     activeColor="#ffd700"
                                   />
                                 </div>
                                 <form
                                   onSubmit={onSubmit}
                                   className="grid w-full gap-2"
                                 >
                                   <Textarea
                                     name="review"
                                     className="max-h-32"
                                     placeholder="Type your message here."
                                   />
                                   <DialogClose className="">
                                     {" "}
                                     <Button className="bg-primary/80 w-full text-white">
                                       Send message
                                     </Button>
                                   </DialogClose>
                                 </form>
                               </div>
                             </div>
                           </DialogHeader>
                         </DialogContent>
                       </Dialog>
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
         </Table>
         <ScrollBar orientation="horizontal" />
       </ScrollArea>
     </div>
   )}
 </div></Container>
  );
}
