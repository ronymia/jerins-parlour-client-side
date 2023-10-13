import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks";
import DnaLoader from "../../pages/Shared/Loader/DNALoader/DNALoader";

export default function PrivateRoute({ children }) {
     const location = useLocation();
     const { user, loading } = useAuth();

     if (loading) {
          return <DnaLoader />;
     }

     if (user) {
          return children;
     }

     return <Navigate to={"/auth/login"} state={{ from: location }} replace />
}
