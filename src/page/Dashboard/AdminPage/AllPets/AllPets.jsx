import React from 'react';
import usePets from '../../../../hooks/usePets/usePets';
import { PencilIcon } from '@heroicons/react/24/solid';
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import useAxiosProtected from '../../../../hooks/useAxiosProtected/useAxionProtected';
import Swal from 'sweetalert2';

const TABLE_HEAD = ['Ptes', '', 'Publish', 'Pandin', 'Delete', 'Edit Pet', ''];

const AllPets = () => {
  const [pets, refetch] = usePets();
  const axiosProtected = useAxiosProtected();
  const handealDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosProtected.delete(`/pet/${id}`).then(res => {
          res.data;
          refetch();
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          });
        });
      }
    });
  };

  return (
    <div>

      <Card className="h-full w-full rounded-none">
      
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Recent Transactions
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                These are details about the last transactions
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
              <Button className="flex items-center gap-3" size="sm">
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" />{' '}
                Download
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, inx) => (
                  <th
                    key={inx}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pets.map(
                (
                  {
                    _id,
                    image,
                    name,
                    amount,
                    date,
                    status,
                    account,
                    accountNumber,
                    expiry,
                  },
                  index
                ) => {
                  const isLast = index === pets.length - 1;
                  const classes = isLast
                    ? 'p-4'
                    : 'p-4 border-b border-blue-gray-50';

                  return (
                    <tr key={_id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={image}
                            alt={name}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50  p-1"
                          />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {amount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={status}
                            color={
                              status === 'paid'
                                ? 'green'
                                : status === 'pending'
                                ? 'amber'
                                : 'red'
                            }
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="h-9  border rounded-md  p-1 hover:bg-red-600 hover:text-white">
                            <button onClick={() => handealDelete(_id)}>
                              Delete
                            </button>
                          </div>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal capitalize"
                            >
                              {account?.split('').join(' ')} {accountNumber}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {expiry}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit Pet">
                          <IconButton variant="text">
                            <Link>
                              
                              <PencilIcon className="h-4 w-4" />
                            </Link>
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default AllPets;
