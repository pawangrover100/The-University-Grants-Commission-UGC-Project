import React from "react";
import { FaHome } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { IoVolumeHighSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import Navbar_sub from "./Navbar_sub";

function Narbar() {
  return (
    <>
      <div className="  md:max-w-full h-[4vh] bg-[#3D344B] box-border">
        <nav className="max-w-260 h-[4vh] pb-0.5 mx-auto ">
          <ul className="flex gap-2 ">
            <li className=" h-7.5  border-r-2 border-white hover:border-r-orange-500 place-content-evenly align-middle  ">
              <a href="#" className="flex gap-1.5 px-1  ">
                <FaHome className=" text-[22px] pb-2 mt-px text-orange-400  hover:text-orange-500" />
              </a>
            </li>
            <li className="  h-7.5  border-r border-white  hover:border-r-orange-500 place-content-evenly align-middle ">
              <a href="#" className="flex gap-1.5 px-1  ">
                <FaArrowDown className="text-[15px] mt-1 text-white  hover:text-orange-500" />{" "}
                <h6
                  className="text-[13px]
                 m-0 pr-1 pb-2 font-medium text-white hover:text-orange-500 "
                >
                  Spip to main content
                </h6>
              </a>
            </li>
            <li className="list-none h-7.5  border-r border-white  hover:border-r-orange-500 place-content-evenly align-middle">
              <a href="#" className="flex gap-1.5 px-1  ">
                <FaArrowDown className="text-[15px] mt-1 text-white  hover:text-orange-500" />
                <h6 className="text-[13px] m-0 pr-1 pb-2 font-medium text-white  hover:text-orange-500">
                  Spip to navigation
                </h6>
              </a>
            </li>
            <li className="list-none h-7.5  border-r border-white  hover:border-r-orange-500 place-content-evenly align-middle">
              <a href="#" className="flex gap-1.5 px-1 ">
                <IoVolumeHighSharp className="text-[15px] mt-1 text-white  hover:text-orange-500" />
                <h6 className="text-[13px] m-0 pr-1 pb-2 font-medium text-white  hover:text-orange-500">
                  Screen Recorder
                </h6>
              </a>
            </li>
            <li className="list-none h-7.5  border-r border-white  hover:border-r-orange-500 place-content-evenly align-middle">
              <a href="#" className="flex gap-1.5 px-1  ">
                <h6 className="text-[13px] m-0 pr-2 pb-2 font-medium text-white  hover:text-orange-500 ">
                  Text size A <sup>-</sup> A A <sup>+</sup> Hindi
                </h6>
              </a>
            </li>
            <li className="list-none h-7.5  border-r border-white  hover:border-r-orange-500 place-content-evenly align-middle">
              <a href="#" className="flex gap-1.5 px-1   hover:text-orange-500">
                <h6 className="text-[13px] m-0 pr-1.5 pb-2 font-medium text-white  hover:text-orange-500">
                  Contact Us
                </h6>
              </a>
            </li>
            <li className="list-none h-7.5  border-r border-white  hover:border-r-orange-500 place-content-evenly align-middle">
              <a href="#" className="flex  pr-2  ">
                <h6 className="text-[13px] m-0 pr-1.5 pb-2 font-medium text-white  hover:text-orange-500">
                  FAQs
                </h6>
              </a>
            </li>
            <li className="list-none h-7.5  border-r border-white  hover:border-r-orange-500 place-content-evenly align-middle">
              <a href="#">
                <h6 className="text-[13px] m-0 pr-2 pb-2 font-medium text-white  hover:text-orange-500">
                  e-Procurement
                </h6>
              </a>
            </li>
            <li className="list-none h-7.5  border-r border-white  hover:border-r-orange-500 place-content-evenly align-middle">
              <a href="#" className="flex gap-1.5 px-1  ">
                <h6 className="text-[13px] m-0 pr-1.5 pb-2 font-medium text-white  hover:text-orange-500">
                  Tenders
                </h6>
              </a>
            </li>
            <li className="list-none h-7.5  border-r border-white  hover:border-r-orange-500 place-content-evenly align-middle">
              <a href="#">
                <h6 className="text-[13px] m-0 pr-2 pb-2 font-medium text-white  hover:text-orange-500">
                  Jobs
                </h6>
              </a>
            </li>
            <li className="list-none h-7.5  border-r border-white  hover:text-orange-500 hover:border-r-orange-500place-content-evenly align-middle">
              <a href="#" className="flex gap-1.5 pr-2  pb-2 ">
                <FaSearch className="text-[15px] mt-1 text-white  hover:text-orange-500" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Navbar_sub />
    </>
  );
}

export default Narbar;
