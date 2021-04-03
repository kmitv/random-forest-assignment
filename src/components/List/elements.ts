import { FileSearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const SearchWrapper = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px #f0f0f0 solid;
`;

export const ListWrapper = styled.div`
  flex: 1;
  width: 100%;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding: 10px;
`;

export const StyledSearch = styled(Input)`
  width: 80%;
`;

export const BlankScreen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFileSearchOutlined = styled(FileSearchOutlined)`
  font-size: 100px;
  color: #dce0e6;
`;
