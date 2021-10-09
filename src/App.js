import React from 'react';
import Navbar from './components/Navbar';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default App;
