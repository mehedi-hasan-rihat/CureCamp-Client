import React, { useState } from "react";
import { Button } from "@/components/ui/button";
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
import useAuth from "../../hook/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
export default function MyProfile() {
  const { user, isloading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [userData, setuserData] = useState({});
  const { data, refetch } = useQuery({
    queryKey: ["userData"],
    enabled : !!user,
    queryFn: async () => {
      const response = await axiosPublic(`/users/${user?.email}`);
      setuserData(response.data);
      return response.data;
    },
  });
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const response = await axiosPublic.put(`/users/${user?.email}`, data);
    console.log(response.data);
    if(response.data.matchedCount){
        toast.success("updated !!")
        refetch()
    }
  }

  return (
    <div className="min-h-[calc(100vh-420px)]  ">
      <p className="text-2xl font-semibold text-center text-gray-700 mt-10">
        My Profile
      </p>
      {isloading ?  <P>No Data</P> : <div className="relative max-w-2xl  mx-auto mb-10 mt-10 bg-gray-100 p-2 rounded-md">
        <div className="">
          <img
            className="w-full rounded-md h-36 object-fill"
            src={"https://coupon-me.netlify.app/assets/cover_bg-B9fdFLIB.jpg"}
          />
        </div>
        <div className="  h-40  rounded-md">
          <div className="absolute top-28 left-4">
            <img
              className="w-16 h-16 object-cover rounded-full"
              src={userData?.photoURL}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative top-10  px-3">
            <div className="flex justify-between">
              <div className="">
                {" "}
                <p className="font-semibold px-2">
                  Name : <span>{userData?.name}</span>
                </p>
                <p className="font-semibold px-2">
                  Email : <span>{userData?.email}</span>
                </p>
              </div>
              <div className="">
                {" "}
                {userData?.number && (
                  <p className="font-semibold px-2">
                    Number : <span>{userData?.number}</span>
                  </p>
                )}
                {userData?.location && (
                  <p className="font-semibold px-2">
                    Location : <span>{userData?.location}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4 text-end px-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
                    <div className="">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                      {...register("name", { required: true })}
                        id="name"
                        defaultValue="Pedro Duarte"
                        className="mt-1"
                      />
                    </div>
                    <div className=" ">
                      <Label htmlFor="name" className="  text-right">
                        Phine Number
                      </Label>
                      <Input
                       {...register("number", { required: true })}
                        type="number"
                        id="phoneNumber"
                        defaultValue={userData?.number}
                        className="mt-1"
                      />
                    </div>
                    <div className="">
                      <Label className="text-right">Location</Label>
                      <Input
                        id="Location"
                        {...register("location", { required: true })}
                        defaultValue={userData?.location}
                        className="mt-1"
                      />
                    </div>
                    <Button className="text-white" type="submit">Save changes</Button>
                  </form>
                  
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div> }
    </div>
  );
}
