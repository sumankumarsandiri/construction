import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Dashbord",
    path: "/",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "Project",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "All",
        path: "/AllProject",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Create",
        path: "/ProjectCreate",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Trashed",
        path: "/Trashed",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Product",
    path: "/",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "All",
        path: "/ProductAll",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Create",
        path: "/ProductCreate",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Trashed",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Sell",
    path: "/sell",
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "All",
        path: "/SellAll",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Create",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Trashed",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Purchase",
    path: "/purchase",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Vendor",
    path: "/Vendor",
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
  {
    title: "Employee",
    path: "/employee",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
