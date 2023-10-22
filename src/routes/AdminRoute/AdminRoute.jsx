import { Navigate, useLocation } from "react-router";
import DnaLoader from "../../pages/Shared/Loader/DNALoader/DNALoader";
import { useAuth } from "../../hooks";
import useAdmin from "../../hooks/useAdmin";


const AdminRoute = ({ children }) => {
     const { user, loading } = useAuth();
     const [isAdmin, isAdminLoading] = useAdmin();
     const location = useLocation();

     if (loading || isAdminLoading) {
          return <DnaLoader />
     }

     if (user && isAdmin) {
          return children;
     }
     return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;