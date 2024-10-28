import React from 'react';
import HeroScreen from 'views/components/@home/HeroScreen/HeroScreen';
import ResultSection from 'views/components/@home/ResultSection/ResultSection';

const Home = () => (
  <>
    <HeroScreen />
    <ResultSection
      data={null}
    />
  </>
);

export default Home;