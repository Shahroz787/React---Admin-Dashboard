import React, { useState, useEffect } from "react";
import scrollreveal from "scrollreveal";
import { ResponsiveNav, SidebarContainer } from "./SidebarElements";
import { BsFillChatTextFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import { FcShop } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";
import { GiTwirlCenter } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";
import { MdDeliveryDining, MdSpaceDashboard } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";

const Sidebar = () => {
  const [currentLinks, setCurrentLinks] = useState(1);
  const [navbarState, setNavbarState] = useState(false);

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `.brand,
      .Links>ul>li:nth-of-type(1),
      .Links>ul>li:nth-of-type(2),
      .Links>ul>li:nth-of-type(3),
      .Links>ul>li:nth-of-type(4),
      .Links>ul>li:nth-of-type(5),
      .Links>ul>li:nth-of-type(6),
      .logout
 `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  const showSidebar = () => setNavbarState(false);

  const hideSidebar = (event) => {
    event.stopPropagation();
    setNavbarState(true);
  };

  return (
    <>
      <SidebarContainer>
        <div className="top">
          <div className="brand">
            <FcShop />
            <span>Shahroz Shop</span>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={showSidebar} />
            ) : (
              <GiHamburgerMenu onClick={hideSidebar} />
            )}
          </div>
          <div className="Links">
            <ul>
              <li
                className={currentLinks === 1 ? "active" : ""}
                onClick={() => setCurrentLinks(1)}
              >
                <a href="#">
                  <MdSpaceDashboard />
                  <span> Dashboard</span>
                </a>
              </li>

              <li
                className={currentLinks === 2 ? "active" : ""}
                onClick={() => setCurrentLinks(2)}
              >
                <a href="#">
                  <MdDeliveryDining />
                  <span> Delivery</span>
                </a>
              </li>

              <li
                className={currentLinks === 3 ? "active" : ""}
                onClick={() => setCurrentLinks(3)}
              >
                <a href="#">
                  <FaAddressCard />
                  <span> Payment Details</span>
                </a>
              </li>

              <li
                className={currentLinks === 4 ? "active" : ""}
                onClick={() => setCurrentLinks(4)}
              >
                <a href="#">
                  <GiTwirlCenter />
                  <span> Learning Center</span>
                </a>
              </li>

              <li
                className={currentLinks === 5 ? "active" : ""}
                onClick={() => setCurrentLinks(5)}
              >
                <a href="#">
                  <BsFillChatTextFill />
                  <span> FAQs</span>
                </a>
              </li>

              <li
                className={currentLinks === 6 ? "active" : ""}
                onClick={() => setCurrentLinks(6)}
              >
                <a href="#">
                  <IoSettings />
                  <span> Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="logout">
          <a href="#">
            <FiLogOut />
            <span className="logout"> Logout</span>
          </a>
        </div>
      </SidebarContainer>

      {/* Responsive slidebar area starts from here */}

      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
            <li
              className={currentLinks === 1 ? "active" : ""}
              onClick={() => setCurrentLinks(1)}
            >
              <a href="#">
                <MdSpaceDashboard />
                <span> Dashboard</span>
              </a>
            </li>

            <li
              className={currentLinks === 2 ? "active" : ""}
              onClick={() => setCurrentLinks(2)}
            >
              <a href="#">
                <MdDeliveryDining />
                <span> Delivery</span>
              </a>
            </li>

            <li
              className={currentLinks === 3 ? "active" : ""}
              onClick={() => setCurrentLinks(3)}
            >
              <a href="#">
                <FaAddressCard />
                <span> Payment Details</span>
              </a>
            </li>

            <li
              className={currentLinks === 4 ? "active" : ""}
              onClick={() => setCurrentLinks(4)}
            >
              <a href="#">
                <GiTwirlCenter />
                <span> Learning Center</span>
              </a>
            </li>

            <li
              className={currentLinks === 5 ? "active" : ""}
              onClick={() => setCurrentLinks(5)}
            >
              <a href="#">
                <BsFillChatTextFill />
                <span> FAQs</span>
              </a>
            </li>

            <li
              className={currentLinks === 6 ? "active" : ""}
              onClick={() => setCurrentLinks(6)}
            >
              <a href="#">
                <IoSettings />
                <span> Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </ResponsiveNav>
      {/* Responsive slidebar area ends here */}
    </>
  );
};

export default Sidebar;
