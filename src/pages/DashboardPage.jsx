import GenericTamplate from "../templates/GenericTamplate";
import Dashboard from "../views/Dashboard";

function DashboardPage() {
    return (
        <GenericTamplate child={<Dashboard />} />
    );
}

export default DashboardPage;