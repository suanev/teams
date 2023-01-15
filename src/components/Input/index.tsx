import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

interface IProps extends TextInputProps {
  inputRef?: React.RefObject<TextInput>;
}

const Input: React.FC<IProps> = ({ inputRef, ...rest }) => {
  const theme = useTheme();

  return (
    <Container
      ref={inputRef}
      placeholderTextColor={theme.COLORS.GRAY_300}
      {...rest}
    />
  );
};

export default Input;
