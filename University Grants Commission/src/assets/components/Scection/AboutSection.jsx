import React from "react";
import AboutImage from "../../image/AboutImage.jpg";
import AboutSectionButton from "../Button/AboutSectionButton";




function AboutSection() {
  return (
    <>
      <ul>
        <li className="max-w-full mt-5 h-[140px] ">
          <a href="#">
            <img
              src={AboutImage}
              alt="remove in folder"
              width={"1140px"}
              height={"140px"}
              className="m-auto"
            />
          </a>
        </li> 

       <li className="max-w-full mt-[40px]  h-[160px] text-left">
  <a href="#" className="block max-w-[1180px] mx-auto px-4">
    <h1 className="text-[29px] pt text-[#3E4C66] font-bold">
      <span className="text-orange-500">About </span>
      University Grants Commission
    </h1>

    <p className="mt-2 mx-auto text-[#2E2B43] text-[15px] tracking-wide">
      The University Grants Commission (UGC) came into existence on 28th
      December, 1953 and became a statutory Organization of the
      Government of India by an Act of Parliament in 1956, for the
      coordination, determination and maintenance of standards of
      teaching, examination and research in university education. 
    </p>
  
  </a>

</li>

<li className="...">
  <div className="block max-w-[1180px] mx-auto px-4">
   
    <AboutSectionButton />
  </div>
</li>


      </ul>
    </>
  );
}

export default AboutSection;
