import React, { useEffect, useState } from "react";
import Container from "../component/sharedComponent/Container";
import { useLoaderData, useParams } from "react-router-dom";
import useAxiosPublic from "../hook/useAxiosPublic";
import { FaUserDoctor } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuth from "../hook/useAuth";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
export default function CampDetails() {
  const { id } = useParams();
  const [camp, setCamp] = useState([]);
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data, refetch } = useQuery({
    queryKey: ["camp", id],
    queryFn: async () => {
      const response = await axiosPublic(`/camp-details/${id}`);
      setCamp(response.data);
      return response.data;
    },
  });
  const {
    campName,
    campFees,
    date,
    healthcareProfessional,
    image,
    participantCount,
    location,
    time,
    description,
    _id,
  } = camp || {};

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (values) => {
    const participantData = {
      ...values,
      campainId: _id,
    };
    const { data } = await axiosPublic.post(
      "/register-campain",
      participantData
    );
    if (data.insertedId) {
      toast.success("Succesfully Registerd the Campain !")
      refetch();
    }
  };

  return (
    <Container>
      <div className="min-h-[90vh] flex items-center my-10 max-w-xl xl:max-w-full mx-auto">
        <div className=" flex flex-col xl:flex-row gap-6  ">
          <div className="group flex-1 relative block h-[400px]">
            <div className="absolute inset-0 bg-blue-300 rounded"></div>

            <img
              src={image}
              className="relative w-full object-cover h-full -translate-x-2 -translate-y-1 rounded -rotate-1"
            ></img>
          </div>

          <div className="flex-1 rounded  flex flex-col gap-5">
            <div className="xl:h-52">
              <div className="z-10 flex-1 text-center text-lg font-semibold mb-5">
                About Our Campain
              </div>

              <p className="text-2xl font-semibold">{campName}</p>
              <div className="flex gap-2 items-center text-[14px] bg-slate-200/80 w-max rounded pl-1 mt-1 font-semibold">
                <FaUserDoctor />
                <p className="pr-3">{healthcareProfessional}</p>
              </div>
              <p className="text-[15px] leading-normal mt-3 font-medium">
                {description}
                {description}
                {description}
                {description}
              </p>
            </div>
            <div className="flex-1">
              <div className="bg-gray-300 w-full h-px"></div>
              <div className="text-sm mt-3">
                <div className="flex justify-between my-1">
                  <p>
                    <span className="font-semibold">Location</span> : {location}
                  </p>
                  <p>
                    <span className="font-semibold">Total Participent</span> :{" "}
                    {participantCount}
                  </p>
                </div>
                <div className="flex justify-between mb-1">
                  <p>
                    <span className="font-semibold">Date</span> : {date}
                  </p>
                  <p>
                    <span className="font-semibold">Time</span> : {time}
                  </p>
                </div>
                <p>
                  <span className="font-semibold">Fees</span> : $ {campFees}
                </p>
                <div className="text-end cursor-pointer">
                  {" "}
                  <button
                    disabled={!user}
                    className="group relative inline-block focus:outline-none focus:ring mt-4 disabled:cursor-not-allowed disabled:bg-gray-50"
                  >
                    <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-primary transition-transform group-hover:translate-x-0 group-hover:translate-y-0 group-disabled:bg-primary/50 opacity-50"></span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <span className="relative inline-block border-2 border-black/60 group-disabled:opacity-70 group-disabled:text-gray-400 px-8 py-3 text-sm font-bold uppercase tracking-widest text-white group-active:text-opacity-75 ">
                          Join Now
                        </span>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[580px] overflow-y-auto max-h-[50vh] rounded-md">
                        <DialogHeader>
                          <DialogTitle>Register Camp</DialogTitle>
                        </DialogHeader>
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className="space-y-4 mx-auto w-full "
                        >
                          <div className="flex  gap-3">
                            {" "}
                            <div className="w-full">
                              <Label htmlFor="campName">Camp Name</Label>
                              <Input
                                id="campName"
                                defaultValue={campName}
                                readOnly
                                className="mt-1"
                              />
                            </div>
                            <div className="w-full">
                              <Label htmlFor="campFees">Camp Fees</Label>
                              <Input
                                id="campFees"
                                defaultValue={campFees}
                                readOnly
                                className="mt-1"
                              />
                            </div>
                          </div>
                          <div className="flex gap-3">
                            {" "}
                            <div className="w-full">
                              <Label htmlFor="participantName">
                                Participant Name
                              </Label>
                              <Input
                                id="participantName"
                                defaultValue={user?.displayName}
                                readOnly
                                className="mt-1"
                              />
                            </div>
                            <div className="w-full">
                              <Label htmlFor="participantEmail">
                                Participant Email
                              </Label>
                              <Input
                                id="participantEmail"
                                defaultValue={user?.email}
                                readOnly
                                {...register("participantEmailName")}
                                className="mt-1"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3">
                            {" "}
                            <div className="w-full">
                              <Label htmlFor="location">Location</Label>
                              <Input
                                id="location"
                                defaultValue={location}
                                readOnly
                                {...register("participantEmail")}
                                className="mt-1"
                              />
                            </div>
                            <div className="w-full">
                              <Label htmlFor="healthcareProfessional">
                                Healthcare Professional Name
                              </Label>
                              <Input
                                id="healthcareProfessional"
                                defaultValue={healthcareProfessional}
                                readOnly
                                className="mt-1"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row  gap-3">
                            {" "}
                            <di className="w-full" v>
                              <Label htmlFor="age">Age</Label>
                              <Input
                                id="age"
                                type="number"
                                {...register("participantAge")}
                                placeholder="Enter your age"
                                className="mt-1"
                              />
                            </di>
                            <div className="w-full">
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input
                                id="phone"
                                type="tel"
                                {...register("participantPhone")}
                                placeholder="Enter your phone number"
                                className="mt-1"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3 items-center">
                            {" "}
                            <div className="w-full">
                              <Label htmlFor="gender">Gender</Label>
                              <select
                                id="gender"
                                {...register("participantGender")}
                                className="mt-1 w-full h-9 border rounded"
                              >
                                <option disabled value="">
                                  Select Gender
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                            <div className="w-full">
                              <Label htmlFor="emergencyContact">
                                Emergency Contact
                              </Label>
                              <Input
                                {...register("participantemergencyContact")}
                                id="emergencyContact"
                                type="tel"
                                placeholder="Enter emergency contact number"
                                className="mt-1"
                              />
                            </div>
                          </div>

                        <DialogTrigger>  <button className="text-white bg-primary px-5 py-2 rounded">
                            Submit
                          </button></DialogTrigger>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
