import { useMemo, useState } from "react";
import { DefaultParams } from "wouter";
import { NotFound } from "../routes";
import { GameEntry, GameDialog, GameFailure, GameSuccess } from "../game";
import { story, StoryDialog, StoryEnd } from "../../story";
import { ChapterBackground, ChapterMain, ChapterWrapper } from "../styled";

export interface GameChapterParams extends DefaultParams {
  slug?: string;
}

export interface GameChapterProps {
  params: GameChapterParams;
}

export function GameChapter({ params }: GameChapterProps) {
  const chapter = useMemo(() => {
    if (!params.slug) {
      return null;
    }
    return story.chapters[decodeURIComponent(params.slug)] ?? null;
  }, [params.slug]);
  const [dialog, setDialog] = useState<StoryDialog | StoryEnd | null>(null);
  if (!chapter) {
    return <NotFound />;
  }
  return (
    <ChapterWrapper>
      <ChapterBackground source={chapter.background} />
      <ChapterMain>
        {!dialog ? (
          <GameEntry
            name={chapter.name}
            description={chapter.description}
            onStart={() => setDialog(chapter.dialogs[1])}
          />
        ) : "choices" in dialog ? (
          <GameDialog
            text={dialog.text}
            characterId={dialog.characterId}
            choices={dialog.choices}
            onChoice={(choice) => setDialog(chapter.dialogs[choice.next])}
          />
        ) : dialog.success ? (
          <GameSuccess message={dialog.text} />
        ) : (
          <GameFailure message={dialog.text} />
        )}
      </ChapterMain>
    </ChapterWrapper>
  );
}
