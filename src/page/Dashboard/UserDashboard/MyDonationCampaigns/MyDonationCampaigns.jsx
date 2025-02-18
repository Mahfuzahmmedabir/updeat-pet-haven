import React from 'react';
import { Card, Typography } from '@material-tailwind/react';
import useAxiosProtected from '../../../../hooks/useAxiosProtected/useAxionProtected';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth/useAuth';
import { Link } from 'react-router-dom';
const TABLE_HEAD = ['Name', 'Donation Amount', 'Status', 'Edit'];
const MyDonationCampaigns = () => {
  const axiosProtected = useAxiosProtected();
  const { user } = useAuth();
  const { data: myDonation = [] } = useQuery({
    queryKey: ['donation'],
    queryFn: async () => {
      const res = await axiosProtected.get(`/donationes?email=${user?.email}`);
    
      return res.data;
    },
  });
  return (
    <div>
      {myDonation.length == 0 ? (
        <>
          <h2 className="text-center text-3xl">
            You have no any Donation Campaign
          </h2>
        </>
      ) : (
        <>
          <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map(head => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
                {myDonation.map(({ name, job, date, amount, image }, index) => {
                  const isLast = index === myDonation.length - 1;
                  const classes = isLast
                    ? 'p-4'
                    : 'p-4 border-b border-blue-gray-50';
                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {``}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          $ {amount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {`Panding`}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          Edit
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </>
      )}
    </div>
  );
};

export default MyDonationCampaigns;
