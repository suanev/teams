import { useNavigation } from "@react-navigation/native";
import React from "react";

import logoImg from "../../../assets/logo.png";

import { BackButton, BackIcon, Container, Logo } from "./styles";

interface IProps {
  showBackButton?: boolean;
}

const Header: React.FC<IProps> = ({ showBackButton = true }) => {
  const { navigate } = useNavigation();

  const handleGoBack = () => {
    navigate("Groups");
  };
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
};

export default Header;
