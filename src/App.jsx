import { useState } from 'react';
import styled from 'styled-components';
import 'views/styles/global.css';

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <button onClick={() => setCount((count) => count + 1)} type="button">
        count is { count }
      </button>
      
    </Wrapper>
  );
};

export default App;
