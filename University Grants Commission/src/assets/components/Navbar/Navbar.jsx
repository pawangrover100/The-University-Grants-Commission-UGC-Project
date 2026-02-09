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
      <div className="  md:max-w-full h-[4vh] bg-[#3D344B]">
        <nav className="max-w-260 h-[4vh] pb-0.5 mx-auto ">
          <ul className="flex gap-2 ">
            <li className=" h-7.5  border-r-2 border-white  place-content-evenly align-middle  ">
              <a href="#" className="flex gap-1.5 px-1  ">
                <FaHome className=" text-[22px] pb-2 hover:text-[24px] text-orange-400 " />
              </a>
            </li>
            <li className="  h-7.5  border-r border-white place-content-evenly align-middle ">
              <a href="#" className="flex gap-1.5 px-1  ">
                <FaArrowDown className="text-[15px] mt-1 text-white " />{" "}
                <h6
                  className="text-[13px]
                 m-0 pr-1 pb-2 font-medium text-white  "
                >
                  Spip to main content
                </h6>
              </a>
            </li>
            <li className="list-none h-7.5  border-r border-white place-content-evenly align-middle">
              <a href="#" className="flex gap-1.5 px-1  ">
                <FaArrowDown className="text-[15px] mt-1 text-white" />
                <h6 className="text-[13px] m-0 pr-1 pb-2 font-medium text-white ">
                  Spip to navigation
                </h6>
              </a>
            </li>
            <li className="list-none h-7.5  border-r border-white place-content-evenly align-middle">
              <a href="#" className="flex gap-1.5 px-1  ">
                <IoVolumeHighSharp className="text-[15px] mt-1 text-white" />
                <h6 className="text-[13px] m-0 pr-1 pb-2 font-medium text-white ">
                  Screen Recorder
                </h6>
              </a>
            </li>
            <li className="list-none h-7.5  border-r border-white place-content-evenly align-middle">
              <a href="#" className="flex gap-1.5 px-1  ">
                <h6 className="text-[13px] m-0 pr-2 pb-2 font-medium text-white  ">
                  Text size A <sup>-</sup> A A <sup>+</sup> Hindi
                </h6>
              </a>
            </li>
            <li className="list-none h-7.5  border-r border-white place-content-evenly align-middle">
              <a href="#" className="flex gap-1.5 px-1  ">
                <h6 className="text-[13px] m-0 pr-1.5 pb-2 font-medium text-white  ">
                  Contact Us
                </h6>
              </a>
            </li>
            <li className="list-none h-7.5  border-r border-white place-content-evenly align-middle">
              <a href="#" className="flex  pr-2  ">
                <h6 className="text-[13px] m-0 pr-1.5 pb-2 font-medium text-white  ">
                  FAQs
                </h6>
              </a>
            </li>
            <li className="list-none h-7.5  border-r border-white place-content-evenly align-middle">
              <a href="#">
                <h6 className="text-[13px] m-0 pr-2 pb-2 font-medium text-white ">
                  e-Procurement
                </h6>
              </a>
            </li>
            <li className="list-none h-7.5  border-r border-white place-content-evenly align-middle">
              <a href="#" className="flex gap-1.5 px-1  ">
                <h6 className="text-[13px] m-0 pr-1.5 pb-2 font-medium text-white  ">
                  Tenders
                </h6>
              </a>
            </li>
            <li className="list-none h-7.5  border-r border-white place-content-evenly align-middle">
              <a href="#">
                <h6 className="text-[13px] m-0 pr-2 pb-2 font-medium text-white  ">
                  Jobs
                </h6>
              </a>
            </li>
            <li className="list-none h-7.5  border-r border-white place-content-evenly align-middle">
              <a href="#" className="flex gap-1.5 pr-2  pb-2 ">
                <FaSearch className="text-[15px] mt-1 text-white" />
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
