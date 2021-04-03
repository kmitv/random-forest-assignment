import { GithubOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  background-color: white;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  overflow: hidden;
`;

export const HeaderName = styled.div`
  margin-left: 10px;
  font-size: 20px;
`;

export const StyledGithubOutlined = styled(GithubOutlined)`
  font-size: 46px;
  color: #08c;
`;
