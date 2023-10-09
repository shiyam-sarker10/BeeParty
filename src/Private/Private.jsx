import { useContext } from 'react';
import { Navigate} from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Spinner } from '@material-tailwind/react';

const Private = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
       return (
         <div className="flex justify-center items-center h-[90vh] ">
           <Spinner className="h-16 w-16 text-amber-900" />
         </div>
       );
    }
    
    if(!user){
        return <Navigate to="/login" />;
    }
   
        return children;

};

export default Private;