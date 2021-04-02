import { Card } from "antd";
import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const TitleLogo = styled.img`
  max-width: 70px;
  max-height: 30px;
  margin-right: 10px;
  border: 1px #f0f0f0 solid;
  padding: 2px;
  box-sizing: content-box;
  overflow: hidden;
`;

export const TitleText = styled.div`
  text-overflow: ellipsis;
  flex: 1;
  overflow: hidden;
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
