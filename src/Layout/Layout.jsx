
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Navbar/Nav';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";





const Layout = () => {
    return (
      <div>
        <Nav></Nav>
        <Outlet></Outlet>
        <ToastContainer />
        <Footer></Footer>
      </div>
    );
};

export default Layout;