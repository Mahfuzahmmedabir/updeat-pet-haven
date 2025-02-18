import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SiGithub } from 'react-icons/si';
import useAuth from '../../hooks/useAuth/useAuth';
import UseAxiosOpen from '../../hooks/UseAxiosOpen/UseAxiosOpen';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
  const { loginWithGoogle, gitHubProviders } = useAuth();
  const axiosOpen = UseAxiosOpen();
  const navigate = useNavigate();
  const loginWithGooglePopu = () => {
    loginWithGoogle()
      .then(res => {
      res.user;
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        photo: res.user?.photoURL,
      };
      axiosOpen.post('/user', userInfo)
        .then(result => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Log in successfully',
          showConfirmButton: false,
          timer: 1500,
        });
      });
      navigate('/');
    });
  };
  const loginWithTwitters = () => {
    gitHubProviders()
      .then(res => {
      res.user;
      const gitHubInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        photo: res.user?.photoURL,
        };
        
        axiosOpen.post('/user', gitHubInfo)
          .then(result => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Log in successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        });
        navigate('/');
      });
  };

  return (
    <div className="border-b-2 py-6">
      <div>
        <button
          onClick={loginWithGooglePopu}
          className="flex w-full rounded-full    justify-center gap-3 items-center py-3 border "
        >
          <FcGoogle className="text-2xl"></FcGoogle> Log In with Google
        </button>
      </div>
      <div>
        <button
          onClick={loginWithTwitters}
          className="flex w-full rounded-full  mt-5 justify-center gap-3 items-center py-3 border "
        >
          <SiGithub  className="text-2xl text-black"></SiGithub> Log In
          with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
