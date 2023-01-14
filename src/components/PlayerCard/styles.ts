import styled, { css } from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  height: 56px;

  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Name = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-size: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-left: 24px;
  margin-right: 4px;
`;
