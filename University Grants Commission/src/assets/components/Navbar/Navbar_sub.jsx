import React from "react";
import ugcLogo from "../../image/ugc_logo (1).png";
import MHRD from "../../image/MHRD_logo.png";
import G20 from "../../image/G20_India_Logo.png";
function Navbar_sub() {
  return (
    <>
      <ul className="list-none flex place-content-around border ">
        <li >
          <a href="#">
            <img src={ugcLogo} alt="Remove in Folder" />
          </a>
        </li>
        <li>
          <ul className="flex">
            <li>
              <a href="">
                <img src={G20} alt="Remove in Folder" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={MHRD} alt="Remove in Folder" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Navbar_sub;
