import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: VFC = memo(() => {
  return (
    <LoginUserProvider>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route
          path="/home"
          //propsの中のmatchのurlに　/home　の値が入ってくる
          render={({ match: { url } }) => (
            <Switch>
              {homeRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  <HeaderLayout>{route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
        {/* pathにアスタリスクを指定し、こぼれてきたものw全部拾う */}
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </LoginUserProvider>
  );
});
