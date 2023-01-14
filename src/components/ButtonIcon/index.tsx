import React from "react";
import { TouchableOpacityProps } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

interface IProps extends TouchableOpacityProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
}

const ButtonIcon: React.FC<IProps> = ({ icon, type = "primary", ...rest }) => {
  return (
    <Container {...rest}>
      <Icon type={type} name={icon} />
    </Container>
  );
};

export default ButtonIcon;
