import { ChangeEvent, FC, useState } from "react";
import { Dispatch, bindActionCreators } from "@reduxjs/toolkit";
import { ListWrapper, SearchWrapper, StyledSearch, Wrapper } from "./elements";
import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";
import { addToFavorites, removeFromFavorites } from "./actions";

import { ApplicationState } from "../../app/store";
import { JobPosting } from "../../models/JobPosting";
import { ListItem } from "../ListItem/ListItem";
import axios from "axios";
import { connect } from "react-redux";
import { favoritesSelector } from "./reducer";

type ListProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const ListFC: FC<ListProps> = ({
  favoritesList,
  addToFavorites,
  removeFromFavorites
}) => {
  const [areResultsLoading, setAreResultsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout>();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [results, setResults] = useState<Array<JobPosting> | null>(null);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    !!typingTimeout && clearTimeout(typingTimeout);
    !!results && setResults(null);
    const value = event.currentTarget.value;
    setSearchQuery(value);

    !!value &&
      setTypingTimeout(
        setTimeout(() => {
          console.log(`Szukaj: ${value}`);
          setAreResultsLoading(true);
          axios
            .get(`/positions.json?utf8=✓&description=${value}&location=`)
            .then(response => {
              // handle success
              setAreResultsLoading(false);
              setResults(response.data);
              setIsError(false);
            })

            .catch(error => {
              setIsError(true);
              console.error(error);
            });
        }, 1000)
      );
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <StyledSearch
          placeholder="Wyszukaj"
          onChange={handleSearch}
          value={searchQuery}
          disabled={areResultsLoading}
          width="80%"
          prefix={areResultsLoading ? <LoadingOutlined /> : <SearchOutlined />}
        />
      </SearchWrapper>
      <ListWrapper>
        {!!results &&
          results.length > 0 &&
          results.map(x => {
            return (
              <ListItem
                posting={x}
                doesListIncludePosting={favoritesList.includes(x)}
                key={x.id}
              />
            );
          })}
        {!!results && results.length === 0 && <div>nic nie znalas</div>}
        {!results && areResultsLoading && <div>ładowanko</div>}
        {!results && !areResultsLoading && <div>no machnij</div>}
      </ListWrapper>
    </Wrapper>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  favoritesList: favoritesSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ addToFavorites, removeFromFavorites }, dispatch);

export const List = connect(mapStateToProps, mapDispatchToProps)(ListFC);
