import { useCallback, useEffect, useState } from "react";
import { useLocation } from "wouter";
import {
  Header,
  Paragraph,
  StartContainer,
  StartLabel,
  StartWindow,
  StartButton,
  StartGroup,
} from "../styled";
import {
  RzeckiImage,
  SędziaImage,
  AdwokatImage,
  DzieckoImage,
  StawskaImage,
  SłużącaImage,
  BaronowaImage,
  WokulskiImage,
  MaruszewiczImage,
  RozprawaSądowaImage,
} from "../../assets";
import { story } from "../../story";
import { GAME_ROUTE } from "../../constants";

const images = [
  RzeckiImage,
  SędziaImage,
  AdwokatImage,
  DzieckoImage,
  StawskaImage,
  SłużącaImage,
  BaronowaImage,
  WokulskiImage,
  MaruszewiczImage,
  RozprawaSądowaImage,
];

type GameState = "loading" | "error" | "ready";

export function Game() {
  const [, setLocation] = useLocation();
  const [state, setState] = useState<GameState>("loading");
  const handlePreviewClick = (slug: string) => () => {
    setLocation(`${GAME_ROUTE}/${encodeURIComponent(slug)}`);
  };
  const load = useCallback(async () => {
    try {
      await Promise.all(
        images.map(
          (image) =>
            new Promise((resolve, reject) => {
              const img = new Image();
              img.src = image;
              img.onload = resolve;
              img.onerror = reject;
            })
        )
      );
      setState("ready");
    } catch {
      setState("error");
    }
  }, []);
  useEffect(() => {
    load();
  }, [load]);
  if (state === "loading") {
    return <Paragraph>Ładowanie...</Paragraph>;
  }
  if (state === "error") {
    return <Paragraph>Wystąpił błąd</Paragraph>;
  }
  return (
    <>
      <Header small gutter>
        Gra
      </Header>
      <StartGroup>
        {Object.entries(story.chapters).map(
          ([slug, { image, name }], index) => (
            <StartContainer
              role="button"
              tabIndex={0}
              key={index}
              onClick={handlePreviewClick(slug)}
            >
              <StartLabel>{name}</StartLabel>
              <StartWindow background={image}>
                <StartButton as="div">Wejdź do gry</StartButton>
              </StartWindow>
            </StartContainer>
          )
        )}
      </StartGroup>
    </>
  );
}
