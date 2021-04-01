import { Card, Input } from "antd";

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

export const StyledCard = styled(Card)`
  width: 80%;
  margin-bottom: 10px;
  &:last-child {
    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 10px;
    }
  }
`;

export const StyledSearch = styled(Input)`
  width: 80%;
`;
