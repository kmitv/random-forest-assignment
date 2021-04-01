import { ChangeEvent, FC, useState } from "react";
import {
  ListWrapper,
  SearchWrapper,
  StyledCard,
  StyledSearch,
  Wrapper
} from "./elements";
import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";

import { JobPosting } from "../../models/JobPosting";
import axios from "axios";

export const List: FC = () => {
  // const [isSearchQueryTyped, setIsSearchQueryTyped] = useState(false);
  const [areResultsLoading, setAreResultsLoading] = useState(false);
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
              console.log(response.data);
              setResults(response.data);
              console.log("results.length :>> ", results && results.length);
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
              <StyledCard title={x.company} key={x.id} bordered={true}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </StyledCard>
            );
          })}
        {!!results && results.length === 0 && <div>nic nie znalas</div>}
        {!results && areResultsLoading && <div>ładowanko</div>}
        {!results && !areResultsLoading && <div>no machnij</div>}
      </ListWrapper>
    </Wrapper>
  );
};
