import { Redirect, Route, Switch } from "react-router";

import { FC } from "react";
import { Favorites } from "../Favorites/Favorites";
import { List } from "../List/List";
import { Wrapper } from "./elements";

export const Body: FC = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/list" render={() => <List />} />
        <Route exact path="/favorites" render={() => <Favorites />} />
        <Redirect from="*" to="/list" />
      </Switch>
    </Wrapper>
  );
};
