
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './index.css'; // Ensure Tailwind CSS is imported correctly here

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Menu from './pages/Menu';
import ContactForm from './pages/contact/ContactForm';
import BusinessHours from './pages/contact/BusinessHours';
import Address from './pages/contact/Address';
import Footer from './pages/Footer';

// Layouts
import RootLayout from './layouts/RootLayout';
import ContactLayout from './layouts/ContactLayout';

// Create the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="menu" element={<Menu />} />
      <Route path="team" element={<Team />} />
      <Route path="contact" element={<ContactLayout />}>
        <Route path='form' element={<ContactForm />} />
        <Route path='hours' element={<BusinessHours />} />
        <Route path='address' element={<Address />} />
      </Route>
      <Route path='footer' element={<Footer/>}/>
    </Route>
  )
);

// Define the App component
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
