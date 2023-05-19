import About from "../About/About";
import Banner from "../Banner/Banner";
import Subscribe from "../Subscribe/Subscribe";
import Support from "../Support/Support";
import Toys from "../Toys/Toys";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Support></Support>
            <Toys></Toys>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;