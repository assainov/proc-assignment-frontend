import React from 'react';
import HeroScreen from 'views/components/@home/HeroScreen/HeroScreen';
import ResultSection from 'views/components/@home/ResultSection/ResultSection';

// const data = {
//   'name': 'Luke Skywalker',
//   'height': '172',
//   'mass': '77',
//   'hair_color': 'blond',
//   'skin_color': 'fair',
//   'eye_color': 'blue',
//   'birth_year': '19BBY',
//   'gender': 'male',
// };

const Home = () => (
  <>
    <HeroScreen />
    <ResultSection
      data={null}
    />
  </>
);

export default Home;