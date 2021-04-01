import { Redirect, Route, Switch } from "react-router";

// import { ApplicationState } from "../../app/store";
import { FC } from "react";
import { List } from "../List/List";
import { Wrapper } from "./elements";

// import { connect } from "react-redux";
// import { pageSelector } from "../Menu/reducer";

// type BodyProps = ReturnType<typeof mapStateToProps>;

export const Body: FC = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/list" render={() => <List />} />
        <Route exact path="/favorites" render={() => <div>faworyty</div>} />
        <Redirect from="*" to="/list" />
      </Switch>
    </Wrapper>
  );
};

// const mapStateToProps = (state: ApplicationState) => ({
//   page: pageSelector(state)
// });

// export const Body = connect(mapStateToProps)(BodyFC);
