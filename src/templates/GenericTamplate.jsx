import Footer from "../components/Footer";
import Header from "../components/Header";
import '../assets/stylesheets/template-styles/Generic.css'

function GenericTamplate({ child }) {
    return (
        <>
            <Header />
            <main>
                {child}
            </main>
            <Footer />
        </>
    );
}

export default GenericTamplate;