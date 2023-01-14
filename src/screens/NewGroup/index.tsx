import Button from "components/Button";
import Header from "components/Header";
import Highlight from "components/Highlight";
import Input from "components/Input";
import React from "react";

import { Container, Content, Icon } from "./styles";

const NewGroup = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" />

        <Button title="Criar" />
      </Content>
    </Container>
  );
};

export default NewGroup;
