import React from "react";

import { Container, Message } from "./styles";

interface IProps {
  message: string;
}

const ListEmpty: React.FC<IProps> = ({ message }) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};

export default ListEmpty;
