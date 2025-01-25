import React, { useState } from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { ImgURL } from "../../utils/imgUpload";

import toast from "react-hot-toast";
import useAxiosSecure from "../../hook/useAxioxSecure";

export default function UpdateCampain({ camp }) {
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
    startTime,
    endTime,
    _id,
  } = camp || {};

  // console.log(camp);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure()

  const onSubmit = async (data) => {
    const time = data.startTime.concat(" - ", data.endTime);
    const {...rest } = data;
    const campData = {
      ...rest,
      time,
      image,
      participantCount,
    };
    console.log(campData);
   const { data : response} = await axiosSecure.patch(`update-camp/${_id}`,campData)
   console.log(response);
   if(response.modifiedCount){
    toast.success("Data Updated Succesfully")
   }
  };

  return (
    <div className="w-[50vw] overflow-y-auto max-h-[70vh] rounded-md">
      <DialogHeader>
        <DialogTitle className="text-center text-2xl mb-5">
          Update Campain
        </DialogTitle>
      </DialogHeader>
      <div className=" mx-auto p-1 md:p-6 bg-gray-50 shadow-lg rounded-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 "
        >
          {/* Camp Name */}
          <div>
            <label
              htmlFor="campName"
              className="block text-sm font-medium text-gray-700"
            >
              Camp Name
            </label>
            <input
              id="campName"
              type="text"
              defaultValue={campName}
              {...register("campName", { required: "Camp Name is required" })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            {errors.campName && (
              <p className="text-red-500 text-sm">{errors.campName.message}</p>
            )}
          </div>

          {/* Camp Fees */}
          <div>
            <label
              htmlFor="campFees"
              className="block text-sm font-medium text-gray-700"
            >
              Camp Fees
            </label>
            <input
              id="campFees"
              type="number"
              defaultValue={campFees}
              {...register("campFees", {
                required: "Camp Fees are required",
                valueAsNumber: true,
                min: { value: 0, message: "Fees cannot be negative" },
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            {errors.campFees && (
              <p className="text-red-500 text-sm">{errors.campFees.message}</p>
            )}
          </div>

      
          {/* Time Range */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="startTime"
                className="block text-sm font-medium text-gray-700"
              >
                Start Time
              </label>
              <input
                defaultValue={startTime}
                id="startTime"
                type="time"
                {...register("startTime", {
                  required: "Start time is required",
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              {errors.startTime && (
                <p className="text-red-500 text-sm">
                  {errors.startTime.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="endTime"
                className="block text-sm font-medium text-gray-700"
              >
                End Time
              </label>
              <input
                id="endTime"
                type="time"
                defaultValue={endTime}
                {...register("endTime", { required: "End time is required" })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              {errors.endTime && (
                <p className="text-red-500 text-sm">{errors.endTime.message}</p>
              )}
            </div>
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              id="location"
              defaultValue={location}
              type="text"
              {...register("location", { required: "Location is required" })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location.message}</p>
            )}
          </div>

          {/* Healthcare Professional Name */}
          <div>
            <label
              htmlFor="healthcareProfessional"
              className="block text-sm font-medium text-gray-700"
            >
              Healthcare Professional
            </label>
            <input
              id="healthcareProfessional"
              type="text"
              defaultValue={healthcareProfessional}
              {...register("healthcareProfessional", {
                required: "Healthcare Professional Name is required",
              })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            {errors.healthcareProfessional && (
              <p className="text-red-500 text-sm">
                {errors.healthcareProfessional.message}
              </p>
            )}
          </div>
    {/* Date */}
    <div className="col-span-2">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              id="date"
              type="date"
              defaultValue={date}
              {...register("date", { required: "Date is required" })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
            )}
          </div>

          {/* Description */}
          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              defaultValue={description}
              id="description"
              {...register("description", {
                required: "Description is required",
              })}
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
