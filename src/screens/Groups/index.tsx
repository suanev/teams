import { useNavigation } from "@react-navigation/native";
import Button from "components/Button";
import GroupCard from "components/GroupCard";
import Header from "components/Header";
import Highlight from "components/Highlight";
import ListEmpty from "components/ListEmpty";
import React, { useState } from "react";
import { FlatList } from "react-native";

import { Container } from "./styles";

const Groups = () => {
  const [groups, setGroups] = useState<Array<string>>([
    "Galera da Rocket",
    "Amigos",
    "Familia",
  ]);

  const { navigate } = useNavigation();

  const handleNewGroup = () => {
    navigate("NewGroup");
  };

  return (
    <Container>
      <Header showBackButton={false} />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        ListEmptyComponent={
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        }
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        renderItem={({ item }) => <GroupCard key={item} title={item} />}
      />

      <Button title="Criar nova conta" onPress={handleNewGroup} />
    </Container>
  );
};

export default Groups;
