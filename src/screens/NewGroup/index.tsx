import { useNavigation } from "@react-navigation/native";
import Button from "components/Button";
import Header from "components/Header";
import Highlight from "components/Highlight";
import Input from "components/Input";
import React, { useState } from "react";

import { Container, Content, Icon } from "./styles";

const NewGroup = () => {
  const [group, setGroup] = useState("");

  const { navigate } = useNavigation();

  const handleNewGroup = () => {
    navigate("Players", { group });
  };

  return (
    <Container>
      <Header />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button title="Criar" onPress={handleNewGroup} />
      </Content>
    </Container>
  );
};

export default NewGroup;
