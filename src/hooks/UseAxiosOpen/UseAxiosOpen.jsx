import axios from 'axios';

const axiosOpen = axios.create({
  baseURL: 'https://pethaven-server.vercel.app',
});

const UseAxiosOpen = () => {
  return axiosOpen;
};

export default UseAxiosOpen;
