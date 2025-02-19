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
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hook/useAxioxSecure";

export default function MyProfile() {
  const { user, isloading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [userData, setuserData] = useState({});

  const { data, refetch } = useQuery({
    queryKey: ["userData"],
    enabled: !!user,
    queryFn: async () => {
      const response = await axiosSecure(`/users/${user?.email}`);
      setuserData(response.data);
      return response.data;
    },
  });

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const response = await axiosSecure.put(`/users/${user?.email}`, data);
    if (response.data.matchedCount) {
      toast.success("Profile updated successfully!");
      refetch();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-2xl w-full">
        <p className="text-2xl font-semibold text-center text-gray-800 mb-6">
          My Profile
        </p>

        {isloading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="relative">
            <div className="flex flex-col items-center mb-6">
              <img
                className="w-full h-40 rounded-md object-cover"
                src={"https://coupon-me.netlify.app/assets/cover_bg-B9fdFLIB.jpg"}
                alt="Cover"
              />

              <div className="-mt-12">
                <img
                  className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md"
                  src={user?.photoURL}
                  alt="Profile"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="text-center mb-4">
              <p className="text-lg font-semibold">
                {userData?.name || "Your Name"}
              </p>
              <p className="text-gray-600">{userData?.email}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           
                  <p className="font-semibold text-gray-700">
                    Number: <span className="font-normal">{userData?.number ? userData?.number :  "N/A"}</span>
                  </p>
            
             
                  <p className="font-semibold text-gray-700">
                    Location: <span className="font-normal">{userData?.location ? userData?.location : "N/A"}</span>
                  </p>
         
              </div>

              <div className="mt-6 text-end">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Edit Profile</Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when you’re done.
                      </DialogDescription>
                    </DialogHeader>

                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="grid gap-4 py-4"
                    >
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          {...register("name", { required: true })}
                          id="name"
                          defaultValue={userData?.name}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="number">Phone Number</Label>
                        <Input
                          {...register("number", { required: true })}
                          type="number"
                          id="number"
                          defaultValue={userData?.number}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          {...register("location", { required: true })}
                          defaultValue={userData?.location}
                          className="mt-1"
                        />
                      </div>

                      <Button className="mt-4" type="submit">
                        Save Changes
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
