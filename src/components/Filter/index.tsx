import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, FilterStyleProps, Title } from "./styles";

interface IProps extends FilterStyleProps, TouchableOpacityProps {
  title: string;
}

const Filter: React.FC<IProps> = ({ title, isActive = false, ...rest }) => {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Filter;
