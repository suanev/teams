import { useFocusEffect, useNavigation } from "@react-navigation/native";

import Button from "components/Button";
import GroupCard from "components/GroupCard";
import Header from "components/Header";
import Highlight from "components/Highlight";
import ListEmpty from "components/ListEmpty";
import Loader from "components/Loader";

import React, { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";

import { groupsGetAll } from "storage/group/groupsGetAll";

import { Container } from "./styles";

const Groups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<Array<string>>([""]);

  const { navigate } = useNavigation();

  const handleNewGroup = async () => {
    navigate("NewGroup");
  };

  const handleOpenGroup = async (group: string) => {
    navigate("Players", { group });
  };

  const fetchGroups = async () => {
    try {
      setIsLoading(true);

      const data = await groupsGetAll();
      setGroups(data);
      setIsLoading(false);
    } catch {
      Alert.alert("Turmas", "Ops! não foi possível carregar as turmas.");
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header showBackButton={false} />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          ListEmptyComponent={
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          }
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          renderItem={({ item }) => (
            <GroupCard
              key={item}
              title={item}
              onPress={() => handleOpenGroup(item)}
            />
          )}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
};

export default Groups;
