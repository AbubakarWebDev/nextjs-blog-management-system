import WithLayout from "../HOC/WithLayout";
import WithProtected from "../HOC/WithProtected";

function Profile({ user }) {
    return (
        <div>User Profile Uid: {user.uid}</div>
    );
}

export default WithLayout(WithProtected(Profile), { title: "User Profile Page" });