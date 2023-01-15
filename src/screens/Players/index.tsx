import { useNavigation, useRoute } from "@react-navigation/native";

import Button from "components/Button";
import ButtonIcon from "components/ButtonIcon";
import Filter from "components/Filter";
import Header from "components/Header";
import Highlight from "components/Highlight";
import Input from "components/Input";
import ListEmpty from "components/ListEmpty";
import Loader from "components/Loader";
import PlayerCard from "components/PlayerCard";

import React, { useEffect, useRef, useState } from "react";
import { Alert, FlatList, TextInput } from "react-native";

import { groupRemoveByName } from "storage/group/groupRemoveByName";
import { playerAddByGroup } from "storage/player/playerAddByGroup";
import { playerRemoveByGroup } from "storage/player/playerRemoveByGroup";
import { playersGetByGroup } from "storage/player/playersGetByGroup";
import { playersGetByGroupAndTeam } from "storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "storage/player/PlayerStorageDTO";
import { AppError } from "utils/AppError";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

interface RouteParams {
  group: string;
}

const Players = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [team, setTeam] = useState("time a");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");

  const route = useRoute();
  const { navigate } = useNavigation();
  const { group } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const handleAddPlayer = async () => {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        "Nova pessoa",
        "Informe o nome da pessoa para adicionar"
      );
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur();

      setNewPlayerName("");
      fetchPlayersByTeam();

      await playersGetByGroup(group);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo jogador", error.message);
      } else {
        Alert.alert("Novo jogador", "Não foi possível adicionar.");
      }
    }
  };

  const fetchPlayersByTeam = async () => {
    try {
      setIsLoading(true);

      const playersByTeam = await playersGetByGroupAndTeam(group, team);

      setPlayers(playersByTeam);
    } catch (error) {
      Alert.alert(
        "Jogadores",
        "Não foi possível carregar os jogadores do time selecionado."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlayerRemove = async (playerName: string) => {
    try {
      await playerRemoveByGroup(playerName, group);

      await fetchPlayersByTeam();
    } catch (error) {
      Alert.alert(
        "Remover jogador",
        "Ops! não foi possível remover o jogador."
      );
    }
  };

  const groupRemove = async () => {
    try {
      await groupRemoveByName(group);

      navigate("Groups");
    } catch (error) {
      Alert.alert("Remover grupo", "Ops! não foi possível remover o grupo.");
    }
  };

  const handleGroupRemove = () => {
    Alert.alert("Remover grupo", "deseja remover o grupo?", [
      {
        text: "Não",
        onPress: () => {
          return false;
        },
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: groupRemove,
      },
    ]);
  };

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header />
      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />

        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          horizontal={true}
          data={["time a", "time b"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => handlePlayerRemove(item.name)}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Não há pessoas nesse time" />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 },
          ]}
        />
      )}

      <Button
        title="Remover turma"
        type="secondary"
        onPress={handleGroupRemove}
      />
    </Container>
  );
};

export default Players;
