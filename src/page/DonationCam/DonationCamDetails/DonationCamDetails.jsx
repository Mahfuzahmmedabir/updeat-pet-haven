import { Card, Typography } from '@material-tailwind/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DonationCamDetails = () => {
  const donationCamDetails = useLoaderData();
  const { date, amount, descriptions, image, note, lastDate } =
    donationCamDetails;
  const dates = date.split(',');
  return (
    <div>
      <Card className="p-5">
        <div className="lg:mt-10 lg:flex gap-5">
          <div className="lg:w-6/12">
            <img className="rounded-lg w-full  h-96" src={image} alt="" />
          </div>
          <div className="lg:w-6/12">
            <Typography color="blue-gray" className="mb-2 mt-3">
              <span className="text-light-green-700 font-semibold">
                Amount:
              </span>{' '}
              ${amount}
            </Typography>
            <Typography color="blue-gray" className="mb-2">
              <span className="text-light-green-700 font-semibold">
                Publish:{' '}
              </span>
              {dates[0]}
            </Typography>
            <Typography color="blue-gray" className="mb-2">
              <span className="text-light-green-700 font-semibold">
                Last Date:{' '}
              </span>
              {lastDate}
            </Typography>
            <Typography color="blue-gray" className="mb-2">
              <span className="text-light-green-700 font-semibold">Note: </span>{' '}
              {note}
            </Typography>
            <Typography color="blue-gray" className="mb-2">
              <span className="text-light-green-700 font-semibold">
                Descriptions:
              </span>
              {descriptions}
            </Typography>
            <button className="py-2 px-6 bg-light-green-700 text-white font-semibold rounded-lg">
              Donate now
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DonationCamDetails;
