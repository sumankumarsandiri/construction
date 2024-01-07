import React, { useState } from "react";
import {
  // FaTh,
  FaBars,
  // FaUserAlt,
  // FaRegChartBar,
  // FaCommentAlt,
  // FaShoppingBag,
  // FaThList,
} from "react-icons/fa";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
// import * as RiIcons from "react-icons/ri";
import SubMenu from "./SubMenu";
import { SidebarData } from "./SidebarData";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // const menuItem = [
  //   {
  //     path: "/",
  //     name: "Dashboard",
  //     icon: <FaTh />,
  //   },
  //   {
  //     path: "/about",
  //     name: "Project",
  //     icon: <FaUserAlt />,
  //   },
  //   {
  //     path: "/analytics",
  //     name: "Analytics",
  //     icon: <FaRegChartBar />,
  //   },
  //   {
  //     path: "/comment",
  //     name: "Comment",
  //     icon: <FaCommentAlt />,
  //   },
  //   {
  //     path: "/product",
  //     name: "Product",
  //     icon: <FaShoppingBag />,
  //   },
  //   {
  //     path: "/productList",
  //     name: "Product List",
  //     icon: <FaThList />,
  //   },
  // ];
  // const menuItem = [
  //   {
  //     title: "dashboard",
  //     path: "/",
  //     icon: <AiIcons.AiFillHome />,
  //     iconClosed: <RiIcons.RiArrowDownSFill />,
  //     iconOpened: <RiIcons.RiArrowUpSFill />,

  //     subNav: [
  //       {
  //         title: "Users",
  //         path: "/comonents/home",
  //         icon: <IoIcons.IoIosPaper />,
  //       },
  //       {
  //         title: "Revenue",
  //         path: "/overview/revenue",
  //         icon: <IoIcons.IoIosPaper />,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Reports",
  //     path: "/reports",
  //     icon: <IoIcons.IoIosPaper />,
  //     iconClosed: <RiIcons.RiArrowDownSFill />,
  //     iconOpened: <RiIcons.RiArrowUpSFill />,

  //     subNav: [
  //       {
  //         title: "Reports",
  //         path: "/reports/reports1",
  //         icon: <IoIcons.IoIosPaper />,
  //         cName: "sub-nav",
  //       },
  //       {
  //         title: "Reports 2",
  //         path: "/reports/reports2",
  //         icon: <IoIcons.IoIosPaper />,
  //         cName: "sub-nav",
  //       },
  //       {
  //         title: "Reports 3",
  //         path: "/reports/reports3",
  //         icon: <IoIcons.IoIosPaper />,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Products",
  //     path: "/products",
  //     icon: <FaIcons.FaCartPlus />,
  //   },
  //   {
  //     title: "Team",
  //     path: "/team",
  //     icon: <IoIcons.IoMdPeople />,
  //   },
  //   {
  //     title: "Messages",
  //     path: "/messages",
  //     icon: <FaIcons.FaEnvelopeOpenText />,

  //     iconClosed: <RiIcons.RiArrowDownSFill />,
  //     iconOpened: <RiIcons.RiArrowUpSFill />,

  //     subNav: [
  //       {
  //         title: "Message 1",
  //         path: "/messages/message1",
  //         icon: <IoIcons.IoIosPaper />,
  //       },
  //       {
  //         title: "Message 2",
  //         path: "/messages/message2",
  //         icon: <IoIcons.IoIosPaper />,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Support",
  //     path: "/support",
  //     icon: <IoIcons.IoMdHelpCircle />,
  //   },
  // ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "60px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "60px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
        {SidebarData.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            {/* <div className="icon">{item.icon}</div> */}

            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
