import { Switch, Route, useRoute } from "wouter";
import {
  HOME_ROUTE,
  AUTHORS_ROUTE,
  PROJECT_ROUTE,
  GAME_ROUTE,
} from "../constants";
import { Container } from "./styled";
import { Nav } from "./Nav";
import { Authors, Game, Home, NotFound, Project } from "./routes";
import { GameChapter, GameChapterParams } from "./game";

export function Router() {
  const [match, params] = useRoute<GameChapterParams>(`${GAME_ROUTE}/:slug`);
  if (match && params) {
    return <GameChapter params={params} />;
  }
  return (
    <Container>
      <Nav />
      <Switch>
        <Route path={HOME_ROUTE} component={Home} />
        <Route path={GAME_ROUTE} component={Game} />
        <Route path={PROJECT_ROUTE} component={Project} />
        <Route path={AUTHORS_ROUTE} component={Authors} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
}
