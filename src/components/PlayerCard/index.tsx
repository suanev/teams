import ButtonIcon from "components/ButtonIcon";
import React from "react";

import { Container, Icon, Name } from "./styles";

interface IProps {
  name: string;
  onRemove: () => void;
}

const PlayerCard: React.FC<IProps> = ({ name, onRemove }) => {
  return (
    <Container>
      <Icon name="person" />

      <Name>{name}</Name>

      <ButtonIcon icon="close" type="secondary" onPress={onRemove} />
    </Container>
  );
};

export default PlayerCard;
