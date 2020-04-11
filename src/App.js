import React from "react";
import styled from "styled-components";

import { Navigation, Body } from "./components";

function App() {
  return (
    <Container>
      <aside>
        <Navigation />
      </aside>
      <main>
        <Body />
      </main>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto;
  grid-template-areas: "nav body";

  aside {
    min-width: 250px;
    height: 100%;
    grid-area: nav;
  }

  main {
    grid-area: body;
    overflow: hidden;
  }
`;
