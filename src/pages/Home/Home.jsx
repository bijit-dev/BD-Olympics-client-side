import Contact from '../../components/Contact/Contact';
import Faq from '../../components/Faq/Faq';
import Slider from '../../components/Slider/Slider';

const Home = () => {
    return (
        <>
            <Slider />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-4">Welcome to Our Event</h1>
                <p className="text-center mb-8">Discover exciting events and book your spot today!</p>

                {/* event card  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                </div>
            </div>

            <Faq />
            <Contact />
        </>
    );
};

export default Home;