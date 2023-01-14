import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

const Input: React.FC<TextInputProps> = ({ ...rest }) => {
  const theme = useTheme();

  return <Container placeholderTextColor={theme.COLORS.GRAY_300} {...rest} />;
};

export default Input;
