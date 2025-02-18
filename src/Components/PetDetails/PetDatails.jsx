import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Card, Typography } from '@material-tailwind/react';
const PetDatails = () => {
  const pets = useLoaderData();
  pets;
  const {
    image,
    name,
    descriptions,
    category,
    age,
    location,
    date,
    note,
    _id,
  } = pets;
  const dates = date.split(',');
  return (
    <Card className="p-5">
      <div className="lg:mt-10 lg:flex  gap-8">
        <div className="lg:w-6/12">
          <img className="rounded-lg" src={image} alt="" />
        </div>
        <div className="lg:w-6/12">
          <Typography variant="h5" color="blue-gray" className="mb-2 mt-3">
            <span className="text-light-green-700 font-semibold">Name: </span>
            {name}
          </Typography>
          <Typography color="blue-gray" className="mb-2">
            <span className="text-light-green-700 font-semibold">
              Category:{' '}
            </span>
            {category}
          </Typography>
          <Typography color="blue-gray" className="mb-2">
            <span className="text-light-green-700 font-semibold">Age: </span>{' '}
            {age} Year
          </Typography>
          <Typography color="blue-gray" className="mb-2">
            <span className="text-light-green-700 font-semibold">
              Location:{' '}
            </span>
            {location}
          </Typography>
          <Typography color="blue-gray" className="mb-2">
            <span className="text-light-green-700 font-semibold">
              Publish:{' '}
            </span>
            {dates[0]}
          </Typography>
         
            <Typography color="blue-gray" className="mb-2">
              <span className="text-light-green-700 font-semibold">Note: </span>{' '}
              {note}
            </Typography>
            <Typography color="blue-gray" className="mb-2 ">
              <span className="text-light-green-700 font-semibold">
                Descriptions:{' '}
              </span>
              {descriptions}
            </Typography>
         

          <button className="py-2 px-6 bg-light-green-700 text-white font-semibold rounded-lg">
            Adopt
          </button>
        </div>
      </div>
    </Card>
  );
};

export default PetDatails;
