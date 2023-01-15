import { useNavigation } from "@react-navigation/native";

import Button from "components/Button";
import Header from "components/Header";
import Highlight from "components/Highlight";
import Input from "components/Input";

import React, { useState } from "react";
import { Alert } from "react-native";

import { groupCreate } from "storage/group/groupCreate";
import { AppError } from "utils/AppError";

import { Container, Content, Icon } from "./styles";

const NewGroup = () => {
  const [group, setGroup] = useState("");

  const { navigate } = useNavigation();

  const handleNewGroup = async () => {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo grupo", "Informe o nome da turma.");
      }

      await groupCreate(group);

      navigate("Players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo grupo", error.message);
      } else {
        Alert.alert("Novo grupo", "Não foi possível criar o grupo.");
      }
    }
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
