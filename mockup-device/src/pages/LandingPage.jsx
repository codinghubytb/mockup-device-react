import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function LandingPage() {

    return (
        <div className="back bg-blue-50 min-h-screen">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    )
};

export default LandingPage;