import { useRouter } from 'next/router';
import useAuth from "../hooks/useAuth";

function WithProtected(OriginalComponent) {
    return function NewComponent(props) {
        const router = useRouter();
        const { currentUser, loading, logout } = useAuth();
    
        if (loading == false) {
            if (!currentUser) router.push('/');
            return <OriginalComponent logout={logout} user={currentUser} {...props} />
        }
        else {
            return null;
        }
    }
}

export default WithProtected;