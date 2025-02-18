import { useForm } from 'react-hook-form';
import { Card, Input, Typography } from '@material-tailwind/react';
import Select from 'react-select';
import { useState } from 'react';
import moment from 'moment';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from 'react-router-dom';
import UseAxiosOpen from '../../hooks/UseAxiosOpen/UseAxiosOpen';
import useAxiosProtected from '../../hooks/useAxiosProtected/useAxionProtected';
import useAuth from '../../hooks/useAuth/useAuth';
const image_key = import.meta.env.VITE_IMG_HOSTING;
image_key;
const image_Api = `https://api.imgbb.com/1/upload?key=${image_key}`;

const options = [
  { value: 'Dog', label: 'Dog' },
  { value: 'Cat', label: 'Cat' },
  { value: 'Rabbit', label: 'Rabbit' },
  { value: 'Fish', label: 'Fish' },
  { value: 'Birds', label: 'Birds' },
];
const Updeat = () => {
  const axiosOpen = UseAxiosOpen();
  const { user } = useAuth();
  const axiosProtected = useAxiosProtected();
  const upedat = useLoaderData();
  const { age, note, _id, image, name, location, descriptions } = upedat;
  const [selectedOption, setSelectedOption] = useState(null);
  const object = selectedOption?.value;
  const categorys = { categorys: object };
  const { categorys: category } = categorys;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const date = moment().format('MMMM Do YYYY, h:mm:ss a');
  const onSubmit = async data => {
    const petInfo = { ...data, category };
    const images = { image: petInfo.image[0] };
    const res = await axiosOpen.post(image_Api, images, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    if (res.data.success) {
      const pets = {
        age: data.age,
        category: petInfo.category,
        descriptions: data.descriptions,
        image: res.data.data.display_url,
        location: data.location,
        name: data.name,
        note: data.note,
        date: date,
        user: user?.email,
      };
      axiosProtected.put(`/updeat/${_id}`, pets).then(res => {
  
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: ' Updeat successfully',
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
            Updeat Pet
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
                    Pet Name
                  </Typography>
                  <Input
                    {...register('name', { required: true })}
                    size="lg"
                    placeholder="Pet Name"
                    defaultValue={name}
                    className=" py-10 !border-t-blue-gray-200 focus:!border-t-gray-900"
                  />
                  {errors.name && (
                    <span className="-mt-6 text-red-600">Name is required</span>
                  )}
                  <Typography variant="h6" color="blue-gray" className="py-3">
                    Pet age
                  </Typography>
                  <Input
                    {...register('age', { required: true })}
                    size="lg"
                    type="number"
                    defaultValue={age}
                    placeholder="Your pet age"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  />
                  {errors.age && (
                    <span className="-mt-6 text-red-600">
                      {' '}
                      Age is required{' '}
                    </span>
                  )}
                  <Typography variant="h6" color="blue-gray" className="py-3">
                    Pet Category
                  </Typography>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    required={true}
                  />
                </div>

                <div className="w-6/12">
                  <Typography variant="h6" color="blue-gray" className="py-3">
                    Pet location
                  </Typography>
                  <Input
                    {...register('location', { required: true })}
                    size="lg"
                    defaultValue={location}
                    placeholder="Location"
                    className=" py-10 !border-t-blue-gray-200 focus:!border-t-gray-900"
                  />
                  {errors.location && (
                    <span className="-mt-6 text-red-600">
                      {' '}
                      Name is required{' '}
                    </span>
                  )}
                  <Typography variant="h6" color="blue-gray" className="py-3">
                    Small note,
                  </Typography>
                  <textarea
                    {...register('note', { required: true })}
                    size="lg"
                    defaultValue={note}
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
                    Description,
                  </Typography>
                  <textarea
                    {...register('descriptions', { required: true })}
                    size="lg"
                    defaultValue={descriptions}
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
              <div className="bg-black py-2 rounded-xl lg:-mt-10 w-36 text-center ">
                <button className=" font-bold text-white mx-auto   ">
                  Updeat
                </button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Updeat;
