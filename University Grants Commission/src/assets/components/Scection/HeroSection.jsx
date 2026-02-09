import React from "react";
import { FaHome } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { GrOrganization } from "react-icons/gr";
import { FaPencilAlt } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { ImBook } from "react-icons/im";
import { AiTwotoneBank } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import Carousel from "../Carousel/Carousel";
import AboutDropdwon from "../Dropdwon/AboutDropdwon";

function HeroSection() {
  return (
    <>
      <div className="mas=w-full h-12.75  border-solid bg-orange-500 flex box-border">
        <ul className="list-none flex  justify-center items-center mx-auto ">
          <li>
            <a
              href="#"
              className="flex  justify-center p-3 font-semibold text-white hover:bg-white hover:text-orange-500 "
            >
              <FaHome className="mt-1 text-[17px] pr-0.5" />
              <h6>Home</h6>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex  justify-center p-3 font-semibold text-white hover:bg-white hover:text-orange-500 "
            >
              <IoInformationCircle className="mt-1 text-[17px] pr-0.5" />
              <h6>About us</h6>
              <IoMdArrowDropdown className="mt-1.5 text-[20px] pr-0.5" />
              
            </a>
           
          </li>
          <li>
            <a
              href="#"
              className="flex  justify-center p-3 font-semibold text-white hover:bg-white hover:text-orange-500 "
            >
              <GrOrganization className="mt-1  text-[17px] pr-0.5" />
              <h6>Organization</h6>
              <IoMdArrowDropdown className="mt-1.5 text-[20px] pr-0.5" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex  justify-center p-3 font-semibold text-white hover:bg-white hover:text-orange-500 "
            >
              <FaPencilAlt className="mt-1 text-[17px] pr-0.5" />
              <h6>Key Initiatives</h6>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex  justify-center p-3 font-semibold text-white hover:bg-white hover:text-orange-500 "
            >
              <IoInformationCircle className="mt-1 text-[17px] pr-0.5" />
              <h6>Guidelines</h6>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex  justify-center p-3 font-semibold text-white hover:bg-white hover:text-orange-500 "
            >
              <TfiMenuAlt className="mt-1 text-[17px] pr-0.5" />
              <h6>Regulations</h6>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex  justify-center p-3 font-semibold text-white hover:bg-white hover:text-orange-500 "
            >
              <GrOrganization className="mt-1 text-[17px] pr-0.5" />
              <h6>HEis</h6>
              <IoMdArrowDropdown className="mt-1.5 text-[20px] pr-0.5" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex  justify-center p-3 font-semibold text-white hover:bg-white hover:text-orange-500 "
            >
              <AiTwotoneBank className="mt-1 text-[17px] pr-0.5" />
              <h6>FHEI List</h6>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex  justify-center p-3 font-semibold text-white hover:bg-white hover:text-orange-500 "
            >
              <ImBook className="mt-1 text-[17px] pr-0.5" />
              <h6>e-Publications</h6>
              <IoMdArrowDropdown className="mt-1.5 text-[20px] pr-0.5" />
            </a>
          </li>
        </ul>
      </div>

      <Carousel />
      <marquee
        scrolldelay="200"
        loop="infinite"
        behavior="scroll"
        direction="left"
        scrollamount="10"
        className="text-red-500 font-bold"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione sed
        repellat vel quas explicabo labore saepe. Qui veritatis tenetur
        laudantium accusamus optio officiis nesciunt sequi praesentium odit,
        quibusdam est soluta repudiandae dolorum, itaque, beatae quod ratione
        veniam necessitatibus iusto nam? Consequuntur labore minus nihil
        voluptatibus qui cum totam eaque magnam?
      </marquee>
    </>
  );
}

export default HeroSection;
