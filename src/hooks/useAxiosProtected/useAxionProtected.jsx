import axios from 'axios';
import useAuth from '../useAuth/useAuth';
import { useNavigate } from 'react-router-dom';
const axiosProtected = axios.create({
  baseURL: 'https://pethaven-server.vercel.app',
});
const useAxiosProtected = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  axiosProtected.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('access-token');
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      (' status 400 ');
      return Promise.reject(error);
    }
  );
  axiosProtected.interceptors.response.use(
    function (response) {
      (' status 200 ');
      return response;
    },
    async error => {
      'status err', error;
      const status = error?.response?.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate('/login');
      }
      return Promise.reject(error);
    }
  );
  return axiosProtected;
};
export default useAxiosProtected;
