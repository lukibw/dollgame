import { Switch, Route } from "wouter";
import { Authors, Home, NotFound, Project } from "./routes";

export function Router() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/project">
        <Project />
      </Route>
      <Route path="/authors">
        <Authors />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
