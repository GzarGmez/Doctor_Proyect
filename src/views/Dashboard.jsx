import MyProfile from "../components/MyProfile";
import RecentQuestions from "../components/RecentQuestions";
import UpdateInfo from "../components/UpdateInfo";

function Dashboard() {
    return (
        <>
            <MyProfile/>
            <RecentQuestions/>
            <UpdateInfo/>
        </>
    );
}

export default Dashboard;