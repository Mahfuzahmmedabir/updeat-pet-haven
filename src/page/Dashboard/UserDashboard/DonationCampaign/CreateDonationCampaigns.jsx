import React from 'react';
import { useForm } from 'react-hook-form';
import { Card, Input, Typography } from '@material-tailwind/react';
import '../../../../index.css';
import Select from 'react-select';
import { useState } from 'react';
import useAuth from '../../../../hooks/useAuth/useAuth';
import UseAxiosOpen from '../../../../hooks/UseAxiosOpen/UseAxiosOpen';
import moment from 'moment';
import Swal from 'sweetalert2';
import useAxiosProtected from '../../../../hooks/useAxiosProtected/useAxionProtected';
import { useNavigate } from 'react-router-dom';
const image_key = import.meta.env.VITE_IMG_HOSTING;

const image_Api = `https://api.imgbb.com/1/upload?key=${image_key}`;

const CreateDonationCampaigns = () => {
  const { user, lodging } = useAuth();
  const axiosProtected = useAxiosProtected();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const date = moment().format('MMMM Do YYYY, h:mm:ss ');
  const onSubmit = async data => {
    const axiosOpen = UseAxiosOpen();
    const petInfo = { ...data };
    const lastDates = petInfo.date
    const amount = parseInt(petInfo.amount); 

    const images = { image: petInfo.image[0] };
    const res = await axiosOpen.post(image_Api, images, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
  
    if (res.data.success) {
      const pets = {
        descriptions: data.descriptions,
        image: res.data.data.display_url,
        note: data.note,
        date: date,
        user: user?.email,
        lastDate: lastDates,
        amount: amount,
      };

      axiosProtected.post('/donation', pets)
        .then(res => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
      });
      navigate('/');
    }
  };

  return (
    <div>
      <div>
        <Card className="p-7 pb-20  w-full">
          <Typography className="text-center" variant="h2" color="blue-gray">
            Add New Pet
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2   ">
            <div className="mb-1 w-full gap-6 ">
              <div className=" lg:flex gap-10 w-full">
                <div className="w-6/12">
                  <Typography variant="h6" color="blue-gray" className="py-3">
                    Photo
                  </Typography>
                  <Input
                    {...register('image', { required: true })}
                    size="lg"
                    name="image"
                    type="file"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  />
                  {errors.image && (
                    <span className="-mt-6 text-red-600">
                      Picture is required
                    </span>
                  )}
                  <Typography variant="h6" color="blue-gray" className="py-3">
                    Donation Amount
                  </Typography>
                  <Input
                    {...register('amount', { required: true })}
                    size="lg"
                    type="number"
                    placeholder="Amount"
                    className=" py-10 !border-t-blue-gray-200 focus:!border-t-gray-900"
                  />
                  {errors.amount && (
                    <span className="-mt-6 text-red-600">
                      {' '}
                      Name is required{' '}
                    </span>
                  )}

                  <Typography variant="h6" color="blue-gray" className="py-3">
                    Last date of donation
                  </Typography>
                  <Input
                    {...register('date', { required: true })}
                    size="lg"
                    type="date"
                    placeholder="Location"
                    className=" py-10 !border-t-blue-gray-200 focus:!border-t-gray-900"
                  />
                  {errors.date && (
                    <span className="-mt-6 text-red-600">
                      {' '}
                      Name is required{' '}
                    </span>
                  )}
                </div>
                <div className="w-6/12">
                  <Typography variant="h6" color="blue-gray" className="py-3">
                    Small note
                  </Typography>
                  <textarea
                    {...register('note', { required: true })}
                    size="lg"
                    type="textarea"
                    placeholder="Write you description"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 border p-3 lg:w-full rounded-md "
                  />
                  {errors.note && (
                    <span className="-mt-6 text-red-600">
                      description is required
                    </span>
                  )}
                  <Typography variant="h6" color="blue-gray" className="py-3">
                    Description
                  </Typography>
                  <textarea
                    {...register('descriptions', { required: true })}
                    size="lg"
                    type="textarea"
                    placeholder="Write you description"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 lg:w-full rounded-md border h-40 p-3 "
                  />
                  {errors.descriptions && (
                    <span className="-mt-6 text-red-600">
                      descriptions is required
                    </span>
                  )}
                </div>
              </div>
              <div className="bg-light-green-800 py-2 rounded-xl lg:-mt-10 w-32 text-center ">
                <button className=" font-bold text-white mx-auto   ">
                  Donation
                </button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CreateDonationCampaigns;
