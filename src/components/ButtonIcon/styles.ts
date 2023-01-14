import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconTypeStyleProps = "primary" | "secondary";

interface Props {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  margin-left: 12px;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  color: type === "primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK,
  size: 24,
}))``;
