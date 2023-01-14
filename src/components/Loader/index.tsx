import React from "react";

import { Container, LoadIndicator } from "./styles";

const Loader: React.FC = () => {
  return (
    <Container>
      <LoadIndicator />
    </Container>
  );
};

export default Loader;
