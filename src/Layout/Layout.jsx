
import { Outlet } from 'react-router-dom';
import Nav from '../Components/Navbar/Nav';

const Layout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;