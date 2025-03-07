import { ConnectWorld, CotactUs, HeroBanner, OurCompany } from '../component';
import banner from '../assets/ConnectImage/connectBanner.png';

const ImprotExport = () => {
  return (
    <div>
      {' '}
      <HeroBanner
        img={banner}
        text={'The best learners are also teachers'}
        desc={
          'Keep it concise: A slogan should be short and simple, making it easier for people to remember Hello world'
        }
      />
      <ConnectWorld />
      <OurCompany />
      <CotactUs />
    </div>
  );
};
export default ImprotExport;
