import { Dispatch, bindActionCreators } from "@reduxjs/toolkit";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { StyledCard, TitleLogo, TitleText, TitleWrapper } from "./elements";
import { addToFavorites, removeFromFavorites } from "../List/actions";

import { Button } from "antd";
import { FC } from "react";
import { JobPosting } from "../../models/JobPosting";
import { connect } from "react-redux";

type ListItemProps = ReturnType<typeof mapDispatchToProps> & {
  posting: JobPosting;
  doesListIncludePosting: boolean;
};

const ListItemFC: FC<ListItemProps> = ({
  posting,
  doesListIncludePosting,
  addToFavorites,
  removeFromFavorites
}) => {
  const handleFavoriteClick = () => {
    doesListIncludePosting
      ? removeFromFavorites(posting.id)
      : addToFavorites(posting);
  };

  return (
    <StyledCard
      title={
        <TitleWrapper>
          <TitleLogo src={posting.company_logo} alt={posting.company} />
          <TitleText>{posting.title}</TitleText>
          <Button
            type="primary"
            shape="circle"
            onClick={() => handleFavoriteClick()}
            icon={doesListIncludePosting ? <StarFilled /> : <StarOutlined />}
          />
        </TitleWrapper>
      }
      key={posting.id}
      bordered={true}
    >
      <p>{posting.company}</p>
      <p>{posting.location}</p>
    </StyledCard>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ addToFavorites, removeFromFavorites }, dispatch);

export const ListItem = connect(null, mapDispatchToProps)(ListItemFC);
