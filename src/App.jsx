import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Components/login';
import Register from './Components/register';
import Course from './Components/course';
import Courses from './Components/Courses';
import Profile from './Components/profile';
import Learnings from './Components/learnings';
import Home from './Components/Home';
import AddCourse from './Components/AddCourse';
import Dashboard from './Components/Dashboard/Dashboard';
import EditCourse from './Components/EditCourses';
import DUsers from './Components/Dashboard/DUsers';
import DCourses from './Components/Dashboard/DCourses';
import Assessment from './Components/Assessment';
import ErrorPage from './Components/ErrorPage';
import AddQuestions from './Components/AddQuestions';
import Performance from './Components/Dashboard/Performance';
import DTutors from './Components/Dashboard/DTutors';
import Certificate from './Components/certificate'; // fixed naming
import Forum from './Components/forum';
import AdminLogin from './Components/AdminLogin';
import TablePage from './Components/DashBoard/TablePage';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'boxicons/css/boxicons.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/addquestions/:id" element={<AddQuestions />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="/discussion/:id" element={<Forum />} />
          <Route path="/certificate/:id" element={<Certificate />} />
          <Route path="/assessment/:id" element={<Assessment />} />
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/editCourse/:id" element={<EditCourse />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Learnings" element={<Learnings />} />
          <Route path="/Dcourses" element={<DCourses />} />
          <Route path="/Dusers" element={<DUsers />} />
          <Route path="/Dtutors" element={<DTutors />} />
          <Route path="/Performance" element={<Performance />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/tablepage" element={<TablePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
}

export default App;