import React from 'react';
import {
  FaBars,
  FaHome,
  FaList,
  FaHouseUser,
  FaUserTag,
  FaUtensils,
  FaHotTub,
  FaAngleDoubleUp,
} from 'react-icons/fa';
import { MdDragIndicator } from 'react-icons/md';
import { IoAdd, IoBagAdd } from 'react-icons/io5';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
import useAdmin from '../../hooks/useAdmin/useAdmin';
import { Helmet } from 'react-helmet-async';
import { MdPets } from 'react-icons/md';
const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  isAdmin;
  return (
    <div className="">
      <Helmet>
        <title>Pet-haven || Dashboard</title>
      </Helmet>
      <div className="lg:flex  ">
        {/* links */}
        <div className=" w-96 min-h-screen shadow-2xl">
          <div className="py-6 text-center bg-blue-gray-600 font-semibold text-2xl text-white">
            Dashbord
          </div>
          <ul className="menu px-4 leading-10 mt-5">
            {isAdmin ? (
              <>
                {/* admin */}
                <div className="border-b-2">
                  <h2 className="text-3xl ">Admin</h2>
                  <li className="flex">
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/all-user'}
                    >
                      <FaHouseUser className="text-xl"></FaHouseUser>
                      All User
                    </NavLink>
                  </li>
                  <li className="flex">
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/all-pets'}
                    >
                      {/* userDashboard */}
                      <MdPets className="text-xl"></MdPets>
                      All Pets
                    </NavLink>
                  </li>
                  <li className="flex">
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/all-donations'}
                    >
                      <FaHotTub className="text-xl"></FaHotTub>
                      All Donations
                    </NavLink>
                  </li>
                </div>
                {/* router */}
                <div>
                  <li className="flex">
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/add-pet'}
                    >
                      <IoAdd className="text-xl"></IoAdd>
                      Add Pet
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/my-added-pets'}
                    >
                      <IoBagAdd className="text-xl"></IoBagAdd>
                      My added pets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/adoption-request'}
                    >
                      <FaList className="text-xl"></FaList>
                      Adoption Request
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/create-donation-campaing'}
                    >
                      <FaAngleDoubleUp className="text-xl"></FaAngleDoubleUp>
                      Create Donation Campaign
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/my-donation-campaigns'}
                    >
                      <MdDragIndicator className="text-xl"></MdDragIndicator>
                      My Donation Campaigns
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/my-donations'}
                    >
                      <FaUserTag className="text-xl"></FaUserTag>
                      My Donations
                    </NavLink>
                  </li>
                </div>
              </>
            ) : (
              // user router

              <>
                <div>
                  <li className="flex  ">
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/add-pet'}
                    >
                      <FaHome className="text-xl"></FaHome>
                      Add pet
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/my-added-pets'}
                    >
                      <FaUtensils className="text-xl"></FaUtensils>
                      My added pets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/adoption-request'}
                    >
                      <FaList className="text-xl"></FaList>
                      Adoption Request
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/create-donation-campaing'}
                    >
                      <FaUserTag className="text-xl"></FaUserTag>
                      Create Donation Campaign
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/my-donation-campaigns'}
                    >
                      <FaUserTag className="text-xl"></FaUserTag>
                      My Donation Campaigns
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="flex gap-2 items-center"
                      to={'/dashboard/my-donations'}
                    >
                      <FaUserTag className="text-xl"></FaUserTag>
                      My Donations
                    </NavLink>
                  </li>
                </div>
              </>
            )}
            {/* admim Link */}
          </ul>
        </div>
        {/* outlet */}
        <div className="w-full">
          <div className="flex items-center sticky top-0  z-50 justify-between shadow-2xl  p-5 bg-white  ">
            <div>
              <FaBars></FaBars>
            </div>
            <div>
              <img
                className="w-10 h-10 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </div>
          </div>
          <NavLink
            className="flex gap-2 items-center"
            to={'/dashboard'}
          ></NavLink>
          <div className=" bg-blue-gray-900 ">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
