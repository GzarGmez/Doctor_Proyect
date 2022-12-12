import GenericTamplate from "../templates/GenericTamplate";
import Landing from "../views/landing";

function LandingPage() {
    return ( 
        <GenericTamplate child={<Landing/>}/>
     );
}

export default LandingPage;