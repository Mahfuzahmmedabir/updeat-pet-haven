import React from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import LoginAnimation from '../../../public/Animation1 - 1737710193498.json';
import Lottie from 'lottie-react';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth/useAuth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
const Login = () => {
  const { signInWithEmailAndPass } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async data => {
    const { email, password } = data;
    email, password;
    try {
      const result = await signInWithEmailAndPass(email, password);
      result;
      Swal.fire({
        title: 'Log in successfully!',
        icon: 'success',
        draggable: true,
      });
      navigate('/');
    } catch (error) {
      console.error('Google login error:', error.message);
      Swal.fire({
        icon: 'error',
        title: 'worng Password or Email ',
        text: 'Something went wrong!',
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };
  return (
    <div>
      <div className="mt-10 flex justify-around  h-[700px]">
        <Helmet>
          <title>Pet-haven || Log In</title>
        </Helmet>
        {/* Animation section */}
        <div className="w-6/12 hidden lg:block ">
          <Lottie animationData={LoginAnimation}></Lottie>
        </div>
        {/* form section */}
        <div>
          <Card color="transparent" className="p-7" shadow={true}>
            <Typography className="text-center" variant="h2" color="blue-gray">
              Log In
            </Typography>

            <SocialLogin></SocialLogin>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 mb-2  w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-1 flex flex-col gap-6">
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
                    Email Address is required{' '}
                  </span>
                )}
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>
                <Input
                  {...register('password', {
                    pattern: /^(?=.*[!@#$%^&*(),.?":{}|<>])/,
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
              <label>Forget password</label>
              <div className="bg-black py-2 rounded-xl text-center">
                <button className="  font-bold text-white mx-auto text-center">
                  Log In
                </button>
              </div>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Don't have an account?{' '}
                <Link to={'/signin'} className="font-medium text-gray-900">
                  Sing Up
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
