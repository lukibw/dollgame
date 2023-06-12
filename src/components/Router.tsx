import { Switch, Route } from "wouter";
import {
  HOME_ROUTE,
  AUTHORS_ROUTE,
  PROJECT_ROUTE,
  GAME_ROUTE,
} from "../constants";
import { Authors, Game, Home, NotFound, Project } from "./routes";

export function Router() {
  return (
    <Switch>
      <Route path={HOME_ROUTE}>
        <Home />
      </Route>
      <Route path={GAME_ROUTE}>
        <Game />
      </Route>
      <Route path={PROJECT_ROUTE}>
        <Project />
      </Route>
      <Route path={AUTHORS_ROUTE}>
        <Authors />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
