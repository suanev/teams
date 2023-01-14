import React from "react";

import logoImg from "../../../assets/logo.png";

import { BackButton, BackIcon, Container, Logo } from "./styles";

interface IProps {
  showBackButton?: boolean;
}

const Header: React.FC<IProps> = ({ showBackButton = true }) => {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
};

export default Header;
