import useAuth from '../../hooks/useAuth/useAuth';
import { useForm } from 'react-hook-form';
import { Card, Input, Checkbox, Typography } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import Swal from 'sweetalert2';
import SigninAnimation from '../../../public/Animation22 - 1737710449043.json';
import Lottie from 'lottie-react';
import UseAxiosOpen from '../../hooks/UseAxiosOpen/UseAxiosOpen';
import { Helmet } from 'react-helmet-async';
const Signin = () => {
  const axiosOpen = UseAxiosOpen();
  const navigat = useNavigate();
  const { createNewUser, updeateProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async data => {
    const { email, password, name, photo } = data;
    try {
      await createNewUser(email, password).then(result => {
        const useInfor = {
          email,
          name,
          photo,
        };
        axiosOpen
          .post('/user', useInfor)

          .then(res => {
            if (res.data) {
              Swal.fire('Sign Up sussecfull');
            }
          });
      });
      await updeateProfile(name, photo).then(() => {
        navigat('/');
      });
    } catch (error) {
      console.error('Google login error:', error.message);
    }
  };
  return (
    <div className="mt-10 flex justify-evenly">
      <Helmet>
        <title>Pet-haven || Sign In</title>
      </Helmet>
      {/* Animation section */}
      <div className="w-4/12 hidden lg:block">
        <Lottie animationData={SigninAnimation}></Lottie>
      </div>
      {/* form section */}
      <div>
        <Card color="transparent" className="p-7" shadow={true}>
          <Typography className="text-center" variant="h2" color="blue-gray">
            Sign Up
          </Typography>
          <SocialLogin></SocialLogin>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 mb-2  w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                {...register('name', { required: true })}
                size="lg"
                placeholder="name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              {errors.name && (
                <span className="-mt-6 text-red-600"> Name is required </span>
              )}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Photo url
              </Typography>
              <Input
                {...register('photo', { required: true })}
                size="lg"
                type="url"
                placeholder="Your Photo Url"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              {errors.name && (
                <span className="-mt-6 text-red-600"> Name is required </span>
              )}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                {...register('email', { required: true })}
                size="lg"
                placeholder="email@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              {errors.email && (
                <span className="-mt-6 text-red-600">
                  {' '}
                  Email Address is required
                </span>
              )}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                {...register('password', {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                })}
                type="password"
                size="lg"
                placeholder="********"
                className=" border-t-blue-gray-200 focus:!border-t-gray-900"
              />
              {errors.password && (
                <span className="-mt-6 text-red-600">
                  password Address is required
                </span>
              )}
            </div>

            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: '-ml-2.5' }}
            />

            <div className="bg-black py-2 rounded-xl text-center">
              <button className="  font-bold text-white mx-auto text-center">
                Sign up
              </button>
            </div>

            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{' '}
              <Link to={'/login'} className="font-medium text-gray-900">
                Log In
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Signin;
