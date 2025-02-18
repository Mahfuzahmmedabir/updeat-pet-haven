import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Cards = ({ item }) => {
  const { image, name, note, location, category, _id } = item;
  return (
    <div className="mt-14">
      <Card className="mt-6 ">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={image} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="blue-gray" className="mb-2">
            <span className="font-semibold">Category: </span>
            {category}
          </Typography>
          <Typography>
            <span className="font-semibold">Location: </span>
            {location}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link
            className="bg-light-green-700 text-white py-3 rounded-md px-3"
            to={`/pet-datails/${_id}`}
          >
            Details
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;
