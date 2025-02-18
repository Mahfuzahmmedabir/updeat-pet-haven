import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.webp';
import {
  Navbar,
  Typography,
  Button,
  DialogHeader,
  Dialog,
  DialogBody,
} from '@material-tailwind/react';
import '../../App.css';

import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';

const Navbars = () => {
  const [size, setSize] = useState(null);
  const handleOpen = value => setSize(value);
  const { user, logOut } = useAuth();
  user;

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center  lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-[17px]"
      >
        <NavLink to="/" className="flex items-center">
          Home
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-[17px]"
      >
        <NavLink to={'/petlist'} className="flex items-center">
          Pet Listing
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-[17px]"
      >
        <NavLink to={'/donation-campaign'} className="flex items-center">
          Donation Campaigns
        </NavLink>
      </Typography>
    </ul>
  );
  return (
    <div className="">
      <div className="relative ">
        <Navbar className="fixed top-0 left-0 right-0  z-50  max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium"
            >
              <div className="flex items-center gap-3">
                <img className="w-16 rounded-full " src={logo} alt="" />
                <h2 className="text-2xl font-bold">
                  Pet <span className="text-light-green-700">Haven</span>
                </h2>
              </div>
            </Typography>
            
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-1">
                {user ? (
                  <>
                    <button onClick={() => handleOpen('xs')}>
                      <img
                        className="w-10 h-10 rounded-full"
                        src={user?.photoURL}
                        alt=""
                      />
                    </button>
                    <div className="">
                      <Dialog
                        open={size === 'xs'}
                        size={size || 'md'}
                        handler={handleOpen}
                        className=" lg:ml-[1000px] md:ml-[300px] lg:-mt-32 md:-mt-20"
                      >
                        <DialogHeader className="text-center flex justify-center flex-col text-[18px] ">
                          {user?.email}
                          <img
                            className="w-20 h-20 rounded-full"
                            src={user?.photoURL}
                            alt=""
                          />
                          <h2 className="text-[19px] font-normal">
                            Hi {user?.displayName}!
                          </h2>
                        </DialogHeader>
                        <DialogBody>
                          <div className=" text-center -mt-5 text-xl ">
                            <div className=" flex flex-col">
                              <Link>Home</Link>
                              <Link to={'petlist'}>Pet Listing</Link>
                              <Link to={'/donation-campaign'}>
                                Donation Campaigns
                              </Link>
                            </div>

                            <Link to={'dashboard'}>Dashboard </Link>
                          </div>
                          <div className="text-center">
                            <button
                              className="py-2 px-4 mt-5 hover:bg-red-700 hover:text-white rounded-md border"
                              onClick={logOut}
                            >
                              Log Out
                            </button>
                          </div>
                        </DialogBody>
                      </Dialog>
                    </div>
                  </>
                ) : (
                  <>
                    <Button
                      variant="text"
                      size="sm"
                      className="lg:inline-block"
                    >
                      <Link to={'/login'}>Log In</Link>
                    </Button>
                    <Button
                      variant="gradient"
                      size="sm"
                      className="lg:inline-block"
                    >
                      <Link to={'/signin'}>Sign in</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Navbar>
        <div className="mx-auto max-w-screen-md py-12"></div>
      </div>
    </div>
  );
};

export default Navbars;
