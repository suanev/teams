import React from "react";
import { TouchableOpacityProps, View } from "react-native";

import { Container, Icon, Title } from "./styles";

interface IProps extends TouchableOpacityProps {
  title: string;
}

const GroupCard: React.FC<IProps> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
};

export default GroupCard;
