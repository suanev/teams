import React from "react";
import { Text, View } from "react-native";

import { Container, SubTitle, Title } from "./styles";

interface IProps {
  title: string;
  subtitle: string;
}

const Highlight: React.FC<IProps> = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
};

export default Highlight;
