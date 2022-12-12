import GenericTamplate from "../templates/GenericTamplate";
import Ask from "../views/Ask";

function AskPage() {
    return (
        <GenericTamplate child={<Ask />} />
    );
}

export default AskPage;