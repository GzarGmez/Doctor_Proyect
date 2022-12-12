import GenericTamplate from "../templates/GenericTamplate";
import Login from "../views/Login";

function LoginPage() {
    return (
        <GenericTamplate child={<Login />} />
    );
}

export default LoginPage;