import { StarOutlined, UnorderedListOutlined } from "@ant-design/icons";

import { FC } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { useLocation } from "react-router-dom";

export const SideMenu: FC = () => {
  const location = useLocation();
  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={["/list"]}
      selectedKeys={[location.pathname]}
      mode="inline"
    >
      <Menu.Item key="/list" icon={<UnorderedListOutlined />}>
        <Link to="/list">List</Link>
      </Menu.Item>

      <Menu.Item key="/favorites" icon={<StarOutlined />}>
        <Link to="/favorites">Favorites</Link>
      </Menu.Item>
    </Menu>
  );
};

// const mapDispatchToProps = (dispatch: Dispatch) =>
//   bindActionCreators({ navigationChange, add }, dispatch);

// export const Menu = connect(null, mapDispatchToProps)(MenuFC);

// actions.ts
// import { Navigation } from "../../models/Navigation";
// import { createAction } from "@reduxjs/toolkit";

// export const NAVIGATION_CHANGE = "NAVIGATION_CHANGE";
// export const navigationChange = createAction<Navigation>(NAVIGATION_CHANGE);

// export const ADD = "ADD";
// export const add = createAction(ADD);

// reducer.ts
// import { add, navigationChange } from "./actions";

// import { ApplicationState } from "../../app/store";
// import { Navigation } from "../../models/Navigation";
// import { createReducer } from "@reduxjs/toolkit";

// export interface NavigationState {
//   page: Navigation;
//   savedResults: number;
// }

// const initialState: NavigationState = { page: "List", savedResults: 0 };

// export const navigationReducer = createReducer(initialState, builder => {
//   builder.addCase(navigationChange, (state, action) => {
//     return { ...state, page: action.payload };
//   });
//   builder.addCase(add, (state, action) => {
//     return { ...state, savedResults: state.savedResults + 1 };
//   });
// });

// export const pageSelector = (state: ApplicationState) => state.navigation.page;
