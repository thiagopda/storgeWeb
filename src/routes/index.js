import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Search from '../components/Search';
import ProfessionalSignUp from '../components/ProfessionalSignUp';
import SignIn from '../components/SignIn';
import ProfessionalsList from '../components/ProfessionalsList';
import ProfessionalCard from '../components/ProfessionalCard';
import PatientSignUp from '../components/PatientSignUp';
import AppointmentBooking from '../components/AppointmentBooking';
import ProfessionalDashboard from '../components/ProfessionalDashboard';
import ProfessionalProfile from '../components/ProfessionalProfile';
import PatientProfile from '../components/PatientProfile';
import { useContext } from 'react';
import CurrentUserContext from '../providers/CurrentUserContext';

const MainRoutes = () => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/professionalsignup" element={<ProfessionalSignUp />} />
      <Route path="patientsignup" element={<PatientSignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/professionalslist" element={<ProfessionalsList />} />
      <Route path="/professionalcard" element={<ProfessionalCard />} />
      <Route path="/appointmentbooking" element={<AppointmentBooking/>} />
      <Route path="professionaldashboard" element={<ProfessionalDashboard/>} />
      <Route exact path="/patientprofile" element={<PatientProfile user={currentUser} />} />
      <Route exact path="/professionalprofile" element={<ProfessionalProfile user={currentUser} />} />  

    </Routes>
  );
}

export default MainRoutes;
