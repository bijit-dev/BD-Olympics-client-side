import { useLoaderData } from 'react-router';
import Contact from '../../components/Contact/Contact';
import Faq from '../../components/Faq/Faq';
import Slider from '../../components/Slider/Slider';
import FeaturedEvent from './FeaturedEvent';

const Home = () => {
    const data = useLoaderData();
    
    return (
        <>
            <Slider />
            <FeaturedEvent data={data} />
            <Faq />
            <Contact />
        </>
    );
};

export default Home;