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
import { story } from "../../story";
import RozprawaSądowa from "../../assets/images/rozprawa_sądowa.jpg";
import Adwokat from "../../assets/images/adwokat.png";
import Baronowa from "../../assets/images/baronowa.png";
import Dziecko from "../../assets/images/dziecko.png";
import Maruszewicz from "../../assets/images/maruszewicz.png";
import Rzecki from "../../assets/images/rzecki.png";
import Sędzia from "../../assets/images/sędzia.png";
import Służąca from "../../assets/images/służąca.png";
import Stawska from "../../assets/images/stawska.png";
import Wokulski from "../../assets/images/wokulski.png";
import { GAME_ROUTE } from "../../constants";

const assets = [
  RozprawaSądowa,
  Adwokat,
  Baronowa,
  Dziecko,
  Maruszewicz,
  Rzecki,
  Sędzia,
  Służąca,
  Stawska,
  Wokulski,
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
        assets.map(
          (asset) =>
            new Promise((resolve, reject) => {
              const image = new Image();
              image.src = asset;
              image.onload = resolve;
              image.onerror = reject;
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
          ([slug, { background, name }], index) => (
            <StartContainer
              role="button"
              tabIndex={0}
              key={index}
              onClick={handlePreviewClick(slug)}
            >
              <StartLabel>{name}</StartLabel>
              <StartWindow background={background}>
                <StartButton as="div">Wejdź do gry</StartButton>
              </StartWindow>
            </StartContainer>
          )
        )}
      </StartGroup>
    </>
  );
}
