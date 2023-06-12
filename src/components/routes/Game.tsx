import { useCallback, useEffect, useState } from "react";

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
import { Header, Paragraph } from "../styled";

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
  const [state, setState] = useState<GameState>("loading");
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
    </>
  );
}
