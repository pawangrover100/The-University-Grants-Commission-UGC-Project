import React from "react";
import { FaHome } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { GrOrganization } from "react-icons/gr";
import { FaPencilAlt } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { ImBook } from "react-icons/im";
import { AiTwotoneBank } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

function HeroSection() {
  return (
    <>
      <div className="mas=w-full h-12.75 border-black border-solid bg-orange-500 flex">
        <ul className="list-none flex border-black justify-center items-center mx-auto ">
          <li>
            <a
              href="#"
              className="flex  justify-center p-2 font-semibold text-white "
            >
              <FaHome className="mt-1 text-[17px] pr-0.5" />
              <h6>Home</h6>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex  justify-center p-2 font-semibold text-white "
            >
              <IoInformationCircle className="mt-1 text-[17px] pr-0.5" />
              <h6>About us</h6>
              <IoMdArrowDropdown className="mt-1.5 text-[20px] pr-0.5" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex  justify-center p-2 font-semibold text-white "
            >
              <GrOrganization className="mt-1  text-[17px] pr-0.5" />
              <h6>Organization</h6>
              <IoMdArrowDropdown className="mt-1.5 text-[20px] pr-0.5" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex  justify-center p-2 font-semibold text-white "
            >
              <FaPencilAlt className="mt-1 text-[17px] pr-0.5" />
              <h6>Key Initiatives</h6>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex  justify-center p-2 font-semibold text-white "
            >
              <IoInformationCircle className="mt-1 text-[17px] pr-0.5" />
              <h6>Guidelines</h6>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex  justify-center p-2 font-semibold text-white "
            >
              <TfiMenuAlt className="mt-1 text-[17px] pr-0.5" />
              <h6>Regulations</h6>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex  justify-center p-2 font-semibold text-white "
            >
              <GrOrganization className="mt-1 text-[17px] pr-0.5" />
              <h6>HEis</h6>
              <IoMdArrowDropdown className="mt-1.5 text-[20px] pr-0.5" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex  justify-center p-2 font-semibold text-white "
            >
              <AiTwotoneBank className="mt-1 text-[17px] pr-0.5" />
              <h6>FHEI List</h6>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex  justify-center p-2 font-semibold text-white"
            >
              <ImBook className="mt-1 text-[17px] pr-0.5" />
              <h6>e-Publications</h6>
              <IoMdArrowDropdown className="mt-1.5 text-[20px] pr-0.5" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HeroSection;
