import Button from "components/Button";
import ButtonIcon from "components/ButtonIcon";
import Filter from "components/Filter";
import Header from "components/Header";
import Highlight from "components/Highlight";
import Input from "components/Input";
import ListEmpty from "components/ListEmpty";
import PlayerCard from "components/PlayerCard";
import React, { useState } from "react";
import { FlatList } from "react-native";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

const Players = () => {
  const [team, setTeam] = useState("time a");
  const [players, setPlayers] = useState(["Fernanda"]);

  return (
    <Container>
      <Header />
      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon="add" />
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

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
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

      <Button title="Remover turma" type="secondary" />
    </Container>
  );
};

export default Players;