import {
  Header,
  HeaderName,
  Main,
  StyledGithubOutlined,
  Wrapper
} from "./elements";

import { Body } from "../Body/Body";
import { FC } from "react";
import { SideMenu } from "../Menu/Menu";

export const Home: FC = () => {
  return (
    <Wrapper>
      <Header>
        <StyledGithubOutlined />
        <HeaderName>Job Search</HeaderName>
      </Header>
      <Main>
        <SideMenu />
        <Body />
      </Main>
    </Wrapper>
  );
};
