import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hook/useAxiosPublic";
import Container from "../sharedComponent/Container";
import CampCard from "./CampCard";
import AlternativeColum from "./AlternativeColum";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TfiLayoutColumn3 } from "react-icons/tfi";
import { GoColumns } from "react-icons/go";
export default function AvailableCampsPage() {
  const [camps, setCamps] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [isTwoColumn, setIsTwoColumn] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    axiosPublic(`/campains?search=${search}&sortBy=${sort}`)
      .then((res) => {
        setCamps(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sort, search]);

  return (
    <Container>
      <div className=" flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-5 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-semibold secondary-font">
            Explore Our Camps
            </h3>
            <p className="mt-px md:mt-2 text-xs md:text-base font-medium ">
            From serene landscapes to action-packed adventures, discover what makes each Medi Camp unique. Dive into stories of joy, relaxation, and unforgettable moments shared by our campers. Find the perfect camp for your magical getaway!
            </p>
          </div>

      <div className="flex justify-between gap-2 my-2">
        <form className="flex gap-2">
          <Input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="Search"
            className="flex-1"
          />

          <Select
            onValueChange={(e) => {
              setSort(e);
            }}
          >
            <SelectTrigger className="w-[150px] md:w-[180px] ring-0 focus:ring-0">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Registerd_Member">
                  Most Registerd Member
                </SelectItem>
                <SelectItem value="Camp_Fees">Camp Fees</SelectItem>
                <SelectItem value="Camp_Name">Camp Name</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </form>
        <div className="">
          <button
            onClick={() => setIsTwoColumn(!isTwoColumn)}
            className="mb-4 hidden md:block px-6 py-2 bg-blue-500 text-white font-semibold rounded-sm adow hover:bg-blue-600 transition duration-300"
          >
            {isTwoColumn ? "Switch to Three Columns" : "Switch to Two Columns"}
          </button>

          <button
            onClick={() => setIsTwoColumn(!isTwoColumn)}
            className="mb-4 md:hidden block px-6 pt-3 pb-2 bg-primary/80 text-white font-bold rounded-sm shadow hover:bg-blue-600 transition duration-300"
          >
            {isTwoColumn ? <TfiLayoutColumn3/> : <GoColumns/>}
          </button>
        </div>
      </div>

      <div
        className={`grid-cols-1 xl:grid-cols-2  gap-7 ${
          isTwoColumn ? "grid" : "hidden"
        }`}
      >
        {camps?.map((camp) => (
          <AlternativeColum key={camp?._id} camp={camp} />
        ))}
      </div>

      <div
        className={` ${
          !isTwoColumn ? "grid" : "hidden"
        } grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-7 `}
      >
        {camps?.map((camp) => (
          <CampCard key={camp?._id} camp={camp} />
        ))}
      </div>
    </Container>
  );
}
