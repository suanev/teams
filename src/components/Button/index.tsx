import React from "react";
import { TouchableOpacityProps } from "react-native";

import { ButtonTypeStyleProps, Container, Title } from "./styles";

interface IProps extends TouchableOpacityProps {
  title: string;
  type?: ButtonTypeStyleProps;
}

const Button: React.FC<IProps> = ({ title, type = "primary", ...rest }) => {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
