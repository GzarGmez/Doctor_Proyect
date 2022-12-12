import GenericTamplate from "../templates/GenericTamplate";
import NotFound from "../views/404View";

function PageNotFound() {
    return (
        <GenericTamplate child={<NotFound/>}/>
    );
}

export default PageNotFound;