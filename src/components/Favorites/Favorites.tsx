import { Dispatch, bindActionCreators } from "@reduxjs/toolkit";

import { ApplicationState } from "../../app/store";
import { FC } from "react";
import { ListItem } from "../ListItem/ListItem";
import { ListWrapper } from "./elements";
import { connect } from "react-redux";
import { favoritesSelector } from "../List/reducer";
import { removeFromFavorites } from "../List/actions";

type FavoritesProps = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

const FavoritesFC: FC<FavoritesProps> = ({ favoritesList }) => {
  return (
    <ListWrapper>
      {favoritesList?.map(x => {
        return (
          <ListItem
            posting={x}
            doesListIncludePosting={favoritesList.includes(x)}
            key={x.id}
          />
        );
      })}
    </ListWrapper>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  favoritesList: favoritesSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ removeFromFavorites }, dispatch);

export const Favorites = connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesFC);
