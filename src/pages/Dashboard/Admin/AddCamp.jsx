import React from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { ImgURL } from "../../../utils/imgUpload";
export default function AddCamp() {
  const axiosPublic = useAxiosPublic()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const time = data.startTime.concat(" - ", data.endTime);
    const {image, ...rest } = data;
    const participantCount = 0;
    const imgURL = await ImgURL(data.image[0])
    const campData = {
      ...rest,
      time,
      image:imgURL,
      participantCount,
    };
    console.log(campData);
   const { data : response} = await axiosPublic.post('add-camp',campData)
   if(response.insertedId){
    toast.success("Data Added Succesfully")
   }
  };
  return (
    <div className="flex items-center justify-center h-full px-5">
      <div className=" mx-auto p-6 bg-[#f5faff] shadow rounded-md">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 text-center">
          Camp Registration
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[320px] sm:w-[500px] md:w-[700px] xl:w-[800px] "
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
              {...register("campName", { required: "Camp Name is required" })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            {errors.campName && (
              <p className="text-red-500 text-sm">{errors.campName.message}</p>
            )}
          </div>

          {/* Image */}
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Camp Image
            </label>
            <Input
                    className="text-sm mt-1 cursor-pointer"
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    {...register("image",  {  required: "Required",})}
                  />
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

          {/* Date */}
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              id="date"
              type="date"
              {...register("date", { required: "Date is required" })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
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

         

          {/* Description */}
          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
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
