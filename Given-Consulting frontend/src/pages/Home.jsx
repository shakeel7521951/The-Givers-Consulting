import { Carousel, Gateway, Services } from '../component';
import About from '../component/HomeComp/About';
import Reviews from '../component/HomeComp/Reviews';

const Home = () => {
  return (
    <>
      <Carousel />
      <Services />
      <Gateway />
      <About />
      <Reviews />
    </>
  );
};
export default Home;
