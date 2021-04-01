import { Header, HeaderName, Main, Wrapper } from "./elements";

import { Body } from "../Body/Body";
import { FC } from "react";
import { GithubOutlined } from "@ant-design/icons";
import { SideMenu } from "../Menu/Menu";

export const Home: FC = () => {
  return (
    <Wrapper>
      <Header>
        <GithubOutlined style={{ fontSize: "46px", color: "#08c" }} />
        <HeaderName>Job Search</HeaderName>
      </Header>
      <Main>
        <SideMenu />
        <Body />
      </Main>
    </Wrapper>
  );
};
