import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './user/pages/Home';
import CheckHimaya from './user/pages/CheckHimaya';
import Login from './admin/pages/Login';
import Dashboard from './admin/pages/Dashboard';
import UsersList from './admin/pages/UsersList';
import ExpiredUsers from './admin/pages/ExpiredUsers';
import EditUsers from './admin/pages/EditUsers';
import AddUser from './admin/pages/AddUser';
import Signup from './admin/pages/SignUp';
import AdminList from './admin/pages/AdminList';
import UpdateProfile from './admin/pages/UpdateProfile';
import Overview from './user/pages/Overview';
import AdminRequest from './admin/pages/AdminRequest';
import ImageUpload from './admin/pages/ImageUpload';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/log' element={<CheckHimaya />} />
          <Route path='overview' element={<Overview />} />

          <Route path='/adminregister' element={<Signup />} />
          <Route path='/adminlogin' element={<Login />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/users' element={<UsersList />} />
          <Route path='/expiredusers' element={<ExpiredUsers />} />
          <Route path='/admin/adduser' element={<AddUser />} />
          <Route path='/edit/:id' element={<EditUsers />} />
          <Route path='/admins' element={<AdminList />} />
          <Route path='/profile' element={<UpdateProfile />} />
          <Route path="/admin/pending-requests" element={<AdminRequest />} />
          <Route path="/image/upload" element={<ImageUpload />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={500} />
      </div>
    </>
  );
}

export default App;
