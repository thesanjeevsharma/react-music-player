import React from 'react';
import styled from 'styled-components';

import { Navigation } from './components';

function App() {
  return (
    <Container>
      <aside>
        <Navigation />
      </aside>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;

  aside {
    height: 100%;
    max-width: 30vh;
  }
`