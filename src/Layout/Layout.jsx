
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Navbar/Nav';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;