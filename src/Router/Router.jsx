import { createBrowserRouter } from 'react-router-dom';
import Home from '../page/Home/Home/Home';
import Main from '../layout/Main';
import Login from '../page/Login/Login';
import Signin from '../page/SignIn/SignIn';
import PetList from '../page/PetList/PetList';
import Dashboard from '../layout/Dashboard/Dashboard';
import AddPet from '../page/Dashboard/UserDashboard/AddPet/AddPet';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import MyAddedPets from '../page/Dashboard/UserDashboard/MyAddedPets/MyAddedPets';
import AdoptionRequest from '../page/Dashboard/UserDashboard/AdoptionRequest/AdoptionRequest';
import MyDonationCampaigns from '../page/Dashboard/UserDashboard/MyDonationCampaigns/MyDonationCampaigns';
import MyDonations from '../page/Dashboard/UserDashboard/MyDonations/MyDonations';
import AllUser from '../page/Dashboard/AdminPage/AllUser/AllUser';
import AllPets from '../page/Dashboard/AdminPage/AllPets/AllPets';
import AllDonations from '../page/Dashboard/AdminPage/AllDonations/AllDonations';
import PetDatails from '../Components/PetDetails/PetDatails';
import CreateDonationCampaigns from '../page/Dashboard/UserDashboard/DonationCampaign/CreateDonationCampaigns';
import DonationCam from '../page/DonationCam/DonationCam';
import Updeat from '../Components/Updeat/Updeat';
import DonationCamDetails from '../page/DonationCam/DonationCamDetails/DonationCamDetails';
import AdminRoute from './AdminRoute/AdminRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/pet-datails/:id',
        element: <PetDatails></PetDatails>,
        loader: ({ params }) =>
          fetch(`https://pethaven-server.vercel.app/pets/${params.id}`),
      },
      {
        path: '/petlist',
        element: <PetList></PetList>,
      },
      {
        path: '/donation-campaign',
        element: <DonationCam></DonationCam>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signin',
        element: <Signin></Signin>,
      },
      {
        path: '/updeats/:id',
        element: <Updeat></Updeat>,
        loader: ({ params }) =>
          fetch(`https://pethaven-server.vercel.app/pets/${params.id}`),
      },
      {
        path: '/donation-cam-details/:id',
        element: <DonationCamDetails></DonationCamDetails>,
        loader: ({ params }) =>
          fetch(`https://pethaven-server.vercel.app/getWithId/${params.id}`),
      },
    ],
  },
  // Dashboard
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard></Dashboard>
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: (
          <h2 className="text-3xl text-center">Welcome to you Deshboard</h2>
        ),
      },
      {
        path: 'add-pet',
        element: (
          <ProtectedRoute>
            <AddPet></AddPet>
          </ProtectedRoute>
        ),
      },
      {
        path: 'my-added-pets',
        element: (
          <ProtectedRoute>
            <MyAddedPets></MyAddedPets>
          </ProtectedRoute>
        ),
      },
      {
        path: 'adoption-request',
        element: (
          <ProtectedRoute>
            <AdoptionRequest></AdoptionRequest>
          </ProtectedRoute>
        ),
      },
      {
        path: 'create-donation-campaing',
        element: (
          <ProtectedRoute>
            <CreateDonationCampaigns></CreateDonationCampaigns>
          </ProtectedRoute>
        ),
      },
      {
        path: 'my-donation-campaigns',
        element: (
          <ProtectedRoute>
            <MyDonationCampaigns></MyDonationCampaigns>
          </ProtectedRoute>
        ),
      },
      {
        path: 'my-donations',
        element: (
          <ProtectedRoute>
            <MyDonations></MyDonations>
          </ProtectedRoute>
        ),
      },
      // admin route
      {
        path: 'all-user',
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: 'all-pets',
        element: (
          <AdminRoute>
            <AllPets></AllPets>
          </AdminRoute>
        ),
      },
      {
        path: 'all-donations',
        element: (
          <AdminRoute>
            <AllDonations></AllDonations>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
